import { Handshake, Zap, Headphones } from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  HeroFadeIn
} from '@/components/design-system'
import { ReferralForm } from '@/components/Forms'

export default function Refer() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <HeroFadeIn
        title="Banker Referral Program"
        subtitle="Serve Funding's banker referral program enables commercial bankers, CPAs, accountants, and financial advisors to earn referral fees while providing clients with specialized working capital solutions. Funding: $250K-$100MM. Fast underwriting, transparent pricing, and white-label partnership options available for financial professionals."
      />

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeIn>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Handshake size={48} className="mb-4 text-gold-500" />
                <Heading size="h3" className="mb-3">Partnership Focused</Heading>
                <Text>We work collaboratively with your team to ensure smooth, successful outcomes for your clients.</Text>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Zap size={48} className="mb-4 text-gold-500" />
                <Heading size="h3" className="mb-3">Fast Turnaround</Heading>
                <Text>Quick underwriting and funding timelines help your clients access capital when they need it most.</Text>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card variant="flat" className="p-8 flex flex-col items-center text-center">
                <Headphones size={48} className="mb-4 text-gold-500" />
                <Heading size="h3" className="mb-3">Dedicated Support</Heading>
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
