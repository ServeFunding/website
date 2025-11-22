'use client'

import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormGroup,
} from '@/components/design-system'

// Formspree URLs for different form types
export const FORM_URLS = {
  intro_call: 'https://formspree.io/f/xrbjwwlp',
  referral: 'https://formspree.io/f/xrbjwwyp',
  partner_inquiry: 'https://formspree.io/f/xzzwpyqv',
}

// Standard Lead Form (for homepage, solutions, fundings, contact, etc.)
export function IntroCallForm() {
  return (
    <Section background="olive">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <Heading as="h3" size="h1" color="white">Let's Talk.</Heading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="p-8 md:p-12">
              <form action={FORM_URLS.intro_call} method="POST" className="space-y-6">
                <FormGroup columns={2}>
                  <FormField>
                    <FormLabel>First Name</FormLabel>
                    <FormInput type="text" name="first_name" placeholder="John" required />
                  </FormField>
                  <FormField>
                    <FormLabel>Last Name</FormLabel>
                    <FormInput type="text" name="last_name" placeholder="Doe" required />
                  </FormField>
                </FormGroup>

                <FormField>
                  <FormLabel>Company Name</FormLabel>
                  <FormInput type="text" name="company" placeholder="Your Company" required />
                </FormField>

                <FormGroup columns={2}>
                  <FormField>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" name="email" placeholder="you@company.com" required />
                  </FormField>
                  <FormField>
                    <FormLabel>Phone</FormLabel>
                    <FormInput type="tel" name="phone" placeholder="+1 (555) 123-4567" required />
                  </FormField>
                </FormGroup>

                <FormField>
                  <FormLabel>Capital For</FormLabel>
                  <FormInput type="text" name="capital_for" placeholder="e.g., Inventory, Equipment" required />
                </FormField>

                <FormField>
                  <FormLabel>Message</FormLabel>
                  <FormTextarea name="message" rows={4} placeholder="Tell us more about your needs..." />
                </FormField>

                <Button variant="default" size="lg" className="w-full" type="submit">Get Started</Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}

// Referral Form (for refer page)
export function ReferralForm() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <Heading as="h2" size="h2" className="mb-4">Submit a Referral</Heading>
              <Text size="lg" className="text-gray-600">
                Tell us about your client and how we can help. Our team will review the information and follow up promptly.
              </Text>
            </div>

            <Card variant="default">
              <form
                action={FORM_URLS.referral}
                method="POST"
                className="space-y-6"
              >
                {/* Banker Information Section */}
                <div>
                  <Heading as="h3" size="h4" className="text-olive-900 mb-6 pb-4 border-b border-gray-200">
                    Your Information
                  </Heading>

                  <FormGroup columns={2} className="mb-4">
                    <FormField>
                      <FormLabel>First Name *</FormLabel>
                      <FormInput
                        type="text"
                        name="banker_first_name"
                        required
                        placeholder="John"
                      />
                    </FormField>
                    <FormField>
                      <FormLabel>Last Name *</FormLabel>
                      <FormInput
                        type="text"
                        name="banker_last_name"
                        required
                        placeholder="Smith"
                      />
                    </FormField>
                  </FormGroup>

                  <FormGroup columns={2} className="mb-4">
                    <FormField>
                      <FormLabel>Email *</FormLabel>
                      <FormInput
                        type="email"
                        name="banker_email"
                        required
                        placeholder="john@bank.com"
                      />
                    </FormField>
                    <FormField>
                      <FormLabel>Phone *</FormLabel>
                      <FormInput
                        type="tel"
                        name="banker_phone"
                        required
                        placeholder="+1-770-820-7409"
                      />
                    </FormField>
                  </FormGroup>

                  <FormField>
                    <FormLabel>Bank/Institution Name *</FormLabel>
                    <FormInput
                      type="text"
                      name="banker_institution"
                      required
                      placeholder="Your Bank Name"
                    />
                  </FormField>
                </div>

                {/* Client Information Section */}
                <div>
                  <Heading as="h3" size="h4" className="text-olive-900 mb-6 pb-4 border-b border-gray-200">
                    Client Information
                  </Heading>

                  <FormGroup columns={2} className="mb-4">
                    <FormField>
                      <FormLabel>First Name *</FormLabel>
                      <FormInput
                        type="text"
                        name="client_first_name"
                        required
                        placeholder="Jane"
                      />
                    </FormField>
                    <FormField>
                      <FormLabel>Last Name *</FormLabel>
                      <FormInput
                        type="text"
                        name="client_last_name"
                        required
                        placeholder="Doe"
                      />
                    </FormField>
                  </FormGroup>

                  <FormField>
                    <FormLabel>Company Name *</FormLabel>
                    <FormInput
                      type="text"
                      name="client_company"
                      required
                      placeholder="Their Company Name"
                    />
                  </FormField>

                  <FormGroup columns={2} className="mb-4">
                    <FormField>
                      <FormLabel>Email *</FormLabel>
                      <FormInput
                        type="email"
                        name="client_email"
                        required
                        placeholder="jane@company.com"
                      />
                    </FormField>
                    <FormField>
                      <FormLabel>Phone *</FormLabel>
                      <FormInput
                        type="tel"
                        name="client_phone"
                        required
                        placeholder="+1-555-123-4567"
                      />
                    </FormField>
                  </FormGroup>

                  <FormField>
                    <FormLabel>Industry *</FormLabel>
                    <FormInput
                      type="text"
                      name="client_industry"
                      required
                      placeholder="e.g., Manufacturing, Retail"
                    />
                  </FormField>

                  <FormField>
                    <FormLabel>Capital Needed *</FormLabel>
                    <FormInput
                      type="text"
                      name="client_capital_needed"
                      required
                      placeholder="e.g., $250K - $1MM"
                    />
                  </FormField>

                  <FormField>
                    <FormLabel>How can Serve Funding help?</FormLabel>
                    <FormTextarea
                      name="client_needs"
                      rows={4}
                      placeholder="Briefly describe your client's funding needs..."
                    />
                  </FormField>
                </div>

                <Button variant="default" size="lg" className="w-full" type="submit">Submit Referral</Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}

