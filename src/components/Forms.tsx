'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  FormInput,
  FormGroup,
} from '@/components/ui'
import { trackFormSubmission, trackHubSpotNativeForm } from '@/lib/tracking'
import { COLORS } from '@/lib/colors'

// Reusable Success Content Component
export interface FormSuccessContentProps {
  message: string | React.ReactNode
  formData: FormSubmitData
  calendlyUrl: string
  ctaText?: string
  showCTA?: boolean
}

export function FormSuccessContent({
  message,
  calendlyUrl,
  ctaText = 'Schedule a Call',
}: FormSuccessContentProps) {
  return (
    <div className="text-center py-12">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex justify-center"
      >
        <CheckCircle className="w-12 h-12" style={{ color: COLORS.primary }} />
      </motion.div>
      <Text size="lg" className="mb-6">{message}</Text>
      <div className="space-y-3">
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="default" size="lg">
            {ctaText}
          </Button>
        </a>
      </div>
    </div>
  )
}

// Hook for form submission logic
export interface FormSubmitData {
  firstname?: string
  lastname?: string
  email?: string
  phone?: string
  company?: string
  capital_for?: string
  contact_us_details?: string
  partnership_for__commercial_banking__advisory_?: string
}

export function useFormSubmit(
  formType: string,
  webhookUrl?: string,
  calendlyUrl?: string,
  onAfterSubmit?: (data: FormSubmitData) => void
) {
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<FormSubmitData>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // Capture form data
    const rawFormData = new FormData(form)
    const data: Record<string, string> = {}

    rawFormData.forEach((value, key) => {
      data[key] = value as string
    })

    const submittedFormData: FormSubmitData = {
      firstname: data.firstname || '',
      lastname: data.lastname || '',
      email: data.email || '',
      phone: data.phone || '',
      company: data.company || '',
      capital_for: data.capital_for || '',
      contact_us_details: data.contact_us_details || '',
      partnership_for__commercial_banking__advisory_: data.partnership_for__commercial_banking__advisory_ || '',
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
        console.log('Submitting form data to webhook:', data)
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
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
    }, 300)
  }

  return { success, handleSubmit, formData }
}

// Form Container with consistent styling across all forms
function FormContainer({
  children,
  title,
  subtitle,
  background = "primary"
}: {
  children: React.ReactNode
  title: string
  subtitle?: string
  background?: "primary" | "background"
}) {
  const isDarkBackground = background === "primary"

  return (
    <Section background={background} className='overflow-visible'>
      <Container className='flex flex-col items-center !max-w-5xl'>
          {title && (
            <FadeIn className="text-center mb-12">
              <Heading size="h2" color={isDarkBackground ? "white" : "primary"}>
                {title}
              </Heading>
              {subtitle && (
                <Text size="lg" color={isDarkBackground ? "white" : "primary"} className="mt-2">
                  {subtitle}
                </Text>
              )}
            </FadeIn>
          )}
          <FadeIn delay={0.2} className='w-full'>
            <Card className="md:p-12 bg-gray-100">
              {children}
            </Card>
          </FadeIn>
      </Container>
    </Section>
  )
}

// Standard Lead Form (for homepage, solutions, fundings, contact, etc.)
interface IntroCallFormProps {
  title?: string
  subtitle?: string
}

