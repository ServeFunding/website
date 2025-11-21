'use client'

import {
  ChevronDown
} from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/design-system'
import { useState } from 'react'

const faqs = [
  {
    question: 'What Is Serve Funding?',
    answer: 'Serve Funding is a boutique working capital advisory that helps businesses secure financing solutions when traditional banks aren\'t an option. We connect business owners with lenders offering loans, lines of credit, equipment leasing, and other financial products tailored to their needs.'
  },
  {
    question: 'How Does Serve Funding Work?',
    answer: 'We work with trusted referral partners, such as bankers and financial advisors, to receive leads for businesses in need of financing. Our process involves qualifying the lead, gathering the necessary documentation, and connecting the business with suitable funding options. We guide you through every step of the process to ensure a smooth and transparent experience.'
  },
  {
    question: 'What Types Of Funding Solutions Do You Offer?',
    answer: 'Serve Funding offers a variety of funding solutions, including: Loans and lines of credit, Asset-based financing, Equipment leasing, Contract and purchase order funding, MCA (Merchant Cash Advance) consolidations, and Equity and partner buyouts.'
  },
  {
    question: 'What Information Do I Need To Provide To Get Started?',
    answer: 'To begin, we will request some basic information about your business, including financial statements, business plans, and identification documents. This helps us assess your eligibility and find the best financing options available.'
  },
  {
    question: 'How Long Does The Funding Process Take?',
    answer: 'The timeline varies depending on the type of funding and the completeness of the information provided. Typically, it can take anywhere from a few days to a couple of weeks. We work diligently to expedite the process and keep you informed at every stage.'
  },
  {
    question: 'What If I\'ve Been Denied Funding By A Bank?',
    answer: 'Serve Funding specializes in helping businesses that have been turned down by traditional banks. We have access to alternative lenders and creative financing solutions designed to meet unique business needs, even if you\'ve been previously denied.'
  },
  {
    question: 'Is My Information Kept Confidential?',
    answer: 'Yes, we take your privacy seriously. All information you provide is kept confidential and is only shared with trusted partners and lenders as necessary to facilitate your funding. Please review our Privacy Policy for more details on how we protect your data.'
  },
  {
    question: 'How Does Serve Funding Ensure A Fair Process?',
    answer: 'We operate on a foundation of transparency, integrity, and service. Our goal is to find the best financing solution that aligns with your business goals. We communicate openly about all options, fees, and potential outcomes, ensuring you have the information needed to make informed decisions.'
  },
  {
    question: 'Can Serve Funding Help With Ongoing Financing Needs?',
    answer: 'Absolutely! We aim to build long-term relationships with our clients. If your business requires additional funding in the future or if your needs evolve, we are here to help you navigate those changes and find the right financial solutions.'
  },
  {
    question: 'What Industries Does Serve Funding Work With?',
    answer: 'We work with a wide range of industries, including retail, manufacturing, technology, healthcare, and more. If you\'re unsure whether your business qualifies, please contact us to discuss your specific needs.'
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-500 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <Heading as="h3" size="h4" className="text-left text-olive-900">
          {question}
        </Heading>
        <ChevronDown
          size={24}
          className={`text-gold-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50 p-6">
          <Text className="text-gray-700">{answer}</Text>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: '#5a6c40' }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
            <FadeIn className="text-white max-w-3xl">
              <Heading as="h1" size="h1" color="white" className="mb-6">
                FAQ
              </Heading>
              <Text size="lg" className="text-white/90">
                Frequently Asked Questions
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <FadeIn className="max-w-3xl mx-auto mb-16 text-center">
            <Heading as="h2" size="h2" className="mb-6 text-olive-900">
              Have Questions?
            </Heading>
            <Text size="lg" className="text-gray-700">
              Find answers to commonly asked questions about Serve Funding and our services.
            </Text>
          </FadeIn>

          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container>
          <FadeIn className="max-w-2xl mx-auto text-center">
            <Heading as="h2" size="h2" className="mb-6 text-olive-900">
              Still Have Questions?
            </Heading>
            <Text size="lg" className="text-gray-700 mb-8">
              Don't see your question answered? Get in touch with our team and we'll be happy to help.
            </Text>
            <Button variant="gold" size="lg">
              Contact Us
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </div>
  )
}
