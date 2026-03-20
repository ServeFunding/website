import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'team@portal.servefunding.com'
// Comma-separated list of recipients
const NOTIFY_RECIPIENTS = (process.env.RESEND_NOTIFY_EMAILS || 'tim@ai-ascend.com')
  .split(',')
  .map(e => e.trim())
  .filter(Boolean)

const DEAL_TRACKER_URL = 'https://docs.google.com/spreadsheets/d/1uvyjzPHvMMKQX_DdoMg2HfMzKL6naRqXFeRpaUZUSTI/edit?gid=1459245510#gid=1459245510'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildContactTable(body: Record<string, any>): string {
  const { name, email, phone, company, user_role } = body
  const isOwner = user_role === 'A Business Owner or Operator Seeking Funding'
  const roleLabel = isOwner ? 'Business Owner / Operator' : user_role || 'Unknown'

  const rows: Array<{ label: string; value: string; isLink?: boolean }> = [
    { label: 'Name', value: name },
    { label: 'Email', value: email, isLink: true },
    ...(company ? [{ label: 'Company', value: company }] : []),
    ...(phone ? [{ label: 'Phone', value: phone }] : []),
    { label: 'Role', value: roleLabel },
  ]

  return rows.map((row, i) => `
    <tr${i % 2 === 1 ? ' style="background: #f9f9f9;"' : ''}>
      <td style="padding: 8px 12px; font-weight: 600; color: #666; width: 140px;">${row.label}</td>
      <td style="padding: 8px 12px; color: #2a231a;">${
        row.isLink
          ? `<a href="mailto:${escapeHtml(row.value)}" style="color: #c99c42;">${escapeHtml(row.value)}</a>`
          : escapeHtml(row.value)
      }</td>
    </tr>`).join('')
}

function buildTriageTable(body: Record<string, any>): string {
  const fields: Array<{ label: string; key: string }> = [
    { label: 'Annual Revenue', key: 'annual_revenue' },
    { label: 'Funding Amount', key: 'funding_amount' },
    { label: 'Time in Business', key: 'time_in_business' },
    { label: 'Credit Score', key: 'owner_credit_score' },
    { label: 'Industry', key: 'business_industry' },
    { label: 'Financing Needs', key: 'financing_needs' },
    { label: 'Triage Action', key: 'triage_action' },
    { label: 'Calendly URL', key: 'calendly_url' },
  ]

  const rows = fields
    .filter(f => {
      const val = body[f.key]
      if (Array.isArray(val)) return val.length > 0
      return val && val !== ''
    })
    .map(f => {
      const val = body[f.key]
      const display = Array.isArray(val) ? val.join(', ') : val
      return { label: f.label, value: display }
    })

  if (rows.length === 0) return ''

  return `
    <h3 style="color: #2a231a; margin-top: 24px; margin-bottom: 12px;">Triage Details</h3>
    <table style="width: 100%; border-collapse: collapse;">
      ${rows.map((row, i) => `
      <tr${i % 2 === 1 ? ' style="background: #f9f9f9;"' : ''}>
        <td style="padding: 8px 12px; font-weight: 600; color: #666; width: 140px;">${row.label}</td>
        <td style="padding: 8px 12px; color: #2a231a;">${escapeHtml(String(row.value))}</td>
      </tr>`).join('')}
    </table>`
}

// type=early: initial contact capture
// type=calendly: transitioning to scheduling (includes triage + AI conversation)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, type = 'early' } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
    }

    const isOwner = body.user_role === 'A Business Owner or Operator Seeking Funding'
    const roleShort = isOwner ? 'Owner' : 'Partner'

    if (type === 'early') {
      // First email: someone just started the form
      const { data, error } = await resend.emails.send({
        from: `Serve Funding <${FROM_EMAIL}>`,
        to: NOTIFY_RECIPIENTS,
        subject: `New Lead: ${name} (${roleShort}) just started the form`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2a231a; margin-bottom: 24px;">New Lead Filling Out the Form</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${buildContactTable(body)}
            </table>
            <p style="color: #999; font-size: 13px; margin-top: 24px;">
              They are currently completing the triage questions. Full details will follow when they finish.
            </p>
            <p style="font-size: 13px; margin-top: 16px;">
              You should see this lead pop up in the
              <a href="${DEAL_TRACKER_URL}" style="color: #c99c42;">deal tracker</a>
              soon.
            </p>
          </div>
        `,
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
      return NextResponse.json({ success: true, id: data?.id })
    }

    if (type === 'calendly') {
      // Second email: they're scheduling a call — full details + AI conversation
      const transitionSource = body.transition_source || 'unknown'
      const dealContext = body.deal_context || ''
      const chatTranscript = body.chat_transcript || ''

      const sourceLabel = transitionSource === 'mike_triage'
        ? 'Fast-tracked (Mike triage)'
        : transitionSource === 'ai_chat'
        ? 'After AI conversation'
        : transitionSource === 'schedule_directly'
        ? 'Skipped to scheduling'
        : transitionSource

      const { data, error } = await resend.emails.send({
        from: `Serve Funding <${FROM_EMAIL}>`,
        to: NOTIFY_RECIPIENTS,
        subject: `${name} (${roleShort}) is scheduling a call`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2a231a; margin-bottom: 24px;">${escapeHtml(name)} is Scheduling a Call</h2>
            <p style="color: #666; margin-bottom: 16px;">
              <strong>How they got here:</strong> ${escapeHtml(sourceLabel)}
            </p>
            <table style="width: 100%; border-collapse: collapse;">
              ${buildContactTable(body)}
            </table>
            ${buildTriageTable(body)}
            ${chatTranscript ? `
            <h3 style="color: #2a231a; margin-top: 24px; margin-bottom: 12px;">AI Conversation</h3>
            <div style="background: #f5f5f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #333; line-height: 1.5;">
              ${escapeHtml(chatTranscript).split('\n').map(line => {
                const isBot = line.startsWith('Serve Funding:')
                const label = isBot ? 'Serve Funding' : line.split(':')[0]
                const text = line.substring(line.indexOf(':') + 2)
                return `<div style="margin-bottom: 12px; padding: 10px 14px; border-radius: 12px; max-width: 90%; ${
                  isBot
                    ? 'background: #ffffff; border: 1px solid #e5e5e0;'
                    : 'background: #2a231a; color: #ffffff; margin-left: auto;'
                }"><div style="font-size: 11px; font-weight: 600; margin-bottom: 4px; ${isBot ? 'color: #c99c42;' : 'color: #d4c9a8;'}">${escapeHtml(label)}</div>${escapeHtml(text)}</div>`
              }).join('')}
            </div>` : dealContext ? `
            <h3 style="color: #2a231a; margin-top: 24px; margin-bottom: 12px;">Deal Context</h3>
            <div style="background: #f5f5f0; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; color: #333; line-height: 1.6;">
${escapeHtml(dealContext)}
            </div>` : ''}
            <p style="font-size: 13px; margin-top: 24px;">
              Check the
              <a href="${DEAL_TRACKER_URL}" style="color: #c99c42;">deal tracker</a>
              for the full record.
            </p>
          </div>
        `,
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
      return NextResponse.json({ success: true, id: data?.id })
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  } catch (error) {
    console.error('Notify API error:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}
