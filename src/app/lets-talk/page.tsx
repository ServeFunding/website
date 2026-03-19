'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DealInquiryForm, FormSubmitData } from '@/components/Forms'
import { DealInquiryChat } from '@/components/DealInquiryChat'
import { CalendlyWidget } from '@/components/CalendlyWidget'
import { Section, Container, Heading, Text, Card, FadeIn, SocialIcons } from '@/components/ui'
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

  // Build Calendly custom answers based on role type
  const buildCalendlyCustomAnswers = (data: FormSubmitData): Record<string, string> => {
    const isOwner = data.user_role === 'Business Owner / Operator'

    if (isOwner) {
      // Owner Calendly questions:
      // a1: "Tell us briefly about your business" (text)
      // a2: "What is your monthly revenue range?" (dropdown: <$50K, $50K-100K, $100K-$500K, $500K+)
      // a3: "What is your current funding need or goal?" (text)
      // a4: "How soon are you looking to secure funding?" (dropdown)
      // a1: "Tell us briefly about your business"
      const businessDesc = [
        data.company,
        data.business_industry,
        data.time_in_business ? `${data.time_in_business} in business` : '',
        data.annual_revenue ? `${data.annual_revenue} annual revenue` : '',
      ].filter(Boolean).join(', ')

      // a2: "What is your monthly revenue range?" (dropdown: <$50K, $50K-100K, $100K-$500K, $500K+)
      const monthlyRevenueMap: Record<string, string> = {
        '$500K-$1MM': '$50K-100K',
        '$1MM-$3MM': '$100K-$500K',
        '$3MM-$10MM': '$100K-$500K',
        '$10MM-$20MM': '$500K+',
        '$20MM-$50MM': '$500K+',
        '$50MM-$100MM': '$500K+',
        '$100MM+': '$500K+',
      }
      const monthlyRevenue = data.annual_revenue ? monthlyRevenueMap[data.annual_revenue] || '' : ''

      // a3: "What is your current funding need or goal?" — funding amount + needs
      const fundingGoal = [
        data.funding_amount,
        data.financing_needs?.length ? `for ${data.financing_needs.join(', ')}` : '',
      ].filter(Boolean).join(' ')

      return {
        ...(businessDesc && { a1: businessDesc }),
        ...(monthlyRevenue && { a2: monthlyRevenue }),
        ...(fundingGoal && { a3: fundingGoal }),
      }
    } else {
      // Partner Calendly: a1=role description
      const roleDesc = data.partner_type || data.user_role || ''
      return {
        ...(roleDesc && { a1: roleDesc }),
      }
    }
  }

  // Send webhook + email when transitioning to Calendly
  const sendCalendlyTransition = (data: FormSubmitData, context: string, source: string, chatTranscript?: string) => {
    const payload = {
      ...data,
      formType: 'deal_inquiry_calendly',
      deal_context: context,
      chat_transcript: chatTranscript || '',
      transition_source: source,
      submittedAt: new Date().toISOString(),
    }

    // Webhook to n8n
    try {
      fetch('/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl: 'https://aiascend.app.n8n.cloud/webhook/sf-inquiry', ...payload }),
      })
    } catch (error) {
      console.error('Calendly transition webhook error:', error)
    }

    // Email notification with full details + AI conversation
    try {
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, type: 'calendly' }),
      })
    } catch (error) {
      console.error('Calendly transition email error:', error)
    }
  }

  const handleFormSubmit = (data: FormSubmitData) => {
    setFormData(data)

    // If mike triage action, go straight to calendly (no chat)
    if (data.triage_action === 'mike') {
      const context = buildDealContext(data)
      setDealContext(context)
      sendCalendlyTransition(data, context, 'mike_triage')
      setView('calendly')
    } else {
      setView('chat')
    }
  }


  const handleScheduleClick = (context: string, chatTranscript?: string) => {
    setDealContext(context)
    // Send with full AI chat transcript
    sendCalendlyTransition(formData, context, 'ai_chat', chatTranscript)
    setView('calendly')
  }

  const handleScheduleDirectly = (data: FormSubmitData) => {
    setFormData(data)
    const context = buildDealContext(data)
    setDealContext(context)
    sendCalendlyTransition(data, context, 'schedule_directly')
    setView('calendly')
  }

  return (
    <main>
      {/* Hero Section */}
      <HeroFadeIn
        title="Let's Discuss Your Funding Needs"
        subtitle={<>Answer a few questions to schedule a call.<br />Takes 1 minute, there&#39;s no obligation.</>}
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
            <Card ref={cardRef} className="md:p-12 bg-white" noHover>
              {view === 'form' && <DealInquiryForm onSubmitSuccess={handleFormSubmit} onScheduleDirectly={handleScheduleDirectly} />}
              {view === 'chat' && <DealInquiryChat formData={formData} onScheduleClick={handleScheduleClick} />}
              {view === 'calendly' && (
                <div className="flex flex-col gap-6">
                  <Heading size="h3" color="primary" className="text-center">
                    Let&#39;s schedule a time to talk!
                  </Heading>
                  <CalendlyWidget
                    name={formData.name || ''}
                    email={formData.email || ''}
                    dealContext={dealContext || ''}
                    height="700px"
                    calendlyUrl={formData.calendly_url || 'https://calendly.com/michael_kodinsky/30-minute-funding-call'}
                    customAnswers={buildCalendlyCustomAnswers(formData)}
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
              Serve Funding is a trust-based advisory — not an algorithm driven &quot;marketplace&quot;. We do not sell leads or shop deals indiscriminately. Every opportunity is handled with care by our dedicated team.
            </Text>
            <Text color="white" size="lg" className="leading-relaxed">
              Whether you&#39;re a business owner or a referral partner, we treat every relationship and every client&#39;s financing opportunity as if it were our own.
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
