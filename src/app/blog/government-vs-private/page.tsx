import { CheckCircle, ArrowRight } from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/ui'
import { BlogHeroFadeIn } from '@/components/blog-hero-fade-in'
import { CTA } from '@/components/cta'
import { IntroCallForm } from '@/components/Forms'
import Link from 'next/link'

export const metadata = {
  title: "Government Financing vs. Private Lenders: 2025 Guide",
  description: "Compare SBA loans, government contract financing, and private lender options. See which government or private funding solution fits your business.",
  openGraph: {
    title: "Government Financing vs. Private Lenders: 2025 Guide",
    description: "Compare SBA loans, government contract financing, and private lender options. See which government or private funding solution fits your business.",
    url: "https://servefunding.com/comparison/government-vs-private",
  },
}

const comparisonData = [
  {
    feature: "Interest Rate",
    government: "Prime + 2-3% (5-8% typical)",
    private: "Prime + 1.5-5% (8-13% typical)"
  },
  {
    feature: "Funding Timeline",
    government: "45-90 days (extensive underwriting)",
    private: "10-20 days (faster decisions)"
  },
  {
    feature: "Application Process",
    government: "Complex, detailed documentation required",
    private: "Streamlined, fewer forms needed"
  },
  {
    feature: "Loan Guarantee Required",
    government: "Personal guarantee + collateral",
    private: "Asset-backed or personal guarantee"
  },
  {
    feature: "Minimum Credit Score",
    government: "650+ (usually)",
    private: "550+ (asset-dependent)"
  },
  {
    feature: "Best Loan Amount",
    government: "$50K - $5MM",
    private: "$250K - $100MM+"
  },
  {
    feature: "Flexibility in Use",
    government: "Working capital, equipment, real estate",
    private: "Highly flexible, any business use"
  },
  {
    feature: "Prepayment Penalties",
    government: "None (can pay early without penalty)",
    private: "Varies (may have early payoff costs)"
  }
]

const useCases = [
  {
    title: "Choose Government Financing If...",
    items: [
      "You want the lowest long-term interest rate",
      "You can wait 2-3 months for funding",
      "You have solid financials and credit (650+)",
      "You're buying equipment or real estate",
      "You want a fixed-rate long-term loan"
    ],
    color: "text-blue-600"
  },
  {
    title: "Choose Private Lenders If...",
    items: [
      "You need capital within 2-4 weeks",
      "Your credit is under 650 but assets are strong",
      "You need flexible terms and custom structures",
      "You have seasonal or variable cash flow",
      "You need funding for working capital/payroll"
    ],
    color: "text-olive-900"
  }
]

const realWorldExample = {
  title: "Real-World Example: Manufacturing Company",
  scenario: "A manufacturing company needs $800,000 for working capital and equipment.",
  gov: {
    rate: "6% fixed",
    timeline: "60 days",
    payment: "~$15,400/month over 5 years",
    total: "$180,000 in interest",
    note: "Excellent for long-term, fixed obligations"
  },
  private: {
    rate: "11% (Prime 7% + 4% lender rate)",
    timeline: "14 days",
    payment: "~$17,000/month over 5 years",
    total: "$220,000 in interest",
    note: "But they had capital within 2 weeks vs. 2 months"
  }
}

