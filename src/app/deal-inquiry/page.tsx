'use client'

import { useState } from 'react'
import { DealInquiryForm, FormSubmitData } from '@/components/Forms'
import { DealInquiryChat } from '@/components/DealInquiryChat'
import { Section, Container, Heading, Text, Card, StaggerContainer, StaggerItem } from '@/components/ui'
import { COLORS } from '@/lib/colors'
import { FadeIn } from '@/components/ui/fade-in'

const coreValues = [
  { letter: 'T', title: 'Transparency', desc: 'We communicate honestly to build a long-term relationship.' },
  { letter: 'R', title: 'Responsibility', desc: 'We take responsibility to stay accountable to you always.' },
  { letter: 'U', title: 'Understanding', desc: 'We seek to understand you to meet and exceed your goals.' },
  { letter: 'S', title: 'Service', desc: 'We are here to always serve you and your best interests.' },
  { letter: 'T', title: 'Thankfulness', desc: 'We practice authentic gratitude for the opportunity to serve.' },
]

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
        <>
          <DealInquiryForm
            title={<>Discover Your<br />Business Financing Options</>}
            subtitle={<>Take a few minutes to provide some general insights about the business and its capital needs<br />to receive intelligent insights on available funding solutions for the business today.</>}
            onSubmitSuccess={handleFormSubmit}
          />

          {/* Trust-Based Partnership Section */}
          <Section background="gray">
            <Container>
              <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
                <Heading size="h2" className="mb-4">
                  A Different Kind<br />of Funding Partner.
                </Heading>
                <Heading size="h3" color='primary' className="mb-8">
                  Built on Relationships. Operated With Integrity.
                </Heading>
                <Text size="lg" className="mb-6 font-semibold text-olive-900">
                  Your Deal Stays With Us. Period.
                </Text>
                <Text size="lg" className="mb-12 text-gray-700 leading-relaxed">
                  Serve Funding is a trust-based advisory — not an algorithm driven "marketplace". We do not sell leads or shop deals indiscriminately. Every opportunity is handled with care by a dedicated, experienced team and reviewed personally by our founder.
                </Text>
                <Text size="lg" className="text-gray-700 leading-relaxed">
                  Whether you're a business owner or a referral partner, we treat every relationship — and every client's financing opportunity – as if it were our own.
                </Text>
              </FadeIn>
            </Container>
          </Section>

          {/* What You Can Expect Section */}
          <Section background="gray">
            <Container>
              <div className="text-center mb-12">
                <Heading size="h2" className="mb-4">What You Can Expect</Heading>
              </div>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                {[
                  { step: 1, title: 'Share Details', desc: 'Share a few high-level details about the business or deal.' },
                  { step: 2, title: 'Get Feedback', desc: 'Get intelligent feedback on what funding options may be available.' },
                  { step: 3, title: 'Engage & Close', desc: 'Engage with Serve Funding to go through the underwriting process and receive offers.' },
                ].map(item => (
                  <StaggerItem key={item.step} className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}>
                        <span className="text-xl font-bold">{item.step}</span>
                      </div>
                    </div>
                    <Heading size="h4" className="mb-3">{item.title}</Heading>
                    <Text className="text-gray-600">{item.desc}</Text>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Container>
          </Section>

          {/* TRUST Values Visual */}
          <Section background="background">
            <Container>
              <div className="text-center mb-12">
                <Heading size="h2" className="mb-4">Our Core Values are Rooted in Trust</Heading>
              </div>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {coreValues.map((value, index) => (
                  <Card key={index} className="text-center h-full flex flex-col items-center justify-start pt-8 group hover:bg-[#D3CE75] transition-all duration-300 hover:-translate-y-2">
                    <span className="font-serif font-bold text-5xl mb-6 block" style={{ color: COLORS.primary }}>
                      {value.letter}
                    </span>
                    <Heading size="h4" className="mb-3 text-olive-900">
                      {value.title}
                    </Heading>
                    <Text className="text-gray-600 text-sm">
                      {value.desc}
                    </Text>
                  </Card>
                ))}
              </StaggerContainer>
            </Container>
          </Section>
        </>
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
