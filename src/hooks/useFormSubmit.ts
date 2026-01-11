'use client'

import { useState } from 'react'
import { trackFormSubmission, trackHubSpotNativeForm } from '@/lib/tracking'

export interface FormSubmitData {
  firstname?: string
  lastname?: string
  name?: string
  email?: string
  phone?: string
  company?: string
  capital_for?: string
  contact_us_details?: string
  partnership_for__commercial_banking__advisory_?: string
  // Deal inquiry expanded fields
  user_role?: string
  business_industry?: string
  time_in_business?: string
  annual_revenue?: string
  financing_needs?: string[]
  funding_amount?: string
  owner_credit_score?: string
  company_state?: string
  calendly_url?: string
}

export function useFormSubmit(
  formType: string,
  webhookUrl?: string,
  calendlyUrl?: string,
  onAfterSubmit?: (data: FormSubmitData) => void
) {
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<FormSubmitData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Stop the event from propagating to HubSpot's global listeners
    if (e.nativeEvent) {
      (e.nativeEvent as Event).stopImmediatePropagation?.()
    }

    const form = e.currentTarget
    setIsSubmitting(true)

    // Capture form data
    const rawFormData = new FormData(form)
    const data: Record<string, any> = {}
    const webhookData: Record<string, any> = {} // Complete data for webhook (includes honeypot)
    const financingNeeds: string[] = []
    const honeypot = rawFormData.get('company_phone') as string

    // Check honeypot - if filled, it's likely a bot
    // Send to webhook for logging/visibility, but skip HubSpot
    if (honeypot) {
      // Mark form as spam to prevent HubSpot from picking it up
      form.setAttribute('data-spam-detected', 'true')
      
      // Build webhook payload for spam detection
      if (webhookUrl) {
        try {
          const spamPayload = {
            ...webhookData,
            formType,
            is_spam: true,
            submittedAt: new Date().toISOString(),
          }
          await fetch('/api/webhook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              webhookUrl,
              ...spamPayload,
            }),
          })
        } catch (error) {
          console.error('Spam webhook submission error:', error)
        }
      }
      form.reset()
      setIsSubmitting(false)
      // Silently fail - no success state, no HubSpot tracking
      return
    }

    rawFormData.forEach((value, key) => {
      // Build webhook data with all fields including honeypot
      if (key === 'financing_needs') {
        financingNeeds.push(value as string)
        webhookData[key] = webhookData[key] ? [...webhookData[key], value] : [value]
      } else {
        webhookData[key] = value as string
      }

      // Handle multi-select checkboxes (financing_needs) and skip honeypot for HubSpot data
      if (key === 'financing_needs') {
        financingNeeds.push(value as string)
      } else if (key !== 'company_phone') {
        data[key] = value as string
      }
    })

    const submittedFormData: FormSubmitData = {
      firstname: data.firstname || '',
      lastname: data.lastname || '',
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      company: data.company || '',
      capital_for: data.capital_for || '',
      contact_us_details: data.contact_us_details || '',
      partnership_for__commercial_banking__advisory_: data.partnership_for__commercial_banking__advisory_ || '',
      // Deal inquiry expanded fields
      user_role: data.user_role || '',
      business_industry: data.business_industry || '',
      time_in_business: data.time_in_business || '',
      annual_revenue: data.annual_revenue || '',
      financing_needs: financingNeeds,
      funding_amount: data.funding_amount || '',
      owner_credit_score: data.owner_credit_score || '',
      company_state: data.company_state || '',
      calendly_url: data.calendly_url || '',
    }

    setFormData(submittedFormData)

    // Track form submission to Umami
    trackFormSubmission(formType)
    // Track non-HubSpot form submission so it appears in HubSpot
    trackHubSpotNativeForm(formType, form)

    // HubSpot: The tracking code in layout.tsx automatically captures this form submission
    // Webhook: Send to webhook if provided
    if (webhookUrl) {
      try {
        const webhookPayload = {
          ...webhookData,
          formType,
          financing_needs: financingNeeds, // Ensure financing_needs is an array
          submittedAt: new Date().toISOString(),
        }
        await fetch('/api/webhook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            webhookUrl,
            ...webhookPayload,
          }),
        })
      } catch (error) {
        console.error('Webhook submission error:', error)
      }
    }

    // Small delay to ensure tracking completes, then proceed
    setTimeout(() => {
      if (onAfterSubmit) {
        onAfterSubmit(submittedFormData)
      }

      if (calendlyUrl) {
        // Open Calendly in new tab for intro/partner forms
        window.open(calendlyUrl, '_blank')
      } else {
        // Show success page for other forms
        setSuccess(true)
      }
      form.reset()
      setIsSubmitting(false)
    }, 300)
  }

  return { success, handleSubmit, formData, isSubmitting }
}
