import Anthropic from "@anthropic-ai/sdk"
import { buildDealAIContext } from "@/lib/ai"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { message, conversationHistory, formData } = await request.json()

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Build message array from conversation history
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = []

    if (conversationHistory && Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory) {
        messages.push({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        })
      }
    }

    // Add the current user message
    messages.push({
      role: "user",
      content: message,
    })

    // Build system prompt with form context
    const userRole = formData?.user_role
    const dealContext = buildDealAIContext(userRole)

    const systemPrompt = `${dealContext}

User Information from Deal Inquiry Form:
- Name: ${formData?.firstname || ''} ${formData?.lastname || ''}
- Company: ${formData?.company || 'Not specified'}
- Email: ${formData?.email || 'Not provided'}
- Phone: ${formData?.phone || 'Not provided'}
- Capital Needed: ${formData?.capital_for || 'Not specified'}
- Deal Details: ${formData?.contact_us_details || 'Not provided'}
- Business Industry: ${formData?.business_industry || 'Not specified'}
- Time in Business: ${formData?.time_in_business || 'Not specified'}
- Annual Revenue: ${formData?.annual_revenue || 'Not specified'}
- Financing Needs: ${formData?.financing_needs?.join(', ') || 'Not specified'}
- Funding Amount Needed: ${formData?.funding_amount || 'Not specified'}
- Owner Credit Score: ${formData?.owner_credit_score || 'Not specified'}

Use this context to provide personalized responses that reference their specific situation.`

    const response = await anthropic.beta.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      betas: ["structured-outputs-2025-11-13"],
      system: systemPrompt,
      messages,
      output_format: {
        type: "json_schema",
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "The conversational response to the user"
            },
            context: {
              type: "string",
              description: "Brief summary of what was learned about their deal/situation (1-2 sentences)"
            },
            showSchedule: {
              type: "boolean",
              description: "Whether to show the schedule call button (true if deal fits scope, false otherwise)"
            }
          },
          required: ["message", "context"],
          additionalProperties: false
        }
      }
    })

    const textContent = response.content.find(block => block.type === "text")
    const reply = textContent && "text" in textContent ? textContent.text : JSON.stringify({ message: "Sorry, I couldn't generate a response." })

    return Response.json({ reply })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("Deal Inquiry API error:", errorMessage)
    console.error("Full error:", error)
    return Response.json(
      { error: `Failed to process deal inquiry request: ${errorMessage}` },
      { status: 500 }
    )
  }
}
