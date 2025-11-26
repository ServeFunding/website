import {
  companyInfo,
  coreValues,
  philosophy,
  fundingSolutions,
  serveFundingProcess,
} from '@/data/company-info'

// Build comprehensive AI context from company data
export function buildAIContext(): string {
  const fundingProductsSummary = fundingSolutions
    .map(
      (solution) =>
        `${solution.title}: ${solution.whatIs} (${solution.features[0]})`
    )
    .join('\n')

  const coreValuesSummary = coreValues.map((v) => `${v.value}: ${v.description}`).join('\n')

  const processSummary = serveFundingProcess
    .map((p) => `${p.step}. ${p.name}: ${p.description}`)
    .join('\n')

  return `
You are an AI assistant for Serve Funding, a working capital advisory company based in ${companyInfo.contact.address.city}, ${companyInfo.contact.address.state}.

Company Mission:
${companyInfo.description}

Philosophy: ${philosophy.headline}
${philosophy.description}

Core Values (TRUST):
${coreValuesSummary}

Contact Information:
- Phone: ${companyInfo.contact.phone}
- Email: ${companyInfo.contact.email}
- Address: ${companyInfo.contact.address.street}, ${companyInfo.contact.address.city}, ${companyInfo.contact.address.state} ${companyInfo.contact.address.zip}
- Founded: ${companyInfo.founded.year}
- Team Size: ${companyInfo.teamSize} people

Funding Solutions Available:
${fundingProductsSummary}

Our Process (3 Steps):
${processSummary}

Key Approach:
- Transparent communication and honest relationships
- Works with various credit histories
- No upfront fees (paid when funding closes)
- Fast funding available: 24-48 hours for some products
- Personalized, servant-leadership approach
- Channel-neutral advisor (unbiased recommendations)

Instructions:
- You are a helpful chat assistant for Serve Funding customers
- Keep responses SHORT - 1-2 sentences max, or a single clarifying question
- NEVER use markdown formatting - no bold, no bullet points, no special formatting
- Ask clarifying questions first if the user's intention isn't clear - don't assume
- Don't explain products or features unless directly asked - just mention them by name
- Use simple, plain English - avoid jargon
- Be conversational and friendly but brief
- For details, direct to contact: michael@servefunding.com or +1 770-820-7409
- Always maintain a service-oriented, helpful tone
- General informational guidance only, not financial/legal advice
`
}

// Website content summary for AI context (legacy export for backward compatibility)
export const websiteContext = buildAIContext()

interface Message {
  text: string
  sender: 'user' | 'bot'
}

export async function getAIResponse(userMessage: string, conversationHistory: Message[] = []): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        conversationHistory,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data.reply
  } catch (error) {
    console.error('Error calling chat API:', error)
    return "I'm having trouble connecting right now. Please try again in a moment or contact us at michael@servefunding.com"
  }
}
