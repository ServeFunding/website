import Anthropic from "@anthropic-ai/sdk"
import { websiteContext } from "@/lib/ai"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: websiteContext,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    })

    const textContent = response.content.find(block => block.type === "text")
    const reply = textContent && "text" in textContent ? textContent.text : "Sorry, I couldn't generate a response."

    return Response.json({ reply })
  } catch (error) {
    console.error("Chat API error:", error)
    return Response.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    )
  }
}
