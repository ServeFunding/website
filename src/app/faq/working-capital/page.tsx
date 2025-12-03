import type { Metadata } from 'next'
import Link from 'next/link'
import { workingCapitalFAQs } from '@/data/faq-data'
import {
  Section,
  Container,
  Heading,
  Text,
  FadeIn
} from '@/components/ui'
import { CTA } from '@/components/cta'
import { COLORS as BRAND_COLORS } from '@/lib/colors'

export const metadata: Metadata = {
  title: 'Working Capital: Complete Guide | Serve Funding',
  description: 'Everything you need to know about working capital loans: definitions, costs, qualification, use cases, and when to seek financing for your business.',
  keywords: 'working capital, working capital loans, MCA, merchant cash advance, business loans, payroll funding, seasonal financing',
  openGraph: {
    title: 'Working Capital: Complete Guide | Serve Funding',
    description: 'Everything you need to know about working capital loans: definitions, costs, qualification, use cases, and when to seek financing.',
    url: 'https://servefunding.com/faq/working-capital',
    siteName: 'Serve Funding',
    type: 'article',
  },
}

// Schema for FAQ Page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": workingCapitalFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  })),
  "about": {
    "@type": "FinancialProduct",
    "name": "Working Capital Loans",
    "description": "Short-term financing for day-to-day business operations"
  }
}

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://servefunding.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://servefunding.com/faq"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Working Capital",
      "item": "https://servefunding.com/faq/working-capital"
    }
  ]
}

export default function WorkingCapitalFAQ() {
  const lastUpdated = '2025-12-03'

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
            <FadeIn className="text-white max-w-3xl">
              <Heading size="h1" color="white" className="mb-6">
                Working Capital: Complete Guide
              </Heading>
              <Text size="lg" className="text-white/90 mb-4">
                Everything you need to know about working capital loans, costs, qualification, and when to seek financing
              </Text>
              <Text size="sm" className="text-white/70">
                Last Updated: {lastUpdated}
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Breadcrumb */}
      <Section className="py-4 bg-gray-50">
        <Container>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-olive-900">Home</Link>
            <span>/</span>
            <Link href="/faq" className="hover:text-olive-900">FAQ</Link>
            <span>/</span>
            <span className="text-olive-900 font-medium">Working Capital</span>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Text size="lg" className="text-gray-700 leading-relaxed mb-8">
                Working capital is one of the most critical financial concepts for business owners. Whether you're managing cash flow gaps, funding rapid growth, or preparing for seasonal fluctuations, understanding working capital and working capital loans is essential for sustainable business operations.
              </Text>
              <Text size="lg" className="text-gray-700 leading-relaxed">
                This comprehensive guide answers the most common questions about working capital, helping you make informed decisions about financing your business.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ Articles - Optimized for AI Scraping */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {workingCapitalFAQs.map((faq, index) => (
              <article key={faq.id} id={faq.id} className="scroll-mt-24">
                <FadeIn>
                  {/* Question as H2 - Critical for AI */}
                  <Heading size="h2" className="mb-6 text-olive-900">
                    {faq.q}
                  </Heading>

                  {/* Answer - Concise 3-5 sentence format */}
                  <div className="prose prose-lg max-w-none">
                    <Text className="text-gray-700 leading-relaxed">
                      {faq.a}
                    </Text>
                  </div>

                  {/* Divider between questions */}
                  {index < workingCapitalFAQs.length - 1 && (
                    <hr className="mt-16 border-gray-300" />
                  )}
                </FadeIn>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Navigation */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Heading size="h3" className="mb-8 text-center text-olive-900">
                Jump to a Question
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workingCapitalFAQs.map(faq => (
                  <Link
                    key={faq.id}
                    href={`#${faq.id}`}
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gold-500 hover:shadow-md transition-all duration-300"
                  >
                    <Text className="text-olive-900 font-medium">
                      {faq.q}
                    </Text>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        title="Need Working Capital for Your Business?"
        text="Connect with our team to discuss your working capital needs and explore financing options tailored to your business."
        buttonText="Get Started"
        href="/contact-us"
        source="faq-working-capital"
      />
    </div>
  )
}
