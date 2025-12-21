'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
      {/* Deal Inquiry Form/Chat Section */}
      <Section background="primary" className='overflow-visible'>
        <Container className='flex flex-col items-center !max-w-5xl'>
          <FadeIn className="mb-12">
            <Heading size="h1" color='highlight' className="mb-4">
              A Different Kind<br />of Funding Partner.
            </Heading>
            <Heading size="h3" color='white' className="mb-8">
              Built on Relationships. Operated With Integrity.
            </Heading>
            <Text size="lg" color="white" className="mb-6 font-semibold text-olive-900">
              Your Deal Stays With Us. Period.
            </Text>
            <Text size="lg" color="white" className="mb-12 leading-relaxed">
              Serve Funding is a trust-based advisory — not an algorithm driven "marketplace".<br />We do not sell leads or shop deals indiscriminately. Every opportunity is handled with care<br />by a dedicated, experienced team and reviewed personally by our founder.
            </Text>
            <Text size="lg" color="white"  className="mb-12 leading-relaxed">
              Whether you're a business owner or a referral partner, we treat every relationship —<br /> and every client's financing opportunity — as if it were our own.
            </Text>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="md:p-12 bg-white">
                {formSubmitted ? (
                  <DealInquiryChat formData={formData} />
                ) : (
                  <DealInquiryForm onSubmitSuccess={handleFormSubmit} />
                )}
              </Card>
            </motion.div>
          </FadeIn>
        </Container>
      </Section>

      {/* What You Can Expect Section - only show before form submit */}
      {!formSubmitted && (
        <>
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
      )}
    </main>
  )
}
