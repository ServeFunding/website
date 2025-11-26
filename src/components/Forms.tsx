'use client'

import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  FormInput,
  FormTextarea,
  FormGroup,
} from '@/components/design-system'

// Formspree URLs for different form types
export const FORM_URLS = {
  intro_call: 'https://formspree.io/f/xrbjwwlp',
  referral: 'https://formspree.io/f/xrbjwwyp',
  partner_inquiry: 'https://formspree.io/f/xzzwpyqv',
  newsletter: 'https://formspree.io/f/xrbjwwlp',
}

// Form Container with consistent styling across all forms
function FormContainer({
  children,
  title,
  subtitle,
  background = "olive"
}: {
  children: React.ReactNode
  title: string
  subtitle?: string
  background?: "olive" | "gray"
}) {
  return (
    <Section background={background}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <Heading size="h3" color={background === "olive" ? "white" : "default"}>
              {title}
            </Heading>
            {subtitle && (
              <Text size="lg" color={background === "olive" ? "white" : "default"} className="mt-2">
                {subtitle}
              </Text>
            )}
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card variant="default" className="p-8 md:p-12 bg-white">
              {children}
            </Card>
          </FadeIn>
        </div>
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
  return (
    <FormContainer title={title} subtitle={subtitle}>
      <form action={FORM_URLS.intro_call} method="POST" className="space-y-6">
        <FormGroup columns={2}>
          <FormInput type="text" name="first_name" label="First Name" required />
          <FormInput type="text" name="last_name" label="Last Name" required />
        </FormGroup>

        <FormInput type="text" name="company" label="Company Name" required />

        <FormGroup columns={2}>
          <FormInput type="email" name="email" label="Email Address" required />
          <FormInput type="tel" name="phone" label="Phone Number" required />
        </FormGroup>

        <FormInput type="text" name="capital_for" label="Capital For (e.g., Inventory, Equipment)" required />

        <FormTextarea name="message" rows={4} label="Tell us more about your needs..." />

        <Button variant="default" size="lg" className="w-full" type="submit">Get Started</Button>
      </form>
    </FormContainer>
  )
}

// Referral Form (for refer page)
export function ReferralForm() {
  return (
    <FormContainer
      title="Submit a Referral"
      subtitle="Tell us about your client and how we can help. Our team will review the information and follow up promptly."
      background="gray"
    >
      <form action={FORM_URLS.referral} method="POST" className="space-y-6">
        {/* Banker Information Section */}
        <div>
          <Heading size="h3" className="text-olive-900 mb-4">
            Your Information
          </Heading>

          <FormGroup columns={2} className="mb-4">
            <FormInput type="text" name="banker_first_name" label="First Name" required />
            <FormInput type="text" name="banker_last_name" label="Last Name" required />
          </FormGroup>

          <FormGroup columns={2} className="mb-4">
            <FormInput type="email" name="banker_email" label="Email Address" required />
            <FormInput type="tel" name="banker_phone" label="Phone Number" required />
          </FormGroup>

          <FormInput type="text" name="banker_institution" label="Bank/Institution Name" required />
        </div>

        {/* Client Information Section */}
        <div>
          <Heading size="h3" className="text-olive-900 mb-4">
            Client Information
          </Heading>

          <FormGroup columns={2} className="mb-4">
            <FormInput type="text" name="client_first_name" label="First Name" required />
            <FormInput type="text" name="client_last_name" label="Last Name" required />
          </FormGroup>

          <FormInput type="text" name="client_company" label="Company Name" required />

          <FormGroup columns={2} className="mb-4">
            <FormInput type="email" name="client_email" label="Email Address" required />
            <FormInput type="tel" name="client_phone" label="Phone Number" required />
          </FormGroup>

          <FormInput type="text" name="client_industry" label="Industry (e.g., Manufacturing, Retail)" required />
          <FormInput type="text" name="client_capital_needed" label="Capital Needed (e.g., $250K - $1MM)" required />

          <FormTextarea
            name="client_needs"
            rows={4}
            label="How can Serve Funding help? (Briefly describe your client's funding needs...)"
          />
        </div>

        <Button variant="default" size="lg" className="w-full" type="submit">Submit Referral</Button>
      </form>
    </FormContainer>
  )
}

// Partner Inquiry Form (for partners page)
export function PartnerInquiryForm() {
  return (
    <FormContainer title="Let's Connect" subtitle="Please fill out this form and we'll schedule a call">
      <form action={FORM_URLS.partner_inquiry} method="POST" className="space-y-6">
        <FormGroup columns={2}>
          <FormInput type="text" name="first_name" label="First Name" required />
          <FormInput type="text" name="last_name" label="Last Name" required />
        </FormGroup>

        <FormInput type="text" name="company" label="Company Name" required />

        <FormGroup columns={2}>
          <FormInput type="email" name="email" label="Email Address" required />
          <FormInput type="tel" name="phone" label="Phone Number" required />
        </FormGroup>

        <FormInput type="text" name="interest" label="Partnership Interest (e.g., Commercial Banking, Advisory)" required />

        <FormTextarea name="message" rows={4} label="Tell us more about you (Share a bit about your background and interests...)" />

        <Button variant="default" size="lg" className="w-full" type="submit">
          Get Started
        </Button>
      </form>
    </FormContainer>
  )
}

// Newsletter Signup Form
export function NewsletterForm() {
  return (
    <section className="bg-[#f4f6e3] py-20 relative overflow-hidden">
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

          {/* Right Form Column */}
          <div className="space-y-6">
            {/* Sign-up Text Above Form */}
            <div>
              <Heading size="h3" className='text-center mb-8'>
                Sign-up for our newsletter
              </Heading>
            </div>

            {/* Form Card */}
            <Card variant="default" className="space-y-4">
              <form action={FORM_URLS.newsletter} method="POST" className="space-y-4">
                <FormInput type="text" id="firstName" name="first_name" label="First Name" required />
                <FormInput type="email" id="email" name="email" label="Email Address" required />
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Subscribe
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}