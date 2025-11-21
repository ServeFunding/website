'use client'

import { Handshake, Zap, Headphones } from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn
} from '@/components/design-system'
import { ReferralForm } from '@/components/Forms'

export default function Refer() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: '#5a6c40' }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
            <FadeIn className="text-white max-w-3xl">
              <Heading as="h1" size="h1" color="white" className="mb-6">
                Banker Referral Program
              </Heading>
              <Text size="lg" className="text-white/90">
                Partner with Serve Funding to provide your clients with flexible working capital solutions. Submit referrals quickly and easily.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeIn>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Handshake size={48} className="mb-4 text-gold-500" />
                <Heading as="h3" size="h4" className="mb-3">Partnership Focused</Heading>
                <Text>We work collaboratively with your team to ensure smooth, successful outcomes for your clients.</Text>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Zap size={48} className="mb-4 text-gold-500" />
                <Heading as="h3" size="h4" className="mb-3">Fast Turnaround</Heading>
                <Text>Quick underwriting and funding timelines help your clients access capital when they need it most.</Text>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Headphones size={48} className="mb-4 text-gold-500" />
                <Heading as="h3" size="h4" className="mb-3">Dedicated Support</Heading>
                <Text>Our team provides personalized support throughout the referral process for both banker and client.</Text>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Referral Form Section */}
      <ReferralForm />
    </div>
  )
}
