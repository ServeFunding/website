'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DealInquiryForm, FormSubmitData } from '@/components/Forms'
import { DealInquiryChat } from '@/components/DealInquiryChat'
import { CalendlyWidget } from '@/components/CalendlyWidget'
import { Section, Container, Heading, Text, Card, FadeIn, SocialIcons } from '@/components/ui'
import { COLORS } from '@/lib/colors'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { formQuestions } from '@/data/form-questions'

export default function DealInquiryPage() {
  const [view, setView] = useState<'form' | 'chat' | 'calendly'>('form')
  const [formData, setFormData] = useState<FormSubmitData>({})
  const [dealContext, setDealContext] = useState('')
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (view === 'calendly' || view === 'chat') {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [view])

  const buildDealContext = (data: FormSubmitData): string => {
    // Create a map of question IDs to titles for easy lookup
    const questionMap = formQuestions.reduce((acc, q) => {
      acc[q.id] = q.title
      return acc
    }, {} as Record<string, string>)

    const answers = [
      data.user_role ? `${questionMap.user_role} ${data.user_role}` : null,
      data.partner_type ? `${questionMap.partner_type} ${data.partner_type}` : null,
      data.annual_revenue ? `${questionMap.annual_revenue} ${data.annual_revenue}` : null,
      data.funding_amount ? `${questionMap.funding_amount} ${data.funding_amount}` : null,
      data.time_in_business ? `${questionMap.time_in_business} ${data.time_in_business}` : null,
      data.owner_credit_score ? `${questionMap.owner_credit_score} ${data.owner_credit_score}` : null,
      data.business_industry ? `${questionMap.business_industry} ${data.business_industry}` : null,
      data.financing_needs && Array.isArray(data.financing_needs) && data.financing_needs.length > 0 ? `${questionMap.financing_needs} ${data.financing_needs.join(', ')}` : null,
    ].filter(Boolean).join('\n')

    return answers
  }

  const handleFormSubmit = (data: FormSubmitData) => {
    setFormData(data)

    // If mike triage action, go straight to calendly (no chat)
    if (data.triage_action === 'mike') {
      const dealContext = buildDealContext(data)
      setDealContext(dealContext)
      setView('calendly')
    } else {
      setView('chat')
    }
  }


  const handleScheduleClick = (context: string) => {
    setDealContext(context)
    setView('calendly')
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
        title="Let's Discuss Your Funding Needs"
        subtitle={<>Answer a few questions to schedule a call.<br />Takes 1 minute, there's no obligation.</>}
        compact
      />

      {/* Deal Inquiry Form/Chat Section */}
      <Section background="primary" className='overflow-visible'>
        <Container className='flex flex-col items-center !max-w-3xl'>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, layout: { duration: 0.4 } }}
            className="w-full"
          >
            <Card ref={cardRef} className="md:p-12 bg-white">
              {view === 'form' && <DealInquiryForm onSubmitSuccess={handleFormSubmit} />}
              {view === 'chat' && <DealInquiryChat formData={formData} onScheduleClick={handleScheduleClick} />}
              {view === 'calendly' && (
                <div className="flex flex-col gap-6">
                  <Heading size="h3" color="primary" className="text-center">
                    Let's schedule a time to talk!
                  </Heading>
                  <CalendlyWidget
                    name={formData.name || ''}
                    email={formData.email || ''}
                    dealContext={dealContext || ''}
                    height="700px"
                    calendlyUrl={formData.calendly_url || 'https://calendly.com/michael_kodinsky/discovery'}
                  />
                </div>
              )}
            </Card>
          </motion.div>
          <div className="mt-12 text-center">
            <Heading size="h3" color='white' className="mb-6">
              Built on Relationships. Operated With Integrity.
            </Heading>
            <Text color="white" size="lg" className="mb-6 leading-relaxed">
              Serve Funding is a trust-based advisory — not an algorithm driven "marketplace". We do not sell leads or shop deals indiscriminately. Every opportunity is handled with care by our dedicated team.
            </Text>
            <Text color="white" size="lg" className="leading-relaxed">
              Whether you're a business owner or a referral partner, we treat every relationship and every client's financing opportunity as if it were our own.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Social Media Section */}
      <Section background="background">
        <Container>
          <FadeIn className="text-center max-w-xl mx-auto">
            <Heading size="h3" className="mb-4 text-olive-900">
              Connect With Us On Social Media
            </Heading>
            <Text size="lg" className="text-gray-700 mb-6">
              Stay up-to-date with the latest news,<br />funding tips, and success stories.
            </Text>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
          </FadeIn>
        </Container>
      </Section>

    </main>
  )
}
