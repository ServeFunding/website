'use client'

import { Handshake, Zap, Headphones } from 'lucide-react'
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
  FormSelect,
  FormGroup
} from '@/components/design-system'

export default function Refer() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: '#5a6c40' }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
            <FadeIn className="text-white max-w-3xl">
              <Heading as="h1" size="h1" color="white" className="mb-6">
                Banker Referral Program
              </Heading>
              <Text size="lg" className="text-white/90">
                Partner with Serve Funding to provide your clients with flexible working capital solutions. Submit referrals quickly and easily.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeIn>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Handshake size={48} className="mb-4 text-gold-500" />
                <Heading as="h3" size="h4" className="mb-3">Partnership Focused</Heading>
                <Text>We work collaboratively with your team to ensure smooth, successful outcomes for your clients.</Text>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Zap size={48} className="mb-4 text-gold-500" />
                <Heading as="h3" size="h4" className="mb-3">Fast Turnaround</Heading>
                <Text>Quick underwriting and funding timelines help your clients access capital when they need it most.</Text>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Headphones size={48} className="mb-4 text-gold-500" />
                <Heading as="h3" size="h4" className="mb-3">Dedicated Support</Heading>
                <Text>Our team provides personalized support throughout the referral process for both banker and client.</Text>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Referral Form Section */}
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

              <Card variant="default" className="p-8">
                <form
                  action="https://formspree.io/f/xrbjwwyp"
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
                          id="banker_first_name"
                          name="banker_first_name"
                          required
                          placeholder="John"
                        />
                      </FormField>
                      <FormField>
                        <FormLabel>Last Name *</FormLabel>
                        <FormInput
                          type="text"
                          id="banker_last_name"
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
                          id="banker_email"
                          name="banker_email"
                          required
                          placeholder="john@bank.com"
                        />
                      </FormField>
                      <FormField>
                        <FormLabel>Phone *</FormLabel>
                        <FormInput
                          type="tel"
                          id="banker_phone"
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
                        id="banker_institution"
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
                          id="client_first_name"
                          name="client_first_name"
                          required
                          placeholder="Jane"
                        />
                      </FormField>
                      <FormField>
                        <FormLabel>Last Name *</FormLabel>
                        <FormInput
                          type="text"
                          id="client_last_name"
                          name="client_last_name"
                          required
                          placeholder="Doe"
                        />
                      </FormField>
                    </FormGroup>

                    <FormGroup columns={2} className="mb-4">
                      <FormField>
                        <FormLabel>Email *</FormLabel>
                        <FormInput
                          type="email"
                          id="client_email"
                          name="client_email"
                          required
                          placeholder="jane@company.com"
                        />
                      </FormField>
                      <FormField>
                        <FormLabel>Phone *</FormLabel>
                        <FormInput
                          type="tel"
                          id="client_phone"
                          name="client_phone"
                          required
                          placeholder="+1-555-123-4567"
                        />
                      </FormField>
                    </FormGroup>

                    <FormField className="mb-4">
                      <FormLabel>Company Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="company_name"
                        name="company_name"
                        required
                        placeholder="Client's Business Name"
                      />
                    </FormField>

                    <FormField className="mb-4">
                      <FormLabel>Capital Needed (Range) *</FormLabel>
                      <FormSelect
                        id="capital_needed"
                        name="capital_needed"
                        required
                      >
                        <option value="">Select a range</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m+">$1,000,000+</option>
                      </FormSelect>
                    </FormField>

                    <FormField className="mb-4">
                      <FormLabel>Use of Funds *</FormLabel>
                      <FormTextarea
                        id="use_of_funds"
                        name="use_of_funds"
                        required
                        rows={3}
                        placeholder="Describe how the client will use the capital (e.g., inventory, equipment, payroll, expansion)"
                      />
                    </FormField>

                    <FormField>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormTextarea
                        id="additional_notes"
                        name="additional_notes"
                        rows={3}
                        placeholder="Any additional information about the client or their situation"
                      />
                    </FormField>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-6 border-t border-gray-200">
                    <Button
                      type="submit"
                      variant="default"
                      className="flex-1"
                    >
                      Submit Referral
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you acknowledge that you have the authority to refer the client and that the information provided is accurate.
                  </p>
                </form>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  )
}