export function IntroCallForm({ title = "Let's Talk.", subtitle }: IntroCallFormProps = {}) {
  const buildCalendlyUrl = (data: Record<string, string>) => {
    return `https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?name=${encodeURIComponent(`${data.firstname || ''} ${data.lastname || ''}`.trim())}&email=${encodeURIComponent(data.email || '')}&phone=${encodeURIComponent(data.phone || '')}&a1=${encodeURIComponent(data.company || '')}&a2=${encodeURIComponent(`${data.capital_for || ''} - ${data.contact_us_details || ''}`.trim())}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
  }

  const { success, handleSubmit, formData } = useFormSubmit(
    'intro_call',
    undefined,
    '',
    (data) => {
      const url = buildCalendlyUrl(data as Record<string, string>)
      window.open(url, '_blank')
    }
  )

  return (
    <FormContainer title={title} subtitle={subtitle}>
      {success ? (
        <FormSuccessContent
          message={`Thanks for your info${formData.firstname ? `, ${formData.firstname}` : ''}! Click below to schedule your call.`}
          formData={formData}
          calendlyUrl={buildCalendlyUrl(formData as Record<string, string>)}
          ctaText="Schedule a Call"
        />
      ) : (
        <form className="form-intro_call flex flex-col gap-6" onSubmit={handleSubmit}>
          <FormGroup columns={2}>
            <FormInput type="text" name="firstname" label="First Name" required />
            <FormInput type="text" name="lastname" label="Last Name" required />
          </FormGroup>

          <FormInput type="email" name="email" label="Email Address" required />

          <FormGroup columns={2}>
            <FormInput type="text" name="company" label="Company Name" required />
            <FormInput type="tel" name="phone" label="Phone Number" required />
          </FormGroup>

          <FormInput type="text" name="capital_for" label="Capital Needed (e.g., $250K - $1MM)" />

          <FormInput
            as="textarea"
            name="contact_us_details"
            rows={4}
            label="Tell us about your funding needs..."
          />

          {/* Honeypot field - hidden from humans, filled by bots */}
          <input
            type="text"
            name="company_phone"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="flex justify-center">
            <Button variant="default" size="lg" type="submit">Schedule a Call</Button>
          </div>
        </form>
      )}
    </FormContainer>
  )
}

// Partner Inquiry Form (for partners page)
export function PartnerInquiryForm() {
  const buildCalendlyUrl = (data: Record<string, string>) => {
    return `https://calendly.com/michael_kodinsky/partner-strategy-call?name=${encodeURIComponent(`${data.firstname || ''} ${data.lastname || ''}`.trim())}&email=${encodeURIComponent(data.email || '')}&a1=${encodeURIComponent(`${data.partnership_for__commercial_banking__advisory_ || ''} - ${data.contact_us_details || ''}`.trim())}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
  }

  const { success, handleSubmit, formData } = useFormSubmit(
    'partner_inquiry',
    undefined,
    '',
    (data) => {
      const url = buildCalendlyUrl(data as Record<string, string>)
      window.open(url, '_blank')
    }
  )

  return (
    <FormContainer title="Let's Connect" subtitle="Please fill out this form and we'll schedule a call">
      {success ? (
        <FormSuccessContent
          message={`Thanks for your info${formData.firstname ? `, ${formData.firstname}` : ''}! Click below to schedule your call.`}
          formData={formData}
          calendlyUrl={buildCalendlyUrl(formData as Record<string, string>)}
          ctaText="Schedule a Call"
        />
      ) : (
        <form className="form-partner_inquiry flex flex-col gap-6" onSubmit={handleSubmit}>
          <FormGroup columns={2}>
            <FormInput type="text" name="firstname" label="First Name" required />
            <FormInput type="text" name="lastname" label="Last Name" required />
          </FormGroup>

          <FormInput type="text" name="company" label="Company Name" required />

          <FormGroup columns={2}>
            <FormInput type="email" name="email" label="Email Address" required />
            <FormInput type="tel" name="phone" label="Phone Number" required />
          </FormGroup>

          <FormInput type="text" name="partnership_for__commercial_banking__advisory_" label="Partnership For (Commercial Banking, Advisory, etc.)" />

          <FormInput
            as="textarea"
            name="contact_us_details"
            rows={4}
            label="Tell us about your partnership interest..."
          />

          {/* Honeypot field - hidden from humans, filled by bots */}
          <input
            type="text"
            name="company_phone"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="flex justify-center">
            <Button variant="default" size="lg" type="submit">Schedule a Call</Button>
          </div>
        </form>
      )}
    </FormContainer>
  )
}

// Newsletter Modal Form (for use in modals)
interface NewsletterModalFormProps {
  success: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  formData: FormSubmitData
}

export function NewsletterModalForm({
  success,
  handleSubmit,
  formData,
}: NewsletterModalFormProps) {
  return (
    <>
      {success ? (
        <FormSuccessContent
          message={<>You're in!<br /><br />You should see an email confirmation soon.<br /><br />We'd love to talk to you as well.</>}
          formData={formData}
          calendlyUrl={`https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?name=${encodeURIComponent(`${formData.firstname || ''} ${formData.lastname || ''}`.trim())}&email=${encodeURIComponent(formData.email || '')}&phone=${encodeURIComponent(formData.phone || '')}&company=${encodeURIComponent(formData.company || '')}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`}
          ctaText="Schedule a Call"
        />
      ) : (
        <form className="form-newsletter flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="firstname"
            label="First Name"
            placeholder="Your first name"
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            placeholder="your@email.com"
            required
          />

          {/* Honeypot field - hidden from humans, filled by bots */}
          <input
            type="text"
            name="company_phone"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="flex justify-center pt-4">
            <Button
              variant="default"
              size="lg"
              type="submit"
            >
              Subscribe
            </Button>
          </div>

          <Text className="text-xs text-gray-500 text-center">
            We respect your privacy. Unsubscribe at any time.
          </Text>
        </form>
      )}
    </>
  )
}

// Newsletter Signup Form
export function NewsletterForm() {
  const { success, handleSubmit, formData } = useFormSubmit('newsletter')

  return (
    <Section background="gray">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Logo */}
            <div className="relative w-full max-w-sm h-auto">
              <Image
                src="/newsletter-logo.webp"
                alt="Creative Working Capital Newsletter"
                width={1148}
                height={429}
                className="w-full h-auto"
              />
            </div>

            <Text className="text-olive-800/80 max-w-md text-lg">
              Receive exclusive access to monthly client success stories and detailed credit criteria from our preferred lender network.
            </Text>
          </div>

          {/* Original Form Column */}
          <div className="space-y-6">
            {/* Sign-up Text Above Form */}
            <Heading size="h3" className='text-center mb-8'>
              Sign-up for our newsletter
            </Heading>

            {/* Form Card */}
            <Card>
              <NewsletterModalForm
                success={success}
                handleSubmit={handleSubmit}
                formData={formData}
              />
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}

