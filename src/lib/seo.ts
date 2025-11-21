// SEO Meta Tags Configuration
export interface PageMeta {
  title: string
  description: string
  keywords: string
  ogImage?: string
  canonical?: string
  schema?: Record<string, any>
}

export const pageMetaData: Record<string, PageMeta> = {
  home: {
    title: "Serve Funding - Working Capital Solutions for Growing Businesses",
    description: "Creative working capital solutions from $250K to $100MM. Asset-based lending, invoice factoring, equipment leasing, and more for entrepreneurs.",
    keywords: "working capital, business loans, asset-based lending, invoice factoring, equipment leasing, business funding",
    canonical: "https://servefunding.com/"
  },
  solutions: {
    title: "Funding Solutions | Asset-Based Lending, Invoice Factoring & More | Serve Funding",
    description: "Explore 10+ working capital solutions including asset-based lending, invoice factoring, equipment leasing, SBA loans, and government contract financing.",
    keywords: "asset-based lending, invoice factoring, working capital loans, equipment leasing, real estate lending, PO funding, SBA loans",
    canonical: "https://servefunding.com/solutions"
  },
  fundings: {
    title: "Funding Scenarios & Success Stories | Serve Funding",
    description: "Explore real-world funding scenarios and success stories from growing businesses we've helped. Acquisition funding, payroll solutions, and more.",
    keywords: "business funding scenarios, acquisition funding, payroll solutions, cash flow solutions, business growth",
    canonical: "https://servefunding.com/fundings"
  },
  partners: {
    title: "Partner Types | Commercial Bankers, Private Equity & More | Serve Funding",
    description: "Learn about our partner ecosystem including commercial bankers, fractional CFOs, investment bankers, CPAs, private equity firms, and business advisors.",
    keywords: "commercial bankers, fractional CFO, investment bankers, business advisors, private equity, accountants",
    canonical: "https://servefunding.com/partners"
  },
  aboutUs: {
    title: "About Serve Funding | Our Story, Values & Mission",
    description: "Learn about Serve Funding's mission, core values rooted in TRUST, and commitment to supporting growing businesses and communities.",
    keywords: "about us, company mission, core values, entrepreneurship, business advisory",
    canonical: "https://servefunding.com/about-us"
  },
  contactUs: {
    title: "Contact Serve Funding | Get Your Intro Call Scheduled",
    description: "Get in touch with Serve Funding. Schedule your intro call and connect with our team to explore working capital solutions.",
    keywords: "contact us, get started, schedule call, working capital consultation",
    canonical: "https://servefunding.com/contact-us"
  },
  faq: {
    title: "Frequently Asked Questions | Serve Funding",
    description: "Get answers to common questions about working capital, business loans, asset-based lending, and more from Serve Funding.",
    keywords: "FAQ, frequently asked questions, working capital questions, business loans FAQ",
    canonical: "https://servefunding.com/frequently-asked-questions-faq"
  },
  privacy: {
    title: "Privacy Policy | Serve Funding",
    description: "Read Serve Funding's privacy policy to understand how we protect your personal information.",
    keywords: "privacy policy, data protection",
    canonical: "https://servefunding.com/privacy-policy"
  },
  terms: {
    title: "Terms of Service | Serve Funding",
    description: "Review Serve Funding's terms of service.",
    keywords: "terms of service, legal",
    canonical: "https://servefunding.com/terms-of-service"
  }
}

// Schema.org Service Schema for Funding Types
export const generateFundingServiceSchema = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": title,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Serve Funding",
    "url": "https://servefunding.com"
  },
  "areaServed": "US",
  "serviceType": "Working Capital Financing"
})

// FAQPage Schema
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": []
}

// BreadcrumbList Schema
export const generateBreadcrumbs = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
