import type { Metadata } from 'next'
import Link from 'next/link'
import FAQClient from './faq-client'
import { faqCategories } from '@/data/faq-data'
import { Section, Container, Heading, Text, FadeIn, StaggerContainer, StaggerItem, Card } from '@/components/ui'
import { COLORS as BRAND_COLORS } from '@/lib/colors'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Serve Funding',
  description: 'Get answers to common questions about working capital, business loans, asset-based lending, and more from Serve Funding. Comprehensive guides on working capital and our advisory process.',
  keywords: 'FAQ, frequently asked questions, working capital questions, business loans FAQ, serve funding questions',
  openGraph: {
    title: 'Frequently Asked Questions | Serve Funding',
    description: 'Get answers to common questions about working capital, business loans, asset-based lending, and more from Serve Funding.',
    url: 'https://servefunding.com/faq',
    siteName: 'Serve Funding',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What Is Serve Funding?',
    answer: 'Serve Funding is a boutique working capital advisory that helps businesses secure financing solutions when traditional banks aren\'t an option. We connect business owners with lenders offering loans, lines of credit, equipment leasing, and other financial products tailored to their needs.'
  },
  {
    question: 'How Does Serve Funding Work?',
    answer: 'We work with trusted referral partners, such as bankers and financial advisors, to receive leads for businesses in need of financing. Our process involves qualifying the lead, gathering the necessary documentation, and connecting the business with suitable funding options. We guide you through every step of the process to ensure a smooth and transparent experience.'
  },
  {
    question: 'What Types Of Funding Solutions Do You Offer?',
    answer: 'Serve Funding offers a variety of funding solutions, including: Loans and lines of credit, Asset-based financing, Equipment leasing, Contract and purchase order funding, MCA (Merchant Cash Advance) consolidations, and Equity and partner buyouts.'
  },
  {
    question: 'What Information Do I Need To Provide To Get Started?',
    answer: 'To begin, we will request some basic information about your business, including financial statements, business plans, and identification documents. This helps us assess your eligibility and find the best financing options available.'
  },
  {
    question: 'How Long Does The Funding Process Take?',
    answer: 'The timeline varies depending on the type of funding and the completeness of the information provided. Typically, it can take anywhere from a few days to a couple of weeks. We work diligently to expedite the process and keep you informed at every stage.'
  },
  {
    question: 'What If I\'ve Been Denied Funding By A Bank?',
    answer: 'Serve Funding specializes in helping businesses that have been turned down by traditional banks. We have access to alternative lenders and creative financing solutions designed to meet unique business needs, even if you\'ve been previously denied.'
  },
  {
    question: 'Is My Information Kept Confidential?',
    answer: 'Yes, we take your privacy seriously. All information you provide is kept confidential and is only shared with trusted partners and lenders as necessary to facilitate your funding. Please review our Privacy Policy for more details on how we protect your data.'
  },
  {
    question: 'How Does Serve Funding Ensure A Fair Process?',
    answer: 'We operate on a foundation of transparency, integrity, and service. Our goal is to find the best financing solution that aligns with your business goals. We communicate openly about all options, fees, and potential outcomes, ensuring you have the information needed to make informed decisions.'
  },
  {
    question: 'Can Serve Funding Help With Ongoing Financing Needs?',
    answer: 'Absolutely! We aim to build long-term relationships with our clients. If your business requires additional funding in the future or if your needs evolve, we are here to help you navigate those changes and find the right financial solutions.'
  },
  {
    question: 'What Industries Does Serve Funding Work With?',
    answer: 'We work with a wide range of industries, including retail, manufacturing, technology, healthcare, and more. If you\'re unsure whether your business qualifies, please contact us to discuss your specific needs.'
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Topic Hubs Section - Above the fold */}
      <Section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <Heading size="h1" className="mb-4 text-olive-900">
              Frequently Asked Questions
            </Heading>
            <Text size="lg" className="text-gray-700 max-w-3xl mx-auto">
              Explore our comprehensive guides or browse common questions below
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Working Capital Topic Hub */}
            <StaggerItem>
              <Link href="/faq/working-capital" className="group block h-full">
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-gold-500">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 p-3 bg-olive-900/10 rounded-lg w-fit">
                      <svg className="w-8 h-8 text-olive-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors">
                      Working Capital Guide
                    </Heading>
                    <Text className="text-gray-700 mb-4 flex-grow">
                      Complete guide covering definitions, costs, qualification, use cases, and when to seek working capital financing for your business.
                    </Text>
                    <div className="flex items-center text-gold-500 font-medium group-hover:gap-2 transition-all">
                      <span>Read Full Guide</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            </StaggerItem>

            {/* About Serve Funding Topic Hub */}
            <StaggerItem>
              <Link href="/faq/about-serve-funding" className="group block h-full">
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-gold-500">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 p-3 bg-olive-900/10 rounded-lg w-fit">
                      <svg className="w-8 h-8 text-olive-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors">
                      About Serve Funding
                    </Heading>
                    <Text className="text-gray-700 mb-4 flex-grow">
                      Learn about our business financing advisory, process, costs, industries served, and what makes us different from traditional lenders.
                    </Text>
                    <div className="flex items-center text-gold-500 font-medium group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          </StaggerContainer>

          <div className="text-center">
            <Text className="text-gray-600 mb-4">Or browse common questions below</Text>
            <svg className="w-6 h-6 mx-auto text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </Container>
      </Section>

      <FAQClient faqs={faqs} />
    </>
  )
}
