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
  FormSelect,
  SelectButtons,
  MultiSelectButtons,
} from '@/components/ui'
import { useFormSubmit, FormSubmitData } from '@/hooks/useFormSubmit'
import { useDealInquiryForm } from '@/hooks/useDealInquiryForm'
import { COLORS } from '@/lib/colors'

// US States for form
const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
]

// Basic guard that disables submit when the honeypot is touched or required fields are incomplete
function useHoneypotGuard() {
  const formRef = useRef<HTMLFormElement>(null)
  const [canSubmit, setCanSubmit] = useState(false)

  const recomputeGuard = useCallback(() => {
    const form = formRef.current
    if (!form) return

    const honeypotInput = form.querySelector('input[name="company_phone"]') as HTMLInputElement | null
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
    return `https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?name=${encodeURIComponent(`${data.firstname || ''} ${data.lastname || ''}`.trim())}&email=${encodeURIComponent(data.email || '')}&phone=${encodeURIComponent(data.phone || '')}&a1=${encodeURIComponent(data.company || '')}&a2=${encodeURIComponent(`${data.capital_for || ''} - ${data.contact_us_details || ''}`.trim())}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
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
          message={`Thanks for your info${formData.firstname ? `, ${formData.firstname}` : ''}! Click below to schedule your call.`}
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
    return `https://calendly.com/michael_kodinsky/partner-strategy-call?name=${encodeURIComponent(`${data.firstname || ''} ${data.lastname || ''}`.trim())}&email=${encodeURIComponent(data.email || '')}&a1=${encodeURIComponent(`${data.partnership_for__commercial_banking__advisory_ || ''} - ${data.contact_us_details || ''}`.trim())}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
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
          message={`Thanks for your info${formData.firstname ? `, ${formData.firstname}` : ''}! Click below to schedule your call.`}
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
          calendlyUrl={`https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?name=${encodeURIComponent(`${formData.firstname || ''} ${formData.lastname || ''}`.trim())}&email=${encodeURIComponent(formData.email || '')}&phone=${encodeURIComponent(formData.phone || '')}&company=${encodeURIComponent(formData.company || '')}&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`}
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

interface FormQuestion {
  id: string
  type: 'button-group' | 'multi-select' | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'contact-info'
  label: string
  name: string
  options?: string[]
  required?: boolean
  autoAdvance?: boolean
  placeholder?: string
  rows?: number
}

// Questions array - must be kept in sync with useDealInquiryForm hook
export const questions: FormQuestion[] = [
  {
    id: 'user_role',
    type: 'button-group',
    label: 'I am a:',
    name: 'user_role',
    options: ['Business Owner / Operator', 'Banker / CPA / Advisor / Referral Partner'],
    autoAdvance: true,
  },
  {
    id: 'business_industry',
    type: 'button-group',
    label: 'Business Industry',
    name: 'business_industry',
    options: ['Construction', 'Medical', 'Hospitality', 'Manufacturing', 'Services', 'Other'],
    autoAdvance: true,
  },
  {
    id: 'time_in_business',
    type: 'button-group',
    label: 'Time in Business',
    name: 'time_in_business',
    options: ['< 1 year', '1-2 years', '2-3 years', '3-4 years', '5+ years'],
    autoAdvance: true,
  },
  {
    id: 'annual_revenue',
    type: 'button-group',
    label: 'Annual Revenue (approx.)',
    name: 'annual_revenue',
    options: ['$500K–$1MM', '$1MM–$3MM', '$3MM–$10MM', '$10MM–$20MM', '$20MM+'],
    autoAdvance: true,
  },
  {
    id: 'financing_needs',
    type: 'multi-select',
    label: 'I need financing for',
    name: 'financing_needs',
    options: [
      'Working capital to support growth',
      'Short term bridge capital',
      'Equipment or asset purchase',
      'Business acquisition or partner buyout',
      'Refinance existing debt',
      'Growth / expansion',
      'Other',
    ],
  },
  {
    id: 'funding_amount',
    type: 'button-group',
    label: 'Estimated funding amount needed',
    name: 'funding_amount',
    options: ['$100K–$250K', '$250K–$500K', '$500K–$1MM', '$1MM–$5MM', '$5MM-$10MM', '$10MM+'],
    autoAdvance: true,
  },
  {
    id: 'owner_credit_score',
    type: 'button-group',
    label: 'What is the owner\'s approximate FICO score?',
    name: 'owner_credit_score',
    options: ['Excellent (750-850)', 'Good (650-750)', 'Fair (550-650)', 'Low (below 550)', 'Not sure'],
    autoAdvance: true,
  },
  {
    id: 'contact_us_details',
    type: 'textarea',
    label: 'Provide additional details about the financing need or business situation',
    name: 'contact_us_details',
    placeholder: 'Tell us more about your situation to receive a thorough pre-screen of your funding options',
    rows: 4,
  },
  {
    id: 'contact_info',
    type: 'contact-info',
    label: 'Final Step: Your Contact Information',
    name: 'contact_info',
    required: true,
  },
]

export function DealInquiryForm({
  onSubmitSuccess,
}: DealInquiryFormProps = {}) {
  const {
    currentQuestion,
    selectedAnswer,
    userRole,
    businessIndustry,
    timeInBusiness,
    annualRevenue,
    financingNeeds,
    fundingAmount,
    ownerCreditScore,
    contactUsDetails,
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
    handleSubmit,
  } = useDealInquiryForm(onSubmitSuccess)

  const currentQ = questions[currentQuestion]
  const totalQuestions = questions.length

  return (
    <>
      {!success ? (
        <form className="form-deal_inquiry flex flex-col gap-4 w-full max-w-2xl mx-auto min-h-[650px]" onSubmit={handleSubmit}>
          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-300"
                style={{
                  backgroundColor: COLORS.primary,
                  width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Label */}
          <div className="mt-8">
            <Heading size="h3" className="text-olive-900 text-left !my-0">
              {currentQ.label}
            </Heading>
          </div>

          {/* Render Question Based on Type */}
          {currentQ.type === 'button-group' && (
            <SelectButtons
              options={currentQ.options || []}
              value={getFieldValue(currentQ.id) as string}
              onChange={handleAnswer}
              disabled={selectedAnswer !== null}
              selectedAnswer={selectedAnswer}
              align="left"
            />
          )}

          {currentQ.type === 'multi-select' && (
            <div className="flex flex-col gap-8">
              <Text size="sm" className="text-center text-gray-500">
                You can select multiple options
              </Text>
              <MultiSelectButtons
                options={currentQ.options || []}
                value={getFieldValue(currentQ.id) as string[]}
                onChange={(value) => setFieldValue(currentQ.id, value)}
                align="left"
              />
              <Button
                variant="default"
                size="lg"
                type="button"
                onClick={moveToNextQuestion}
                disabled={!getFieldValue(currentQ.id) || (Array.isArray(getFieldValue(currentQ.id)) && getFieldValue(currentQ.id).length === 0)}
              >
                Continue
              </Button>
            </div>
          )}

          {currentQ.type === 'textarea' && (
            <div className="flex flex-col gap-8">
              <FormInput
                as="textarea"
                name={currentQ.name}
                value={getFieldValue(currentQ.id)}
                onChange={(e) => setFieldValue(currentQ.id, e.currentTarget.value)}
                rows={currentQ.rows || 4}
                placeholder={currentQ.placeholder}
              />
              <Button
                variant="default"
                size="lg"
                type="button"
                onClick={moveToNextQuestion}
              >
                Continue
              </Button>
            </div>
          )}

          {(currentQ.type === 'text' || currentQ.type === 'email' || currentQ.type === 'tel') && (
            <div className="flex flex-col gap-8">
              <FormInput
                type={currentQ.type}
                name={currentQ.name}
                value={getFieldValue(currentQ.id)}
                onChange={(e) => setFieldValue(currentQ.id, e.currentTarget.value)}
                placeholder={currentQ.placeholder}
                required={currentQ.required}
              />
              <Button
                variant="default"
                size="lg"
                type="button"
                onClick={moveToNextQuestion}
                disabled={currentQ.required && !getFieldValue(currentQ.id)}
              >
                Continue
              </Button>
            </div>
          )}

          {currentQ.type === 'select' && (
            <FormSelect
              label=""
              name={currentQ.name}
              value={getFieldValue(currentQ.id)}
              onChange={(e) => handleAnswer(e.target.value)}
              options={currentQ.options || []}
              placeholder="Select state"
            />
          )}

          {currentQ.type === 'contact-info' && (
            <div className="flex flex-col gap-8">
              <FormGroup columns={2}>
                <FormInput
                  type="text"
                  name="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setFieldValue('name', e.currentTarget.value)}
                  required
                />
                <FormInput
                  type="email"
                  name="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setFieldValue('email', e.currentTarget.value)}
                  required
                />
              </FormGroup>

              <FormGroup columns={2}>
                <FormInput
                  type="tel"
                  name="phone"
                  label="Phone"
                  value={phone}
                  onChange={(e) => setFieldValue('phone', e.currentTarget.value)}
                  required
                />
                <FormInput
                  type="text"
                  name="company"
                  label="Company Name"
                  value={company}
                  onChange={(e) => setFieldValue('company', e.currentTarget.value)}
                  required
                />
              </FormGroup>

              <FormSelect
                label="Company State"
                name="company_state"
                value={companyState}
                onChange={(e) => setFieldValue('company_state', e.target.value)}
                options={US_STATES}
                placeholder="Select state"
              />
            </div>
          )}

          {/* Honeypot field */}
          <input
            type="text"
            name="company_phone"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Hidden inputs for all form fields */}
          <input type="hidden" name="user_role" value={userRole} />
          <input type="hidden" name="business_industry" value={businessIndustry} />
          <input type="hidden" name="time_in_business" value={timeInBusiness} />
          <input type="hidden" name="annual_revenue" value={annualRevenue} />
          <input type="hidden" name="funding_amount" value={fundingAmount} />
          <input type="hidden" name="owner_credit_score" value={ownerCreditScore} />
          <input type="hidden" name="contact_us_details" value={contactUsDetails} />
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="phone" value={phone} />
          <input type="hidden" name="company" value={company} />
          <input type="hidden" name="company_state" value={companyState} />
          {financingNeeds.map((need) => (
            <input key={need} type="hidden" name="financing_needs" value={need} />
          ))}

          {/* Submit button shown on last question */}
          {currentQuestion === totalQuestions - 1 && (
            <Button
              variant="default"
              size="lg"
              type="submit"
              disabled={currentQ.type === 'contact-info' ? !name || !email || !phone || !company || !companyState : !getFieldValue(currentQ.id)}
            >
              Get AI-Powered Insights
            </Button>
          )}
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
          <Text size="lg" className="mb-6">Thanks for sharing your details, {formData.name || formData.firstname}! We're reviewing your information and will get back to you shortly with your personalized funding options.</Text>
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

