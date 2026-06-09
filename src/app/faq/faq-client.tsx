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
  StaggerContainer
} from '@/components/ui'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-500 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
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
          <Text className="text-gray-700 whitespace-pre-line">{answer}</Text>
        </div>
      )}
    </div>
  )
}

export interface FAQSection {
  title: string
  description?: string
  faqs: Array<{ question: string; answer: string }>
}

interface FAQClientProps {
  sections: FAQSection[]
}

export default function FAQClient({ sections }: FAQClientProps) {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map((section, sIdx) => (
              <div key={sIdx} id={section.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="mb-6">
                  <Heading size="h2" className="text-olive-900 mb-2">
                    {section.title}
                  </Heading>
                  {section.description && (
                    <Text className="text-gray-600">{section.description}</Text>
                  )}
                </div>
                <StaggerContainer className="space-y-4">
                  {section.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA
        title="Still Have Questions?"
        text="Don't see your question answered? Get in touch with our team and we'll be happy to help."
        buttonText="Contact Us"
        useBG
      />
    </div>
  )
}
