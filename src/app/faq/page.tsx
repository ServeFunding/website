import type { Metadata } from 'next'
import FAQClient from './faq-client'
import { Section, Container, Heading, Text, FadeIn } from '@/components/ui'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Working Capital FAQ | Answers When Banks Decline Your Loan',
  description: 'Get quick answers to funding questions. How fast can you approve? What if banks declined me? How does invoice factoring work? Find answers here.',
  keywords: 'FAQ, working capital questions, when banks say no, invoice factoring, asset-based lending, business funding FAQ',
  openGraph: {
    title: 'Working Capital FAQ | Answers When Banks Decline Your Loan',
    description: 'Questions about working capital, alternative lending, or how fast you can get approved? See real answers to common funding questions from Serve Funding.',
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
    answer: 'Serve Funding is a channel-neutral business financing advisory that connects businesses with 30+ alternative lenders for working capital from $250K to $100MM. Unlike a lender or broker tied to one product, we act as your advocate — comparing options across multiple underwriting styles to find the best fit when traditional banks decline.'
  },
  {
    question: 'How Does Serve Funding Work?',
    answer: 'Serve Funding follows a three-step process: Discovery (understanding your needs), Diligence (searching across 30+ lenders for the best terms), and Delivery (managing closing and negotiating on your behalf). Most engagements begin through referrals from bankers, CPAs, or financial advisors. You work directly with experienced advisors throughout — no handoffs to junior staff.'
  },
  {
    question: 'What Types Of Funding Solutions Do You Offer?',
    answer: 'Serve Funding offers 12 funding solutions: working capital loans, invoice factoring, asset-based lending, equipment leasing, inventory financing, PO funding, government contract financing, real estate lending, bridge capital, SBA loans, subordinated debt, and MCA consolidation. Deal sizes range from $250K to $100MM with funding timelines from 3 days to 8 weeks depending on the product.'
  },
  {
    question: 'What Information Do I Need To Provide To Get Started?',
    answer: 'Most solutions require 3-6 months of bank statements, a recent accounts receivable aging report, and basic financials (P&L, balance sheet). Some products like invoice factoring focus primarily on your invoices and customer creditworthiness rather than tax returns. Working capital loans may only need bank statements and a simple application.'
  },
  {
    question: 'How Long Does The Funding Process Take?',
    answer: 'Funding speed depends on the product: working capital loans close in 2-10 business days, invoice factoring in 3-5 days (after initial 2-3 week setup), asset-based lending in 4-8 weeks, and emergency payroll financing in 24-72 hours. Serve Funding has closed deals in as little as 3 business days when time was critical.'
  },
  {
    question: 'What If I\'ve Been Denied Funding By A Bank?',
    answer: 'Bank declines are the most common starting point for Serve Funding clients — bankers are our primary referral source. Alternative lenders evaluate businesses differently: invoice factoring looks at your customers\' credit (not yours), asset-based lending focuses on collateral value, and working capital loans weigh revenue trajectory over credit scores.'
  },
  {
    question: 'Is My Information Kept Confidential?',
    answer: 'Yes, all information is kept strictly confidential and shared only with lenders actively underwriting your deal. We operate under NDA with all lender partners. Review our Privacy Policy for full details on data protection practices.'
  },
  {
    question: 'How Does Serve Funding Ensure A Fair Process?',
    answer: 'Serve Funding operates on a success-fee model (1-2% of funded amount, paid only at closing), which aligns our incentives with yours. As a channel-neutral advisor with 30+ lender relationships, we have no incentive to push one product over another. We disclose all fees, rates, and terms upfront so you can make informed comparisons.'
  },
  {
    question: 'Can Serve Funding Help With Ongoing Financing Needs?',
    answer: 'Yes — 65% of Serve Funding clients return for additional financing as their business grows. We build long-term advisory relationships, not one-time transactions. As your capital needs evolve (growth, acquisitions, seasonal cycles), we adjust your capital structure across our lender network.'
  },
  {
    question: 'What Industries Does Serve Funding Work With?',
    answer: 'Serve Funding works with manufacturing, construction, staffing, healthcare, CPG, e-commerce, government contractors, professional services, retail, hospitality, agriculture, and transportation. Based in Atlanta, we primarily serve the Southeast but work with clients nationwide.'
  },
  {
    question: 'How Can Healthcare Providers Benefit From Business Financing?',
    answer: 'Healthcare providers can use accounts receivable financing to bridge 60-90 day insurance reimbursement cycles, getting 75-95% of invoice value within 24-48 hours. Asset-based lending and working capital loans also help medical practices fund equipment purchases, cover staffing needs, and manage seasonal patient volume fluctuations. One healthcare supply manufacturer secured $1MM at Prime + 2% through Serve Funding.'
  },
  {
    question: 'What Financing Solutions Work Best For Manufacturers?',
    answer: 'Asset-based lending is the best fit for most manufacturers because it leverages existing equipment, inventory, and accounts receivable — facilities from $250K to $25M at Prime + 1-5%. Invoice factoring works well for manufacturers with strong B2B customers on net-30 to net-90 terms. Working capital lines help manage seasonal demand swings and raw material purchases.'
  },
  {
    question: 'How Does Government Contracting Financing Work?',
    answer: 'Government contract financing covers your upfront costs (materials, payroll, subcontractors) during 30-90+ day government payment cycles, then repays when the government pays. Solutions include contract financing, accounts receivable factoring against government invoices, and bid bonds. Subcontractors also qualify. Serve Funding has closed government contract deals in as few as 20 business days.'
  },
  {
    question: 'Can Serve Funding Help If My Industry Has Seasonal Fluctuations?',
    answer: 'Yes — seasonal businesses are a specialty. Revolving lines of credit and asset-based lending let you draw capital during off-season and repay when peak revenue arrives. We structure payment schedules around your actual cash flow cycle, not a standard amortization table. Prepayment options let you exit debt quickly once peak season revenue hits.'
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
            <Text size="2xl" className="text-gray-700 max-w-3xl mx-auto">
              Explore our comprehensive guides or browse common questions below
            </Text>
            <Text size="sm" className="text-gray-400 mt-3">
              Last updated: April 2, 2026
            </Text>
          </FadeIn>
        </Container>
      </Section>

      <FAQClient faqs={faqs} />
    </>
  )
}
