'use client'

import { useState } from 'react'
import { DealInquiryForm, FormSubmitData } from '@/components/Forms'
import { DealInquiryChat } from '@/components/DealInquiryChat'
import { Section } from '@/components/ui'

export default function DealInquiryPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormSubmitData>({})

  const handleFormSubmit = (data: FormSubmitData) => {
    setFormData(data)
    setFormSubmitted(true)
  }

  return (
    <main>
      {!formSubmitted ? (
        <Section background="background">
          <DealInquiryForm
            title="Tell Us About Your Deal"
            subtitle="Share your funding need details and we'll help guide you with AI-powered insights"
            onSubmitSuccess={handleFormSubmit}
          />
        </Section>
      ) : (
        <Section background="background">
          <div style={{ position: 'relative', zIndex: 10 }}>
            <DealInquiryChat formData={formData} />
          </div>
        </Section>
      )}
    </main>
  )
}