export default function GovernmentVsPrivate() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <BlogHeroFadeIn
        title="Government Financing vs. Private Lenders"
        subtitle="A 2025 guide to SBA loans, government contract financing, and private lending options. Understand the differences, costs, and best use cases for each."
        date="November 26, 2024"
        author="Michael Kodinsky"
      />

      {/* Quick Comparison Table */}
      <Section background="white">
        <Container>
          <FadeIn className="mb-12">
            <Heading size="h2" className="mb-8 text-center">
              Quick <span className="text-gold-500">Comparison Table</span>
            </Heading>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Government (SBA)</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Private Lenders</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-700">{row.government}</td>
                      <td className="px-6 py-4 text-gray-700">{row.private}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Use Case Cards */}
      <Section background="gray">
        <Container>
          <FadeIn className="mb-12">
            <Heading size="h2" className="mb-8 text-center">
              When to Choose <span className="text-gold-500">Each Option</span>
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <StaggerItem key={index}>
                <Card className="p-8 h-full">
                  <Heading size="h3" className={`mb-6 ${useCase.color}`}>
                    {useCase.title}
                  </Heading>
                  <ul className="space-y-3">
                    {useCase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" />
                        <Text className="text-gray-700">{item}</Text>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Real-World Example */}
      <Section background="white">
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Heading size="h2" className="mb-8 text-center">
                Real-World <span className="text-gold-500">Example</span>
              </Heading>

              <Card className="p-8 mb-8 bg-gray-50 border border-gray-200">
                <Heading size="h3" className="mb-2 text-olive-900">
                  {realWorldExample.title}
                </Heading>
                <Text className="text-gray-700 font-semibold">
                  {realWorldExample.scenario}
                </Text>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Government */}
                <Card className="p-8 border-2 border-blue-500 bg-blue-50">
                  <Heading size="h3" className="mb-6 text-blue-700">
                    Government SBA Loan
                  </Heading>
                  <div className="space-y-4">
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Interest Rate</Text>
                      <Heading size="h4" className="text-blue-700">{realWorldExample.gov.rate}</Heading>
                    </div>
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Timeline</Text>
                      <Heading size="h4" className="text-blue-700">{realWorldExample.gov.timeline}</Heading>
                    </div>
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Monthly Payment</Text>
                      <Heading size="h4" className="text-blue-700">{realWorldExample.gov.payment}</Heading>
                    </div>
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Total Interest (5 years)</Text>
                      <Heading size="h4" className="text-blue-700">{realWorldExample.gov.total}</Heading>
                    </div>
                    <Text className="text-gray-700 text-sm italic mt-6 pt-6 border-t border-blue-200">
                      {realWorldExample.gov.note}
                    </Text>
                  </div>
                </Card>

                {/* Private */}
                <Card className="p-8 border-2 border-olive-900 bg-olive-50">
                  <Heading size="h3" className="mb-6 text-olive-900">
                    Private Lender (Serve Funding)
                  </Heading>
                  <div className="space-y-4">
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Interest Rate</Text>
                      <Heading size="h4" className="text-olive-900">{realWorldExample.private.rate}</Heading>
                    </div>
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Timeline</Text>
                      <Heading size="h4" className="text-olive-900">{realWorldExample.private.timeline}</Heading>
                    </div>
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Monthly Payment</Text>
                      <Heading size="h4" className="text-olive-900">{realWorldExample.private.payment}</Heading>
                    </div>
                    <div>
                      <Text className="text-sm text-gray-600 font-semibold">Total Interest (5 years)</Text>
                      <Heading size="h4" className="text-olive-900">{realWorldExample.private.total}</Heading>
                    </div>
                    <Text className="text-gray-700 text-sm italic mt-6 pt-6 border-t border-olive-900/20">
                      {realWorldExample.private.note}
                    </Text>
                  </div>
                </Card>
              </div>

              <Card className="p-8 mt-8 bg-gold-50 border border-gold-300">
                <Heading size="h3" className="mb-4 text-olive-900">
                  The Verdict
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  The SBA loan is $40K cheaper over 5 years (10% difference). But the manufacturing company needed equipment immediately to fulfill customer orders. The extra 6 weeks of waiting for the SBA would have cost them $200K+ in lost revenue. <span className="font-semibold">They chose the private lender, which was the right call for their situation.</span>
                </Text>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Honest Assessment */}
      <Section background="gray">
        <Container>
          <FadeIn className="max-w-3xl mx-auto">
            <Card className="p-12 bg-white border-l-4 border-gold-500">
              <Heading size="h2" className="mb-6 text-olive-900">
                Our Honest Take
              </Heading>
              <div className="space-y-4 text-gray-700">
                <Text>
                  <span className="font-semibold">Always apply for SBA loans first.</span> The rates are cheaper, and there's no downside to trying. The worst they'll say is "no."
                </Text>
                <Text>
                  But if you're in a time crunch, your credit is under 650, or you need flexibility that the SBA can't provide—that's where private lenders excel.
                </Text>
                <Text className="italic font-semibold">
                  The best funding is the one you get in time. Speed matters when your business is on the line.
                </Text>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Why Serve Funding */}
      <Section background="white">
        <Container>
          <FadeIn className="text-center mb-12">
            <Heading size="h2" className="mb-4">
              Why <span className="text-gold-500">Serve Funding</span> for Private Lending
            </Heading>
            <Text className="text-gray-700 max-w-2xl mx-auto">
              We don't just lend money. We help you navigate the full spectrum of funding options.
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Card className="p-8 h-full hover:shadow-xl transition-all">
                <Heading size="h3" className="mb-4 text-olive-900">
                  SBA Expertise
                </Heading>
                <Text className="text-gray-700 mb-6">
                  We specialize in SBA 7(a) loans and have facilitated millions in government-backed financing for established businesses.
                </Text>
                <Link href="/solutions/government-contract-financing">
                  <Button variant="link" className="text-gold-500 hover:text-gold-600 p-0 flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </Button>
                </Link>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 h-full hover:shadow-xl transition-all">
                <Heading size="h3" className="mb-4 text-olive-900">
                  Speed When It Matters
                </Heading>
                <Text className="text-gray-700 mb-6">
                  15+ years of lender relationships mean we can move fast. If the SBA can't, we bridge the gap with private capital.
                </Text>
                <Button variant="link" className="text-gold-500 hover:text-gold-600 p-0 flex items-center gap-2" disabled>
                  Schedule a Call
                </Button>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 h-full hover:shadow-xl transition-all">
                <Heading size="h3" className="mb-4 text-olive-900">
                  Honest Advisory
                </Heading>
                <Text className="text-gray-700 mb-6">
                  We tell you which path is best: SBA, private, or a combination. Our goal is your success, not our fees.
                </Text>
                <Button variant="link" className="text-gold-500 hover:text-gold-600 p-0 flex items-center gap-2" disabled>
                  Talk to Michael
                </Button>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Still Not Sure Which Path to Take?"
        text="Let's talk. Our founder will spend 15 minutes understanding your situation and help you navigate your funding options—whether that's SBA loans, private lending, or a hybrid approach."
        buttonText="Get Expert Guidance"
        source="blog-government-vs-private"
      />

      <IntroCallForm />
    </div>
  )
}
