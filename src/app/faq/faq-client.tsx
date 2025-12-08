'use client'

import { useState } from 'react'
import {
  ChevronDown
} from 'lucide-react'
import { CTA } from '@/components/cta'
import {
  Section,
  Container,
  Heading,
  Text,
  StaggerContainer,
  StaggerItem
} from '@/components/ui'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-500 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <Heading size="h4" className="text-left text-olive-900">
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
      {/* FAQ Section */}
      <Section>
        <Container>
          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Contact Section */}
      <CTA
        title="Still Have Questions?"
        text="Don't see your question answered? Get in touch with our team and we'll be happy to help."
        buttonText="Contact Us"
        source="fundings"
        useBG
      />
    </div>
  )
}