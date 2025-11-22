'use client'

import { useState } from 'react'
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
  StaggerItem,
  BRAND_COLORS
} from '@/components/design-system'

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

interface FAQClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FAQClient({ faqs }: FAQClientProps) {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen }}>
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