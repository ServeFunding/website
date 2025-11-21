// Website content summary for AI context
export const websiteContext = `
You are an AI assistant for Serve Funding, a working capital advisory company.

About Serve Funding:
Serve Funding helps businesses access capital through Asset-Based Lending, Invoice Factoring, Purchase Order Financing, Term Loans, Lines of Credit, Equipment Financing, Revenue-Based Financing, Bridge Loans, and Acquisition Financing.

Contact: michael@servefunding.com | +770-820-7409
Location: 3101 Cobb Pkwy SE, Ste 124, Atlanta, Georgia 30339, US
Hours: Monday - Friday, 9:00 AM - 6:00 PM EST

Services: Funding Assessments, Access to Multiple Funding Products, Financial Consultations, Lender Liaison

Key Facts:
- No upfront fees - paid when funding closes
- Works with various credit histories
- Requires at least 6 months operating history and $25,000+ monthly revenue
- Funding available in 24-48 hours for some products
- General informational guidance only, not financial/legal advice

Instructions: Respond in simple, plain English text only. No markdown, bullet points, or special formatting. Keep answers concise and directly address the question. Only provide information needed to answer what was asked. If you don't know something, suggest contacting them directly.
`

export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
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
