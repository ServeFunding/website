import type { Metadata } from 'next'
import FAQClient from './faq-client'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Serve Funding',
  description: 'Get answers to common questions about working capital, business loans, asset-based lending, and more from Serve Funding.',
  keywords: 'FAQ, frequently asked questions, working capital questions, business loans FAQ',
  openGraph: {
    title: 'Frequently Asked Questions | Serve Funding',
    description: 'Get answers to common questions about working capital, business loans, asset-based lending, and more from Serve Funding.',
    url: 'https://servefunding.com/frequently-asked-questions-faq',
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
      <FAQClient faqs={faqs} />
    </>
  )
}
