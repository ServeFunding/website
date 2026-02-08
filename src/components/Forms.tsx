'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
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
  SelectButtons,
  MultiSelectButtons,
} from '@/components/ui'
import { useFormSubmit, FormSubmitData } from '@/hooks/useFormSubmit'
import { useDealInquiryForm } from '@/hooks/useDealInquiryForm'
import { formQuestions } from '@/data/form-questions'
import { COLORS } from '@/lib/colors'

// Basic guard that disables submit when the honeypot is touched or required fields are incomplete
function useHoneypotGuard() {
  const formRef = useRef<HTMLFormElement>(null)
  const [canSubmit, setCanSubmit] = useState(false)

  const recomputeGuard = useCallback(() => {
    const form = formRef.current
    if (!form) return

    const honeypotInput = form.querySelector('input[name="website_url"]') as HTMLInputElement | null
    const honeypotValue = honeypotInput?.value?.trim()
    const valid = form.checkValidity()

    setCanSubmit(valid && !honeypotValue)
  }, [])

  useEffect(() => {
    recomputeGuard()
  }, [recomputeGuard])

  return { formRef, canSubmit, recomputeGuard }
}

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

// Re-export FormSubmitData for components that need it
export type { FormSubmitData } from '@/hooks/useFormSubmit'

// Form Container with consistent styling across all forms
function FormContainer({
  children,
  title,
  subtitle,
  background = "primary"
}: {
  children: React.ReactNode
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  background?: "primary" | "background"
}) {
  const isDarkBackground = background === "primary"

  return (
    <Section background={background} className='overflow-visible'>
      <Container className='flex flex-col items-center !max-w-5xl'>
          {title && (
            <FadeIn className="text-center mb-12">
              <Heading size="h2" color={isDarkBackground ? "highlight" : "primary"}>
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
  const { formRef, canSubmit, recomputeGuard } = useHoneypotGuard()
  const buildCalendlyUrl = (data: Record<string, string>) => {
    return `https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?name=${encodeURIComponent(data.name || '')}&email=${encodeURIComponent(data.email || '')}&phone=${encodeURIComponent(data.phone || '')}&a1=${encodeURIComponent(data.company || '')}&a2=${encodeURIComponent(`${data.capital_for || ''} - ${data.contact_us_details || ''}`.trim())}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
  }

  const { success, handleSubmit, formData, isSubmitting } = useFormSubmit(
    'intro_call',
    'https://aiascend.app.n8n.cloud/webhook/sf-intro',
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
          message={`Thanks for your info${formData.name ? `, ${formData.name}` : ''}! Click below to schedule your call.`}
          formData={formData}
          calendlyUrl={buildCalendlyUrl(formData as Record<string, string>)}
          ctaText="Schedule a Call"
        />
      ) : (
        <form
          ref={formRef}
          className="form-intro_call flex flex-col gap-4"
          onSubmit={handleSubmit}
          onInput={recomputeGuard}
          onChange={recomputeGuard}
        >
          <FormInput type="text" name="name" label="Full Name" required />

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
            <Button variant="default" size="lg" type="submit" disabled={!canSubmit || isSubmitting}>
              Schedule a Call
            </Button>
          </div>
        </form>
      )}
    </FormContainer>
  )
}

// Partner Inquiry Form (for partners page)
export function PartnerInquiryForm() {
  const { formRef, canSubmit, recomputeGuard } = useHoneypotGuard()
  const buildCalendlyUrl = (data: Record<string, string>) => {
    return `https://calendly.com/michael_kodinsky/partner-strategy-call?name=${encodeURIComponent(data.name || '')}&email=${encodeURIComponent(data.email || '')}&a1=${encodeURIComponent(`${data.partnership_for__commercial_banking__advisory_ || ''} - ${data.contact_us_details || ''}`.trim())}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
  }

  const { success, handleSubmit, formData, isSubmitting } = useFormSubmit(
    'partner_inquiry',
    'https://aiascend.app.n8n.cloud/webhook/sf-partner',
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
          message={`Thanks for your info${formData.name ? `, ${formData.name}` : ''}! Click below to schedule your call.`}
          formData={formData}
          calendlyUrl={buildCalendlyUrl(formData as Record<string, string>)}
          ctaText="Schedule a Call"
        />
      ) : (
        <form
          ref={formRef}
          className="form-partner_inquiry flex flex-col gap-4"
          onSubmit={handleSubmit}
          onInput={recomputeGuard}
          onChange={recomputeGuard}
        >
          <FormInput type="text" name="name" label="Full Name" required />

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
            <Button variant="default" size="lg" type="submit" disabled={!canSubmit || isSubmitting}>
              Schedule a Call
            </Button>
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
  isSubmitting: boolean
}

export function NewsletterModalForm({
  success,
  handleSubmit,
  formData,
  isSubmitting,
}: NewsletterModalFormProps) {
  const { formRef, canSubmit, recomputeGuard } = useHoneypotGuard()

  return (
    <>
      {success ? (
        <FormSuccessContent
          message={<>You're in!<br /><br />You should see an email confirmation soon.<br /><br />We'd love to talk to you as well.</>}
          formData={formData}
          calendlyUrl={`https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?name=${encodeURIComponent(formData.name || '')}&email=${encodeURIComponent(formData.email || '')}&phone=${encodeURIComponent(formData.phone || '')}&company=${encodeURIComponent(formData.company || '')}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`}
          ctaText="Schedule a Call"
        />
      ) : (
        <form
          ref={formRef}
          className="form-newsletter flex flex-col gap-4"
          onSubmit={handleSubmit}
          onInput={recomputeGuard}
          onChange={recomputeGuard}
        >
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
              disabled={!canSubmit || isSubmitting}
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

// Deal Inquiry Form (for deal inquiry page with chat follow-up)
interface DealInquiryFormProps {
  onSubmitSuccess?: (formData: FormSubmitData) => void
}


export function DealInquiryForm({
  onSubmitSuccess,
}: DealInquiryFormProps = {}) {
  const formRef = useRef<HTMLFormElement>(null)

  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswer,
    name,
    email,
    phone,
    company,
    companyState,
    success,
    formData,
    getFieldValue,
    setFieldValue,
    handleAnswer,
    moveToNextQuestion,
    moveToPreviousQuestion,
    handleSubmit,
    otherResponses,
  } = useDealInquiryForm(onSubmitSuccess)


  return (
    <>
      {!success ? (
        <form ref={formRef} className="form-deal_inquiry flex flex-col gap-4 w-full max-w-2xl mx-auto min-h-[650px]" onSubmit={handleSubmit}>
          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-300"
                style={{
                  backgroundColor: COLORS.primary,
                  width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Label */}
          <div className="mt-8">
            <Heading size="h3" color="primary" className="text-left !my-0">
              {currentQuestion?.title}
            </Heading>
            {currentQuestion?.helpHtml && (
              <div
                className="mt-2 text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: currentQuestion.helpHtml }}
              />
            )}
          </div>

          {/* Single choice or multi-choice with buttons */}
          {(currentQuestion?.type === 'single' || currentQuestion?.type === 'multi') && currentQuestion?.answers?.length! > 0 && (
            <div className="flex flex-col gap-8">
              {currentQuestion?.type === 'multi' && (
                <Text size="sm" className="text-center text-gray-500">
                  You can select multiple options
                </Text>
              )}
              {currentQuestion?.type === 'single' ? (
                <SelectButtons
                  options={currentQuestion?.answers || []}
                  value={getFieldValue(currentQuestion?.id || '') as string}
                  onChange={handleAnswer}
                  disabled={selectedAnswer !== null}
                  selectedAnswer={selectedAnswer}
                  align="left"
                />
              ) : (
                <MultiSelectButtons
                  options={currentQuestion?.answers || []}
                  value={getFieldValue(currentQuestion?.id || '') as string[]}
                  onChange={(value) => setFieldValue(currentQuestion?.id || '', value)}
                  align="left"
                />
              )}
              <div className="flex items-center gap-3 mt-8">
                {currentQuestionIndex > 0 && (
                  <Button
                    variant="default"
                    size="lg"
                    type="button"
                    onClick={moveToPreviousQuestion}
                  >
                    ← Back
                  </Button>
                )}
                <Button
                  variant="default"
                  size="lg"
                  type="button"
                  onClick={moveToNextQuestion}
                  disabled={!getFieldValue(currentQuestion?.id) || (Array.isArray(getFieldValue(currentQuestion?.id)) && (getFieldValue(currentQuestion?.id) as string[]).length === 0)}
                  className="flex-1"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Textarea for open-ended responses (single type with no answers) */}
          {currentQuestion?.type === 'single' && (!currentQuestion?.answers || currentQuestion?.answers.length === 0) && (
            <div className="flex flex-col gap-8">
              <textarea
                name={currentQuestion?.id}
                value={getFieldValue(currentQuestion?.id || '') as string}
                onChange={(e) => setFieldValue(currentQuestion?.id || '', e.currentTarget.value)}
                placeholder={currentQuestion?.placeholder || 'Enter your response...'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-all text-base bg-white"
                style={{ borderColor: 'var(--color-secondary, #999)', minHeight: '150px' }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = COLORS.primary
                  e.currentTarget.style.borderWidth = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-secondary, #999)'
                  e.currentTarget.style.borderWidth = '1px'
                }}
              />
              <div className="flex items-center gap-3 mt-8">
                {currentQuestionIndex > 0 && (
                  <Button
                    variant="default"
                    size="lg"
                    type="button"
                    onClick={moveToPreviousQuestion}
                  >
                    ← Back
                  </Button>
                )}
                <Button
                  variant="default"
                  size="lg"
                  type="button"
                  onClick={moveToNextQuestion}
                  disabled={!getFieldValue(currentQuestion?.id)}
                  className="flex-1"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Single choice with "Other" option */}
          {currentQuestion?.type === 'single_with_other' && (
            <div className="flex flex-col gap-8">
              <SelectButtons
                options={currentQuestion?.answers || []}
                value={getFieldValue(currentQuestion?.id || '') as string}
                onChange={handleAnswer}
                disabled={selectedAnswer !== null}
                selectedAnswer={selectedAnswer}
                align="left"
              />

              {/* Show input when "Other" is selected */}
              {typeof getFieldValue(currentQuestion?.id || '') === 'string' && (getFieldValue(currentQuestion?.id || '') === 'Other' || (getFieldValue(currentQuestion?.id || '') as string).toLowerCase().includes('other')) && (
                <div className="mt-4 pl-0">
                  <FormInput
                    type="text"
                    name={`${currentQuestion?.id}_other`}
                    label="Please specify"
                    value={getFieldValue(`${currentQuestion?.id}_other`) || ''}
                    onChange={(e) => setFieldValue(`${currentQuestion?.id}_other`, e.currentTarget.value)}
                    placeholder="Enter your response"
                  />
                </div>
              )}

              <div className="flex items-center gap-3 mt-8">
                {currentQuestionIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    type="button"
                    onClick={moveToPreviousQuestion}
                  >
                    ← Back
                  </Button>
                )}
                <Button
                  variant="default"
                  size="lg"
                  type="button"
                  onClick={moveToNextQuestion}
                  disabled={
                    !getFieldValue(currentQuestion?.id) ||
                    (getFieldValue(currentQuestion?.id) === 'Other' && !getFieldValue(`${currentQuestion?.id}_other`))
                  }
                  className="flex-1"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Contact Info Collection */}
          {currentQuestion?.type === 'contact-info' && (
            <div className="flex flex-col gap-8">
              <FormInput
                type="text"
                name="name"
                label="Name"
                value={name}
                onChange={(e) => setFieldValue('name', e.currentTarget.value)}
                onInput={(e) => {
                  console.log('[DealInquiryForm] Name onInput:', e.currentTarget.value)
                  setFieldValue('name', e.currentTarget.value)
                }}
                required
              />
              <FormInput
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setFieldValue('email', e.currentTarget.value)}
                onInput={(e) => {
                  console.log('[DealInquiryForm] Email onInput:', e.currentTarget.value)
                  setFieldValue('email', e.currentTarget.value)
                }}
                required
              />

              <div className="flex items-center gap-3 mt-8">
                {currentQuestionIndex > 0 && (
                  <Button
                    variant="default"
                    size="lg"
                    type="button"
                    onClick={moveToPreviousQuestion}
                  >
                    ← Back
                  </Button>
                )}
                <Button
                  variant="default"
                  size="lg"
                  type="submit"
                  disabled={!name || !email}
                  className="flex-1"
                >
                  Let's talk about your deal
                </Button>
              </div>
            </div>
          )}
          {/* Hidden inputs for all form fields - dynamically generated from formQuestions */}
          {formQuestions.map((question) => {
            const fieldValue = getFieldValue(question.id)

            // Skip contact-info type questions as they're handled separately
            if (question.type === 'contact-info') return null

            // Handle multi-select questions (arrays)
            if (Array.isArray(fieldValue)) {
              return fieldValue.map((value) => (
                <input key={`${question.id}-${value}`} type="hidden" name={question.id} value={value} />
              ))
            }

            // Handle single-value questions
            return <input key={question.id} type="hidden" name={question.id} value={fieldValue as string} />
          })}

          {/* Contact info fields (handled separately as they're part of contact-info type) */}
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="phone" value={phone} />
          <input type="hidden" name="company" value={company} />
          <input type="hidden" name="company_state" value={companyState} />
          {/* Hidden inputs for "other" responses */}
          {Object.entries(otherResponses).map(([fieldId, value]) => (
            <input key={fieldId} type="hidden" name={fieldId} value={String(value)} />
          ))}
        </form>
      ) : (
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <CheckCircle className="w-12 h-12" style={{ color: COLORS.primary }} />
          </motion.div>
          <Text size="lg" className="mb-6">Thanks for sharing your details, {formData.name}! We're reviewing your information and will get back to you shortly with your personalized funding options.</Text>
        </div>
      )}
    </>
  )
}

// Newsletter Signup Form
export function NewsletterForm() {
  const { success, handleSubmit, formData, isSubmitting } = useFormSubmit(
    'newsletter',
    'https://aiascend.app.n8n.cloud/webhook/sf-newsletter'
  )

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
                isSubmitting={isSubmitting}
              />
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}