// Partner Inquiry Form (for partners page)
export function PartnerInquiryForm() {
  return (
    <Section background="olive" className="relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center">
            <Heading as="h2" size="h1" color="white" className="mb-8">Let's Connect</Heading>
            <Text size="lg" color="white" className="mb-12">
              Please fill out this form and we'll schedule a call
            </Text>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card variant="default" className="space-y-6">
              <form action={FORM_URLS.partner_inquiry} method="POST" className="space-y-6">
                <FormGroup columns={2}>
                  <FormField>
                    <FormLabel className="text-gray-900">First Name</FormLabel>
                    <FormInput type="text" name="first_name" placeholder="John" required />
                  </FormField>
                  <FormField>
                    <FormLabel className="text-gray-900">Last Name</FormLabel>
                    <FormInput type="text" name="last_name" placeholder="Smith" required />
                  </FormField>
                </FormGroup>

                <FormField>
                  <FormLabel className="text-gray-900">Company Name</FormLabel>
                  <FormInput type="text" name="company" placeholder="Your Company" required />
                </FormField>

                <FormGroup columns={2}>
                  <FormField>
                    <FormLabel className="text-gray-900">Email Address</FormLabel>
                    <FormInput type="email" name="email" placeholder="you@company.com" required />
                  </FormField>
                  <FormField>
                    <FormLabel className="text-gray-900">Phone Number</FormLabel>
                    <FormInput type="tel" name="phone" placeholder="+1-555-123-4567" required />
                  </FormField>
                </FormGroup>

                <FormField>
                  <FormLabel className="text-gray-900">Partnership Interest</FormLabel>
                  <FormInput type="text" name="interest" placeholder="e.g., Commercial Banking, Advisory" required />
                </FormField>

                <FormField>
                  <FormLabel className="text-gray-900">Tell us more about you</FormLabel>
                  <FormTextarea name="message" rows={4} placeholder="Share a bit about your background and interests..." />
                </FormField>

                <Button variant="default" size="lg" className="w-full" type="submit">
                  Get Started
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}

// Newsletter Signup Form
export function NewsletterForm() {
  return (
    <section className="bg-[#f4f6e3] py-20 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* "Logo" recreation */}
            <div className="flex items-center gap-4 mb-8">
              <img src="/android-chrome-192x192.png" alt="Serve Funding" className="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-serif font-bold text-olive-900 leading-none">creative<br/>working<br/>capital</h3>
                <p className="text-xs text-olive-800 mt-1 italic">A monthly good newsletter from Serve Funding</p>
              </div>
            </div>

            <div>
              <Heading as="h2" size="h2" className="text-olive-800 mb-2">
                Sign-up for our newsletter:
              </Heading>
              <Heading as="h2" size="h2" className="text-olive-900 font-bold mb-6">
                CREATIVE WORKING CAPITAL
              </Heading>
              <Text className="text-olive-800/80 max-w-md text-lg">
                Receive exclusive access to monthly client success stories and detailed credit criteria from our preferred lender network.
              </Text>
            </div>
          </div>

          {/* Right Form */}
          <Card variant="default" className="space-y-4">
            <form
              action={FORM_URLS.intro_call}
              method="POST"
              className="space-y-4"
            >
              <FormField>
                <FormLabel>First Name</FormLabel>
                <FormInput
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="Your first name"
                />
              </FormField>
              <FormField>
                <FormLabel>Email Address</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                />
              </FormField>
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
              >
                Subscribe
              </Button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}