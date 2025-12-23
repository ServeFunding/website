'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DealInquiryForm, FormSubmitData } from '@/components/Forms'
import { DealInquiryChat } from '@/components/DealInquiryChat'
import { CalendlyWidget } from '@/components/CalendlyWidget'
import { Section, Container, Heading, Text, Card, StaggerContainer, StaggerItem } from '@/components/ui'
import { COLORS } from '@/lib/colors'
import { HeroFadeIn } from '@/components/hero-fade-in'

const coreValues = [
  { letter: 'T', title: 'Transparency', desc: 'We communicate honestly to build a long-term relationship.' },
  { letter: 'R', title: 'Responsibility', desc: 'We take responsibility to stay accountable to you always.' },
  { letter: 'U', title: 'Understanding', desc: 'We seek to understand you to meet and exceed your goals.' },
  { letter: 'S', title: 'Service', desc: 'We are here to always serve you and your best interests.' },
  { letter: 'T', title: 'Thankfulness', desc: 'We practice authentic gratitude for the opportunity to serve.' },
]

export default function DealInquiryPage() {
  const [view, setView] = useState<'form' | 'chat' | 'calendly'>('form')
  const [formData, setFormData] = useState<FormSubmitData>({})
  const [dealContext, setDealContext] = useState('')

  const handleFormSubmit = (data: FormSubmitData) => {
    setFormData(data)
    setView('chat')
  }

  const handleScheduleClick = (context: string) => {
    setDealContext(context)
    setView('calendly')
  }

  const handleBackToChat = () => {
    setView('chat')
  }

  // const skipToCalendly = () => {
  //   setFormData({
  //     name: 'Test User',
  //     firstname: 'Test',
  //     lastname: 'User',
  //     email: 'test@example.com',
  //     phone: '555-0000',
  //     company: 'Test Company',
  //     user_role: 'Business Owner / Operator',
  //     business_industry: 'Technology',
  //     time_in_business: '2-3 years',
  //     annual_revenue: '$500K–$1MM',
  //     financing_needs: ['Equipment or asset purchase'],
  //     funding_amount: '$250K–$500K',
  //     owner_credit_score: 'Good (700-749)',
  //     company_state: 'GA',
  //   })
  //   setDealContext('Test deal context for development')
  //   setView('calendly')
  // }

  return (
    <main>
      {/* Hero Section */}
      <HeroFadeIn
        title="A Different Kind of Funding Partner."
        subtitle="Your Deal Stays With Us. Period."
        compact
      />

      {/* Deal Inquiry Form/Chat Section */}
      <Section background="primary" className='overflow-visible !pt-0'>
        <Container className='flex flex-col items-center !max-w-3xl'>
          <div className="mb-12 text-center">
            <Heading size="h3" color='white' className="mb-6">
              Built on Relationships. Operated With Integrity.
            </Heading>
            <Text color="white" className="mb-6 leading-relaxed">
              Serve Funding is a trust-based advisory — not an algorithm driven "marketplace".<br />We do not sell leads or shop deals indiscriminately. Every opportunity is handled with care<br />by a dedicated, experienced team and reviewed personally by our founder.
            </Text>
            <Text color="white" className="leading-relaxed">
              Whether you're a business owner or a referral partner, we treat every relationship —<br /> and every client's financing opportunity — as if it were our own.
            </Text>
          </div>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, layout: { duration: 0.4 } }}
            className="w-full"
          >
            <Card className="md:p-12 bg-white">
              {view === 'form' && <DealInquiryForm onSubmitSuccess={handleFormSubmit} />}
              {view === 'chat' && <DealInquiryChat formData={formData} onScheduleClick={handleScheduleClick} />}
              {view === 'calendly' && (
                <div className="flex flex-col gap-6">
                  <CalendlyWidget
                    name={formData.name || formData.firstname || 'Guest'}
                    email={formData.email || ''}
                    dealContext={dealContext || ''}
                    height="700px"
                    calendlyUrl={formData.calendly_url || 'https://calendly.com/michael_kodinsky/discovery'}
                  />
                </div>
              )}
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* What You Can Expect Section - only show before form submit */}
      {view === 'form' && (
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
