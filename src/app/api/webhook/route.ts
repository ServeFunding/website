export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log('Webhook route received data:', data)

    const webhookUrl = 'https://primary-production-ac5d.up.railway.app/webhook/5d382095-a1bb-4f67-84a6-e154aa511b76'

    // Build query string from data
    const params = new URLSearchParams()
    Object.entries(data).forEach(([key, value]) => {
      params.append(key, value as string)
    })

    const urlWithParams = `${webhookUrl}?${params.toString()}`
    console.log('Sending GET to n8n webhook:', urlWithParams)

    // Forward the request to the n8n webhook as GET
    const response = await fetch(urlWithParams, {
      method: 'GET',
    })

    console.log('Webhook response status:', response.status, response.statusText)

    if (!response.ok) {
      console.error('Webhook error:', response.statusText)
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Webhook proxy error:', error)
    // Return success even if webhook fails to avoid blocking form submission
    return Response.json({ success: true })
  }
}
