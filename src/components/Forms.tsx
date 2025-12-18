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
  FormSelect,
  FormMultiSelect,  // For financing needs multi-select
  FormButtonGroup,  // For option buttons
} from '@/components/ui'
import { trackFormSubmission, trackHubSpotNativeForm } from '@/lib/tracking'
import { COLORS } from '@/lib/colors'

// US States for form
const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
]

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
    const data: Record<string, any> = {}
    const financingNeeds: string[] = []

    rawFormData.forEach((value, key) => {
      // Handle multi-select checkboxes (financing_needs)
      if (key === 'financing_needs') {
        financingNeeds.push(value as string)
      } else {
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

// Deal Inquiry Form (for deal inquiry page with chat follow-up)
interface DealInquiryFormProps {
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  onSubmitSuccess?: (formData: FormSubmitData) => void
}

export function DealInquiryForm({
  title = "Discover Your Business Financing Solutions",
  subtitle = "Take a few minutes to provide some general insights about your business and its capital needs to receive intelligent insights on available funding options.",
  onSubmitSuccess,
}: DealInquiryFormProps = {}) {
  const [currentStep, setCurrentStep] = useState(1)
  const [userRole, setUserRole] = useState('')
  const [businessIndustry, setBusinessIndustry] = useState('')
  const [timeInBusiness, setTimeInBusiness] = useState('')
  const [annualRevenue, setAnnualRevenue] = useState('')
  const [financingNeeds, setFinancingNeeds] = useState<string[]>([])
  const [fundingAmount, setFundingAmount] = useState('')
  const [ownerCreditScore, setOwnerCreditScore] = useState('')
  const [contactUsDetails, setContactUsDetails] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [companyState, setCompanyState] = useState('')

  const { success, handleSubmit: baseHandleSubmit, formData } = useFormSubmit(
    'deal_inquiry',
    undefined,
    '',
    (data) => {
      // Store form data for the chat interface and call callback
      if (onSubmitSuccess) {
        onSubmitSuccess(data)
      }
    }
  )

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentStep === 3) {
      await baseHandleSubmit(e)
    } else {
      handleNextStep()
    }
  }

  const isStep1Valid = userRole !== ''
  const isStep2Valid = businessIndustry !== '' && timeInBusiness !== '' && annualRevenue !== '' && fundingAmount !== '' && ownerCreditScore !== ''

  return (
    <FormContainer title={title} subtitle={subtitle}>
      {!success ? (
        <form className="form-deal_inquiry flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all"
                  style={{
                    backgroundColor: currentStep >= step ? COLORS.primary : '#e5e7eb',
                    color: currentStep >= step ? '#ffffff' : '#9ca3af',
                  }}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className="w-12 h-1 transition-all"
                    style={{
                      backgroundColor: currentStep > step ? COLORS.primary : '#e5e7eb',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Role Selector */}
          {currentStep === 1 && (
            <div>
              <FormButtonGroup
                label="I am a:"
                name="user_role"
                value={userRole}
                onChange={(value) => setUserRole(Array.isArray(value) ? '' : value)}
                options={[
                  { value: 'Business Owner', label: 'Business Owner / Operator' },
                  { value: 'Referral Partner', label: 'Banker / CPA / Advisor / Referral Partner' },
                ]}
              />
            </div>
          )}

          {/* Step 2: Business Snapshot */}
          {currentStep === 2 && (
            <div>
              <Heading size="h4" className="mb-8 text-olive-900">Business Snapshot</Heading>

              <FormButtonGroup
                label="Business Industry"
                name="business_industry"
                value={businessIndustry}
                onChange={(value) => setBusinessIndustry(Array.isArray(value) ? '' : value)}
                options={['Construction', 'Medical', 'Hospitality', 'Manufacturing', 'Services', 'Other']}
              />

              <FormButtonGroup
                label="Time in Business"
                name="time_in_business"
                value={timeInBusiness}
                onChange={(value) => setTimeInBusiness(Array.isArray(value) ? '' : value)}
                options={['< 1 year', '1-2 years', '2-3 years', '3-4 years', '5+ years']}
              />

              <FormButtonGroup
                label="Annual Revenue (approx.)"
                name="annual_revenue"
                value={annualRevenue}
                onChange={(value) => setAnnualRevenue(Array.isArray(value) ? '' : value)}
                options={['$500K–$1MM', '$1MM–$3MM', '$3MM–$10MM', '$10MM–$20MM', '$20MM+']}
              />

              <FormButtonGroup
                label="Estimated funding amount needed"
                name="funding_amount"
                value={fundingAmount}
                onChange={(value) => setFundingAmount(Array.isArray(value) ? '' : value)}
                options={['$100K–$250K', '$250K–$500K', '$500K–$1MM', '$1MM–$5MM', '$5MM-$10MM', '$10MM+']}
              />

              <FormMultiSelect
                label="I need financing for"
                name="financing_needs"
                value={financingNeeds}
                onChange={setFinancingNeeds}
                options={[
                  'Working capital to support growth',
                  'Short term bridge capital',
                  'Equipment or asset purchase',
                  'Business acquisition or partner buyout',
                  'Refinance existing debt',
                  'Growth / expansion',
                  'Other',
                ]}
              />

              <FormButtonGroup
                label="What is the owner's approximate FICO score?"
                name="owner_credit_score"
                value={ownerCreditScore}
                onChange={(value) => setOwnerCreditScore(Array.isArray(value) ? '' : value)}
                options={['Excellent (750-850)', 'Good (650-750)', 'Fair (550-650)', 'Low (below 550)', 'Not sure']}
              />

              <FormInput
                as="textarea"
                name="contact_us_details"
                value={contactUsDetails}
                onChange={(e) => setContactUsDetails(e.currentTarget.value)}
                rows={4}
                label="Provide additional details about the financing need or business situation"
                placeholder="Tell us more about your situation to receive a thorough pre-screen of your funding options"
              />
            </div>
          )}

          {/* Step 3: Contact Info */}
          {currentStep === 3 && (
            <div>
              <Heading size="h4" className="mb-6 text-olive-900">Contact Information</Heading>

              <FormGroup columns={2}>
                <FormInput
                  type="text"
                  name="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
                />
                <FormInput
                  type="email"
                  name="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
              </FormGroup>

              <FormGroup columns={2}>
                <FormInput
                  type="tel"
                  name="phone"
                  label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  required
                />
                <FormInput
                  type="text"
                  name="company"
                  label="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.currentTarget.value)}
                  required
                />
              </FormGroup>

              <FormSelect
                label="Company State"
                name="company_state"
                value={companyState}
                onChange={(e) => setCompanyState(e.target.value)}
                options={US_STATES}
                placeholder="Select state"
              />
            </div>
          )}

          {/* Honeypot field - hidden from humans, filled by bots */}
          <input
            type="text"
            name="company_phone"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Step 1: Hidden inputs for other steps */}
          {currentStep === 1 && (
            <>
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
            </>
          )}

          {/* Step 2: Hidden inputs for other steps */}
          {currentStep === 2 && (
            <>
              <input type="hidden" name="user_role" value={userRole} />
              <input type="hidden" name="name" value={name} />
              <input type="hidden" name="email" value={email} />
              <input type="hidden" name="phone" value={phone} />
              <input type="hidden" name="company" value={company} />
              <input type="hidden" name="company_state" value={companyState} />
              {financingNeeds.map((need) => (
                <input key={need} type="hidden" name="financing_needs" value={need} />
              ))}
            </>
          )}

          {/* Step 3: Hidden inputs for other steps */}
          {currentStep === 3 && (
            <>
              <input type="hidden" name="user_role" value={userRole} />
              <input type="hidden" name="business_industry" value={businessIndustry} />
              <input type="hidden" name="time_in_business" value={timeInBusiness} />
              <input type="hidden" name="annual_revenue" value={annualRevenue} />
              <input type="hidden" name="funding_amount" value={fundingAmount} />
              <input type="hidden" name="owner_credit_score" value={ownerCreditScore} />
              <input type="hidden" name="contact_us_details" value={contactUsDetails} />
              {financingNeeds.map((need) => (
                <input key={need} type="hidden" name="financing_needs" value={need} />
              ))}
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Back
            </Button>
            <Button
              variant="default"
              size="lg"
              type="submit"
              disabled={currentStep === 1 && !isStep1Valid || currentStep === 2 && !isStep2Valid}
            >
              {currentStep === 3 ? 'Get AI-Powered Insights' : 'Next'}
            </Button>
          </div>
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
    </FormContainer>
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

