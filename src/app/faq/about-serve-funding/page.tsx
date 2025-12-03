import type { Metadata } from 'next'
import Link from 'next/link'
import { aboutServeFundingFAQs } from '@/data/faq-data'
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
  title: 'About Serve Funding: Company FAQ | Serve Funding',
  description: 'Learn about Serve Funding, our business financing advisory process, costs, industries served, and what makes us different from traditional lenders.',
  keywords: 'serve funding, business financing advisory, alternative funding, working capital advisor, Atlanta GA',
  openGraph: {
    title: 'About Serve Funding: Company FAQ | Serve Funding',
    description: 'Learn about our business financing advisory, process, costs, and what makes us different from traditional lenders.',
    url: 'https://servefunding.com/faq/about-serve-funding',
    siteName: 'Serve Funding',
    type: 'article',
  },
}

// Schema for FAQ Page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": aboutServeFundingFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  })),
  "about": {
    "@type": "FinancialService",
    "name": "Serve Funding LLC",
    "description": "Business Financing Advisory providing working capital solutions from $250K to $100MM"
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
      "name": "About Serve Funding",
      "item": "https://servefunding.com/faq/about-serve-funding"
    }
  ]
}

export default function AboutServeFundingFAQ() {
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
                About Serve Funding
              </Heading>
              <Text size="lg" className="text-white/90 mb-4">
                Learn about our business financing advisory, process, costs, and what makes us the most trusted alternative funding partner in the Southeast
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
            <span className="text-olive-900 font-medium">About Serve Funding</span>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Text size="lg" className="text-gray-700 leading-relaxed mb-8">
                Serve Funding is a boutique business financing advisory based in Atlanta, GA, specializing in helping growing companies access working capital from $250K to $100MM when traditional banks aren't an option.
              </Text>
              <Text size="lg" className="text-gray-700 leading-relaxed">
                Founded in 2021, we operate on a servant-leadership model, bringing over 15 years of experience in alternative financing to serve as your trusted advisor in navigating the complex world of business capital.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ Articles - Optimized for AI Scraping */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {aboutServeFundingFAQs.map((faq, index) => (
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
                  {index < aboutServeFundingFAQs.length - 1 && (
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
                {aboutServeFundingFAQs.map(faq => (
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
        title="Ready to Work with Serve Funding?"
        text="Connect with our team to discuss your business financing needs and experience the Serve Funding difference."
        buttonText="Contact Us"
        href="/contact-us"
        source="faq-about-serve-funding"
      />
    </div>
  )
}
