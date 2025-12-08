'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
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
import { trackFormSubmission, useHubSpotFormTracking } from '@/lib/tracking'
import { COLORS } from '@/lib/colors'

// Success message component with animated checkmark
function FormSuccessMessage({ message }: { message: string }) {
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
      <FadeIn>
        <p className="text-lg text-gray-700">{message}</p>
      </FadeIn>
    </div>
  )
}

// Hook for form submission logic
function useFormSubmit(formType: string, webhookUrl?: string) {
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // Call webhook if provided
    if (webhookUrl) {
      try {
        const formData = new FormData(form)
        const data: Record<string, string> = {}

        // Convert FormData to plain object
        formData.forEach((value, key) => {
          data[key] = value as string
        })

        console.log('Submitting form data to webhook:', data)

        // Send to webhook
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        console.log('Webhook response:', response.status, response.statusText)
      } catch (error) {
        console.error('Webhook submission error:', error)
        // Continue with success even if webhook fails
      }
    }

    setSuccess(true)
    form.reset()
    trackFormSubmission(formType)
  }

  return { success, handleSubmit }
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
  background?: "primary" | "light"
}) {
  const isDarkBackground = background === "primary"

  return (
    <Section background={background} className='overflow-visible'>
      <Container className='flex flex-col items-center !max-w-5xl'>
          {title && (
            <FadeIn className="text-center mb-12">
              <Heading size="h2" color={isDarkBackground ? "white" : "default"}>
                {title}
              </Heading>
              {subtitle && (
                <Text size="lg" color={isDarkBackground ? "white" : "default"} className="mt-2">
                  {subtitle}
                </Text>
              )}
            </FadeIn>
          )}
          <FadeIn delay={0.2} className='w-full'>
            <Card variant="default" className="md:p-12 bg-white">
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
  const { success, handleSubmit } = useFormSubmit('intro_call')

  return (
    <FormContainer title={title} subtitle={subtitle}>
      {success ? (
        <FormSuccessMessage message="Thank you. We'll be in touch within 24 hours." />
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

          <Button variant="default" size="lg" className="w-full" type="submit">Schedule Your Intro Call</Button>
        </form>
      )}
    </FormContainer>
  )
}

// Partner Inquiry Form (for partners page)
export function PartnerInquiryForm() {
  const { success, handleSubmit } = useFormSubmit('partner_inquiry')

  return (
    <FormContainer title="Let's Connect" subtitle="Please fill out this form and we'll schedule a call">
      {success ? (
        <FormSuccessMessage message="Thank you. We'll be in touch soon to discuss partnership opportunities." />
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

          <Button variant="default" size="lg" className="w-full" type="submit">Send Inquiry</Button>
        </form>
      )}
    </FormContainer>
  )
}

// HubSpot Newsletter Modal Form (kept as is for modal popup)
function createHubSpotModalForm(formId: string, formType: string) {
  return function HubSpotForm() {
    const [isMounted, setIsMounted] = useState(false)
    useHubSpotFormTracking(formType)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    // Only render form div on client to avoid hydration mismatch
    if (!isMounted) return null

    return (
      <div className="hs-form-frame" data-region="na1" data-form-id={formId} data-portal-id="23433903"></div>
    )
  }
}

export const HubSpotNewsletterModalForm = createHubSpotModalForm('f21673be-6ba2-48ca-8be2-870999c35ead', 'hubspot_newsletter_modal')


// Newsletter Signup Form
export function NewsletterForm() {
  const { success, handleSubmit } = useFormSubmit('newsletter')

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: COLORS.background }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* "Logo" recreation */}
            <div className="flex items-center gap-4">
              <img src="/android-chrome-192x192.png" alt="Serve Funding" className="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-serif font-bold text-olive-900 leading-none">creative<br/>working<br/>capital</h3>
                <p className="text-xs text-olive-800 mt-1 italic">A monthly good newsletter from Serve Funding</p>
              </div>
            </div>

            <div>
              <Text className="text-olive-800/80 max-w-md text-lg">
                Receive exclusive access to monthly client success stories and detailed credit criteria from our preferred lender network.
              </Text>
            </div>
          </div>

          {/* Original Form Column */}
          <div className="space-y-6">
            {/* Sign-up Text Above Form */}
            <div>
              <Heading size="h3" className='text-center mb-8'>
                Sign-up for our newsletter
              </Heading>
            </div>

            {/* Form Card */}
            <Card variant="default" className="!p-0">
              {success ? (
                <div className="px-6 sm:px-8">
                  <FormSuccessMessage message="Check your email to confirm your subscription." />
                </div>
              ) : (
                <form className="form-newsletter flex flex-col gap-4 p-6 sm:p-8" onSubmit={handleSubmit}>
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
                    label="Email Address"
                    placeholder="your@email.com"
                    required
                  />

                  <Button variant="default" size="lg" className="w-full" type="submit">
                    Subscribe
                  </Button>

                  <Text className="text-xs text-gray-500 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </Text>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

// AI Intro Form Modal (called from chatbot)
interface AIIntroFormProps {
  aiMessage: string
  conversationContext: string
  onClose: () => void
}

export function AIIntroForm({ aiMessage, conversationContext, onClose }: AIIntroFormProps) {
  const { success, handleSubmit } = useFormSubmit('ai_intro', '/api/webhook')

  // Close modal on successful submission
  useEffect(() => {
    if (success) {
      const timer = setTimeout(onClose, 2000)
      return () => clearTimeout(timer)
    }
  }, [success, onClose])

  return (
    <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-10 flex items-center justify-between">
        <Heading size="h4">Connect with Our Team</Heading>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {success ? (
          <FormSuccessMessage message="Thanks for connecting! We'll reach out shortly to discuss your needs." />
        ) : (
          <>
            <form className="form-ai_intro flex flex-col gap-6" onSubmit={handleSubmit}>
              <FormInput type="text" name="firstname" label="Name" placeholder="Your name" required />
              <FormInput type="email" name="email" label="Email" placeholder="your@email.com" required />
              <FormInput type="tel" name="phone" label="Phone Number" placeholder="(555) 123-4567" required />

              <FormInput
                as="textarea"
                name="contact_us_details"
                rows={3}
                label="What we talked about"
                value={aiMessage}
                readOnly
                className="bg-gray-50 cursor-not-allowed"
              />

              {/* Hidden field with full context */}
              <input
                type="hidden"
                name="conversation_full_context"
                value={conversationContext}
              />

              <Button variant="default" size="lg" className="w-full" type="submit">
                Let's Connect
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}