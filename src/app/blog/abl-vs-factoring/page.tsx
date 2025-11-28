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
import Link from 'next/link'

export const metadata = {
  title: "Asset-Based Lending vs. Invoice Factoring vs. Bank Lines: 2025 Comparison",
  description: "Compare asset-based lending, invoice factoring, and traditional bank lines of credit. See which funding solution fits your business needs.",
  openGraph: {
    title: "Asset-Based Lending vs. Invoice Factoring vs. Bank Lines: 2025 Comparison",
    description: "Compare asset-based lending, invoice factoring, and traditional bank lines of credit. See which funding solution fits your business needs.",
    url: "https://servefunding.com/comparison/abl-vs-factoring",
  },
}

const comparisonData = [
  {
    feature: "What You Need",
    abl: "Balance sheet assets (AR, inventory, equipment)",
    factoring: "B2B unpaid invoices",
    bank: "Excellent credit + personal guarantee"
  },
  {
    feature: "Amount Range",
    abl: "$1MM - $100MM",
    factoring: "$25K - $500K+",
    bank: "$50K - $5MM"
  },
  {
    feature: "Interest Rate/Fee",
    abl: "Prime + 1.5-5% (8-13% annual)",
    factoring: "0.25-1.5% per invoice",
    bank: "Prime + 0-3% (usually)"
  },
  {
    feature: "Funding Speed",
    abl: "10-20 business days",
    factoring: "24-48 hours",
    bank: "30-60 days"
  },
  {
    feature: "Advance Rate",
    abl: "70-90% (asset dependent)",
    factoring: "75-95%",
    bank: "100% (if approved)"
  },
  {
    feature: "Best For",
    abl: "Growing companies with strong assets",
    factoring: "Service companies with B2B customers",
    bank: "Established companies with pristine credit"
  },
  {
    feature: "Big Downside",
    abl: "More expensive than bank loans",
    factoring: "Higher cost than ABL",
    bank: "Slow, stringent requirements"
  }
]

const whyServes = [
  {
    title: "ABL Expertise",
    desc: "We custom-structure ABL facilities instead of offering one-size-fits-all products. Our founder has facilitated $150MM+ in ABL for manufacturing, distribution, and staffing companies.",
    link: "/solutions/asset-based-lending"
  },
  {
    title: "Factoring Solutions",
    desc: "Our factoring fees (0.25-1.5%) are competitive, and we don't require personal guarantees. We work with best-in-class factors for transparent, fast closings.",
    link: "/solutions/invoice-factoring"
  },
  {
    title: "Honest Advisory",
    desc: "We tell you which option is cheaper long-term. If you have bank access at Prime + 2%, factoring may not be worth it. We advise on the full picture."
  }
]

export default function ComparisonPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <BlogHeroFadeIn
        title="Asset-Based Lending vs. Invoice Factoring vs. Bank Lines"
        subtitle="A 2025 comparison guide to help you choose the right working capital solution for your business. Understanding the differences, costs, and best use cases."
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
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Asset-Based Lending</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Invoice Factoring</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Bank Line of Credit</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-700">{row.abl}</td>
                      <td className="px-6 py-4 text-gray-700">{row.factoring}</td>
                      <td className="px-6 py-4 text-gray-700">{row.bank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* When to Choose Each */}
      <Section background="gray">
        <Container>
          <FadeIn className="mb-12">
            <Heading size="h2" className="mb-8 text-center">
              When to Choose <span className="text-gold-500">Each Option</span>
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Asset-Based Lending */}
            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h3" className="mb-6 text-olive-900">
                  Asset-Based Lending
                </Heading>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You have strong assets but imperfect credit</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You need $1MM+ in working capital</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You want custom structures tailored to your business</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 text-red-600 flex items-center justify-center">✕</div>
                    <Text className="text-gray-700">Don't use if your business has minimal assets</Text>
                  </div>
                </div>
                <Link href="/solutions/asset-based-lending">
                  <Button variant="default" className="w-full">
                    Learn More About ABL
                  </Button>
                </Link>
              </Card>
            </StaggerItem>

            {/* Invoice Factoring */}
            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h3" className="mb-6 text-olive-900">
                  Invoice Factoring
                </Heading>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You need cash within 24-48 hours</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">Your customers are creditworthy B2B accounts</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You want lower personal guarantee requirements</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 text-red-600 flex items-center justify-center">✕</div>
                    <Text className="text-gray-700">Don't use if you have mostly cash sales</Text>
                  </div>
                </div>
                <Link href="/solutions/invoice-factoring">
                  <Button variant="default" className="w-full">
                    Learn More About Factoring
                  </Button>
                </Link>
              </Card>
            </StaggerItem>

            {/* Bank Line of Credit */}
            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h3" className="mb-6 text-olive-900">
                  Bank Line of Credit
                </Heading>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You have perfect credit and 5+ years history</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You want the cheapest option long-term</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                    <Text className="text-gray-700">You can wait 30-60 days for approval</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 text-red-600 flex items-center justify-center">✕</div>
                    <Text className="text-gray-700">Don't use if you need capital in &lt;30 days</Text>
                  </div>
                </div>
                <Button variant="default" className="w-full" disabled>
                  Try Your Bank First
                </Button>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </Section>

      {/* Honest Assessment Section */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto">
            <Card className="p-12 border-2 border-gold-500 bg-gold-50">
              <Heading size="h2" className="mb-6 text-olive-900">
                Honest Assessment: When Factoring Isn't Worth It
              </Heading>
              <Text className="text-gray-700 leading-relaxed mb-6">
                If you have access to a bank line of credit at Prime + 2%, invoice factoring (at 0.5% per invoice monthly = 6% annual) is more expensive and likely not worth it.
              </Text>
              <Text className="text-gray-700 leading-relaxed font-semibold italic">
                Our advice: Always try the bank first. If they say no, that's where we bridge the gap.
              </Text>
              <Text className="text-gray-600 text-sm mt-6">
                This honesty builds trust. Algorithms detect bias. We'd rather be your honest advisor than just another lender chasing fees.
              </Text>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Why Serve Funding Wins */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-12">
            <Heading size="h2" className="mb-4">
              Why <span className="text-gold-500">Serve Funding</span> Stands Out
            </Heading>
            <Text className="text-gray-700 max-w-2xl mx-auto">
              15+ years of funding expertise. $150MM+ facilitated. Real answers, not sales pitches.
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyServes.map((item, index) => (
              <StaggerItem key={index}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300">
                  <Heading size="h3" className="mb-4 text-olive-900">
                    {item.title}
                  </Heading>
                  <Text className="text-gray-700 leading-relaxed mb-6">
                    {item.desc}
                  </Text>
                  {item.link && (
                    <Link href={item.link}>
                      <Button variant="link" className="text-gold-500 hover:text-gold-600 p-0 flex items-center gap-2">
                        Learn More <ArrowRight size={16} />
                      </Button>
                    </Link>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Not Sure Which Option Is Right for You?"
        text="Let's talk. Our founder will spend 15 minutes understanding your situation and recommend the best path forward—whether that's with us or elsewhere."
        buttonText="Schedule a Free Consultation"
        source="blog-abl-vs-factoring"
      />

      <CTA
        title="Ready to explore your financing options?"
        text="Let's discuss how we can help your business grow with the right working capital solution."
        buttonText="Start Your Consultation"
        source="blog-abl-factoring"
      />
    </div>
  )
}
