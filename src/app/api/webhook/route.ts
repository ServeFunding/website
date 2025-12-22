export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { webhookUrl, ...data } = body

    if (!webhookUrl) {
      return Response.json(
        { error: 'webhookUrl is required' },
        { status: 400 }
      )
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error(`Webhook failed with status ${response.status}`)
      return Response.json(
        { error: 'Webhook request failed', status: response.status },
        { status: response.status }
      )
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Webhook forwarding error:', error)
    return Response.json(
      { error: 'Failed to forward webhook' },
      { status: 500 }
    )
  }
}
