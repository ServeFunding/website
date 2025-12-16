import type { Metadata } from 'next'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  FadeIn,
  StaggerContainer
} from '@/components/ui'
import { Breadcrumb } from '@/components/breadcrumb'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { CTA } from '@/components/cta'

export const metadata: Metadata = {
  title: 'Collateral vs. Speed vs. Cost | Serve Funding',
  description: 'Understand the three-way tradeoff in business financing: collateral, speed, and cost. Learn which option is right for your situation.',
  openGraph: {
    title: 'Collateral vs. Speed vs. Cost | Serve Funding',
    description: 'Understand the three-way tradeoff in business financing: collateral, speed, and cost. Learn which option is right for your situation.',
    url: 'https://servefunding.com/capital-strategy',
    type: 'website',
  },
}

export default function CapitalStrategy() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Capital Strategy' }]} />

      <HeroFadeIn
        title="Collateral vs. Speed vs. Cost"
        subtitle="Understanding the Three-Way Tradeoff in Business Financing"
      />

      {/* The Tradeoff Explained */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <Heading size="h2" className="mb-6">
              Every Funding Decision Involves a Tradeoff
            </Heading>
            <Text size="lg" className="text-gray-700">
              You can't have all three. You need to choose what matters most for your situation. Here's how to think about it.
            </Text>
          </FadeIn>

          <div className="max-w-5xl mx-auto mb-12">
            <Card className="p-8 bg-gradient-to-r from-olive-900/5 to-gold-500/5 border-l-4 border-gold-500">
              <Heading size="h3" className="text-olive-900 mb-4">The Golden Rule</Heading>
              <Text className="text-gray-700 text-lg">
                <strong>Collateral + Speed + Cost:</strong> Pick two. You can't have all three at their best. Every funding product sits at a different point in this triangle. Understanding where you are helps you make the right choice.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>

      {/* The Three Options */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading size="h2" className="mb-6 text-olive-900">
              The Three Corners of the Triangle
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Option 1: Collateral + Cost */}
            <Card className="h-full">
              <Heading size="h3" className="text-olive-900 mb-4">
                Collateral + Cost
              </Heading>
              <Text className="text-gray-700 mb-6 text-sm leading-relaxed">
                You prioritize <strong>lower cost</strong> and have strong <strong>collateral</strong>. Speed takes a back seat.
              </Text>
              <div className="bg-olive-900/5 p-4 rounded-lg mb-6">
                <Text className="font-semibold text-olive-900 mb-3">Example: Real Estate Bridge</Text>
                <Text className="text-sm text-gray-700 mb-4">
                  You have equity in a commercial property or personal residence. You're willing to wait 1-2 weeks for underwriting.
                </Text>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Collateral:</Text>
                    <Text className="text-gold-500">✓✓✓</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Speed:</Text>
                    <Text className="text-gold-500">✓✓</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Cost:</Text>
                    <Text className="text-gold-500">✓✓✓</Text>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <Text className="text-sm font-semibold text-green-900 mb-2">Timeline: 1-2 weeks</Text>
                <Text className="text-sm font-semibold text-green-900 mb-2">Cost: Prime + 2-7% or 8-13% annualized</Text>
                <Text className="text-xs text-green-800">
                  Real example: Healthcare supplier secured $1MM at Prime + 2% with 92% advance rates
                </Text>
              </div>
            </Card>

            {/* Option 2: Speed + Cost */}
            <Card className="h-full">
              <Heading size="h3" className="text-olive-900 mb-4">
                Speed + Cost
              </Heading>
              <Text className="text-gray-700 mb-6 text-sm leading-relaxed">
                You need money <strong>fast</strong> at a <strong>reasonable cost</strong>. You have strong <strong>cash flow or invoices</strong>.
              </Text>
              <div className="bg-olive-900/5 p-4 rounded-lg mb-6">
                <Text className="font-semibold text-olive-900 mb-3">Example: Invoice Factoring</Text>
                <Text className="text-sm text-gray-700 mb-4">
                  You have strong commercial customers paying 30-90 days out. You need working capital in days, not weeks.
                </Text>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Collateral:</Text>
                    <Text className="text-gold-500">✓✓</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Speed:</Text>
                    <Text className="text-gold-500">✓✓✓</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Cost:</Text>
                    <Text className="text-gold-500">✓✓</Text>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <Text className="text-sm font-semibold text-green-900 mb-2">Timeline: 24-48 hours (after approval)</Text>
                <Text className="text-sm font-semibold text-green-900 mb-2">Cost: Prime + 1-6% + 0.25-1.5% factor fee</Text>
                <Text className="text-xs text-green-800">
                  Real example: Manufacturing company grew $1MM to $1.5MM in 2 months as sales scaled
                </Text>
              </div>
            </Card>

            {/* Option 3: Speed Only */}
            <Card className="h-full">
              <Heading size="h3" className="text-olive-900 mb-4">
                Speed Only
              </Heading>
              <Text className="text-gray-700 mb-6 text-sm leading-relaxed">
                You need cash <strong>yesterday</strong>. Cost is secondary. You'll pay a premium for speed.
              </Text>
              <div className="bg-olive-900/5 p-4 rounded-lg mb-6">
                <Text className="font-semibold text-olive-900 mb-3">Example: Unsecured Working Capital</Text>
                <Text className="text-sm text-gray-700 mb-4">
                  Payroll emergency. Customer payment delayed. You need $100K-$500K in 3-5 days, not weeks.
                </Text>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Collateral:</Text>
                    <Text className="text-gold-500">✓</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Speed:</Text>
                    <Text className="text-gold-500">✓✓✓</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="font-semibold text-gray-700">Cost:</Text>
                    <Text className="text-gold-500">✓</Text>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <Text className="text-sm font-semibold text-green-900 mb-2">Timeline: 24-72 hours</Text>
                <Text className="text-sm font-semibold text-green-900 mb-2">Cost: 1-3% (bridge) or 12-36%+ (term loans)</Text>
                <Text className="text-xs text-green-800">
                  Real example: Wedding venue funded $150K in 3 days to cover payroll for 15 weddings
                </Text>
              </div>
            </Card>
          </StaggerContainer>
        </Container>
      </Section>

      {/* How to Choose */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <Heading size="h2" className="mb-6 text-olive-900">
              How to Choose: Ask Yourself These Questions
            </Heading>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8">
              <Heading size="h3" className="text-olive-900 mb-4">1. How urgent is this?</Heading>
              <Text className="text-gray-700 mb-4">
                <strong>If you need money in 3 days:</strong> Speed is your priority. Expect to pay higher cost. Look at unsecured working capital or bridge loans.
              </Text>
              <Text className="text-gray-700">
                <strong>If you have 2-3 weeks:</strong> You can explore collateral-backed options with better rates. Real estate, equipment, or AR-based products.
              </Text>
            </Card>

            <Card className="p-8">
              <Heading size="h3" className="text-olive-900 mb-4">2. What assets do you have?</Heading>
              <Text className="text-gray-700 mb-4">
                <strong>Personal real estate or business equipment:</strong> Use it. Asset-backed lending is lower cost and you can typically negotiate 1-2 week timelines.
              </Text>
              <Text className="text-gray-700 mb-4">
                <strong>Strong accounts receivable:</strong> Invoice factoring gives you speed (24-48 hours funding) AND competitive rates (often lower than bank loans). Your customers matter more than your credit score.
              </Text>
              <Text className="text-gray-700">
                <strong>Minimal collateral:</strong> You'll pay more. Unsecured lending has higher rates but can close fast if needed.
              </Text>
            </Card>

            <Card className="p-8">
              <Heading size="h3" className="text-olive-900 mb-4">3. What's the use of funds?</Heading>
              <Text className="text-gray-700 mb-4">
                <strong>Payroll emergency or cash flow gap (30-90 days):</strong> Unsecured working capital or short-term bridge. Higher cost acceptable because it's temporary.
              </Text>
              <Text className="text-gray-700 mb-4">
                <strong>Growth investment (12+ months runway):</strong> Asset-based lending or equipment financing. Lower cost worth the 1-2 week underwriting.
              </Text>
              <Text className="text-gray-700">
                <strong>Acquisition or refinancing:</strong> Real estate bridge or permanent financing. More time available, so prioritize cost.
              </Text>
            </Card>

            <Card className="p-8">
              <Heading size="h3" className="text-olive-900 mb-4">4. Can you build in flexibility?</Heading>
              <Text className="text-gray-700">
                <strong>Early payoff discounts matter.</strong> If you fund at higher cost but plan to refinance within weeks (after a contract closes), build aggressive early payoff discounts into the loan. This lets you exit quickly and refinance into cheaper capital. We structure deals expecting this.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>

      {/* The Real-World Scenario */}
      <Section background="gray">
        <Container>
          <FadeIn className="mb-16 max-w-3xl mx-auto">
            <Heading size="h2" className="text-olive-900 mb-6">
              A Real-World Scenario: The Manufacturer
            </Heading>
            <Text className="text-gray-700 leading-relaxed">
              A manufacturing company wins a $10M contract with a Fortune 50 customer, effective Q2 next year. They need $2.5M in working capital to procure raw materials before cash flow arrives.
            </Text>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8 border-l-4 border-gold-500">
              <Heading size="h4" className="text-olive-900 mb-4">Scenario A: They choose "Speed Only"</Heading>
              <div className="bg-red-50 p-4 rounded-lg mb-4 border border-red-200">
                <Text className="text-sm font-semibold text-red-900 mb-2">Cost: 24-36% APR (unsecured working capital)</Text>
                <Text className="text-sm text-red-800">
                  They get $2.5M in 5 days. But over 12 months, they'll pay $300K-$450K in interest. That's cutting into their margin significantly.
                </Text>
              </div>
              <Text className="text-gray-700 text-sm">
                <strong>Best if:</strong> The deal falls apart if they don't have money THIS WEEK. Speed is worth the cost.
              </Text>
            </Card>

            <Card className="p-8 border-l-4 border-gold-500">
              <Heading size="h4" className="text-olive-900 mb-4">Scenario B: They choose "Collateral + Cost"</Heading>
              <div className="bg-green-50 p-4 rounded-lg mb-4 border border-green-200">
                <Text className="text-sm font-semibold text-green-900 mb-2">Cost: 8-13% APR (asset-based lending)</Text>
                <Text className="text-sm text-green-800">
                  They use equipment and receivables as collateral. Underwriting takes 2 weeks. But over 12 months, they pay $80K-$130K. They save $170K-$320K compared to unsecured.
                </Text>
              </div>
              <Text className="text-gray-700 text-sm">
                <strong>Best if:</strong> The contract isn't going anywhere. 2 weeks won't cost them the deal. The cost savings make a real difference to profitability.
              </Text>
            </Card>

            <Card className="p-8 border-l-4 border-gold-500">
              <Heading size="h4" className="text-olive-900 mb-4">Scenario C: They layer capital strategically</Heading>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-200">
                <Text className="text-sm font-semibold text-blue-900 mb-2">Cost: Mixed (lower overall)</Text>
                <Text className="text-sm text-blue-800 mb-3">
                  Day 1-5: $500K unsecured term at 30% to cover immediate needs. Cost: ~$41K annualized.
                </Text>
                <Text className="text-sm text-blue-800 mb-3">
                  Week 2: $1.5MM asset-based facility at 10% adds additional runway. Cost: ~$150K annualized.
                </Text>
                <Text className="text-sm text-blue-800 mb-3">
                  Week 3: $500K real estate financing at 7% provides long-term solution. Cost: ~$35K annualized.
                </Text>
                <Text className="text-sm font-semibold text-blue-900">
                  Total: $2.5MM capital, ~$226K cost over 12 months. They got speed when needed, then shifted to lower-cost products as runway opened up.
                </Text>
              </div>
              <Text className="text-gray-700 text-sm">
                <strong>Best if:</strong> You can stage your funding needs. Fast capital upfront, then cheaper products as the opportunity clarifies.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Key Takeaways */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <Heading size="h2" className="mb-6 text-olive-900">
              The Takeaway
            </Heading>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-4">
              <Card className="p-6 bg-olive-900/5">
                <Text className="text-gray-700">
                  <strong>There is no "best" funding option.</strong> The best option is the one that matches YOUR priorities in THIS moment.
                </Text>
              </Card>

              <Card className="p-6 bg-olive-900/5">
                <Text className="text-gray-700">
                  <strong>What looks expensive might be a bargain.</strong> If unsecured 30% capital solves a payroll crisis that would cost you $100K in lost customers, it's a steal.
                </Text>
              </Card>

              <Card className="p-6 bg-olive-900/5">
                <Text className="text-gray-700">
                  <strong>Collateral is your best friend.</strong> If you have assets (real estate, equipment, strong AR), use them. You'll cut your cost by 50-70% compared to unsecured.
                </Text>
              </Card>

              <Card className="p-6 bg-olive-900/5">
                <Text className="text-gray-700">
                  <strong>Early payoff discounts matter.</strong> If you're funding at higher cost, build aggressive early payoff terms into the agreement. Refinance as soon as you can.
                </Text>
              </Card>

              <Card className="p-6 bg-olive-900/5">
                <Text className="text-gray-700">
                  <strong>A good advisor helps you navigate the triangle.</strong> They understand YOUR situation and help you choose the right corner—not just the cheapest or fastest.
                </Text>
              </Card>
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        title="Not Sure Which Path Is Right?"
        text="That's exactly what we're here for. We'll analyze your situation, show you the tradeoffs, and help you choose the option that actually serves your business."
        buttonText="Let's Find Your Path"
        href="/contact-us"
        useBG={true}
      />
    </>
  )
}
