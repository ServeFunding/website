import type { Metadata } from 'next'
import FAQClient from './faq-client'
import { Section, Container, Heading, Text, FadeIn } from '@/components/ui'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Serve Funding',
  description: 'Answers to your questions about working capital, business loans, asset-based lending, invoice factoring, and alternative financing solutions.',
  keywords: 'FAQ, frequently asked questions, working capital questions, business loans FAQ, serve funding questions',
  openGraph: {
    title: 'Frequently Asked Questions | Serve Funding',
    description: 'Get answers to common questions about working capital, business loans, asset-based lending, and more from Serve Funding.',
    url: 'https://servefunding.com/faq',
    siteName: 'Serve Funding',
    type: 'website',
    images: [
      {
        url: "https://servefunding.com/Logo_Full-color_long_samecolor-1.webp",
        width: 1024,
        height: 728,
        alt: "FAQ - Frequently Asked Questions",
      },
    ],
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
    answer: 'We work with a wide range of industries, including retail, manufacturing, technology, healthcare, government contracting, and more. If you\'re unsure whether your business qualifies, please contact us to discuss your specific needs.'
  },
  {
    question: 'How Can Healthcare Providers Benefit From Business Financing?',
    answer: 'Healthcare providers often face challenges with cash flow due to slow insurance reimbursements, high equipment costs, and staffing needs. Asset-based lending, accounts receivable financing, and working capital loans can help medical practices, clinics, and supply companies bridge gaps and fund growth. Many healthcare organizations use these solutions to manage seasonal fluctuations, fund equipment purchases, or expand capacity.'
  },
  {
    question: 'What Financing Solutions Work Best For Manufacturers?',
    answer: 'Manufacturers typically need capital for equipment purchases, inventory buildup, and working capital during growth phases. Asset-based lending works well for manufacturers because you can leverage equipment, real estate, and inventory. Invoice factoring is ideal if you have strong B2B customers with net-30, net-60, or net-90 payment terms. Many manufacturers also use working capital lines to manage seasonal demand swings.'
  },
  {
    question: 'How Does Government Contracting Financing Work?',
    answer: 'Government contractors face unique challenges: long payment cycles (sometimes 60-90+ days), contract bond requirements, and upfront costs before receiving payment. We offer specialized solutions including contract financing, bid bonds, and accounts receivable financing that align with government payment timelines. This allows contractors to take on larger contracts without straining cash flow.'
  },
  {
    question: 'Can Serve Funding Help If My Industry Has Seasonal Fluctuations?',
    answer: 'Absolutely. Revolving lines of credit and asset-based lending are perfect for seasonal businesses. You can draw capital when you need it (during off-season) and pay it back when cash flows in (during peak season). This flexibility allows you to maintain payroll and inventory without being constrained by temporary cash crunches.'
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
      {/* Schema Markup */}
      <SchemaRenderer schema={faqSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'FAQ' }]} />

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
        </Container>
      </Section>

      <FAQClient faqs={faqs} />
    </>
  )
}
