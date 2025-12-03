/**
 * SERVE FUNDING - MASTER INFORMATION HUB
 *
 * This file contains all core company information, messaging, and factual data
 * used across the website. Update this file to easily propagate changes everywhere.
 *
 * Last Updated: [DATE]
 * Review Status: PENDING FOUNDER VERIFICATION
 */

// ============================================================================
// COMPANY BASICS - VERIFY WITH FOUNDER
// ============================================================================

export const companyInfo = {
  name: "Serve Funding LLC",
  tagline: "Working Capital Solutions for Growing Businesses",

  description: "A strategic business financing advisory firm empowering growing companies. We lead comprehensive debt capital searches on behalf of our clients' best interests. As a channel-neutral advisor, Serve Funding leverages industry expertise and lender relationships to source and negotiate financing options. Our team brings over 20 years of business consulting in asset-based and cash-flow based lending, international trade risk management, sales & marketing, human capital management and start-up leadership experience. We operate as a servant-leadership-based advisory firm.",

  // VERIFY: Correct address, phone, email
  contact: {
    phone: "+1 770-820-7409",
    email: "michael@servefunding.com",
    address: {
      street: "3101 Cobb Pkwy SE, Ste 124",
      city: "Atlanta",
      state: "GA",
      zip: "30339",
      country: "United States"
    }
  },

  // VERIFY: Founding date and company age
  founded: {
    year: 2021,
    description: "Founded in 2021 on the 40th anniversary of our family's arrival in America"
  },

  // VERIFY: Total employees
  teamSize: "5",

  // VERIFY: Years of experience (founder/team)
  experience: "15",

  // VERIFY: Total capital facilitated to date
  metrics: {
    totalCapitalFacilitated: "[VERIFY: Total $ funded to date]",
    averageDealSize: "[VERIFY: Average deal size]",
    totalClientsServed: "[VERIFY: Number of clients]",
    repeatClientRate: "[VERIFY: % of repeat clients]"
  }
}

// ============================================================================
// FOUNDER/TEAM INFORMATION - VERIFY WITH FOUNDER
// ============================================================================

export const founder = {
  name: "[VERIFY: Founder name]",
  title: "Founder & CEO",
  background: "[VERIFY: Background story - immigration, family business, NeXT, etc.]",
  motivation: "[VERIFY: Why did you start Serve Funding?]",
  personalStory: `
    [VERIFY: Tell the compelling story about your family's journey]
    [VERIFY: Connection to entrepreneurship]
    [VERIFY: Personal experience with funding challenges]
  `,

  education: {
    university: "[VERIFY: Where did you study?]",
    degree: "[VERIFY: What degree?]"
  },

  credentials: {
    certifications: ["[VERIFY: Any professional certifications?]"],
    memberships: ["Association for Corporate Growth", "Secured Finance Network", "IFA"]
  },

  linkedinUrl: "https://www.linkedin.com/in/michael-kodinsky/"
}

// ============================================================================
// CORE VALUES - VERIFY WITH FOUNDER
// ============================================================================

export const coreValues = [
  {
    acronym: "T",
    value: "Transparency",
    description: "We communicate honestly to build a long-term relationship."
  },
  {
    acronym: "R",
    value: "Responsibility",
    description: "We take responsibility to stay accountable to you always."
  },
  {
    acronym: "U",
    value: "Understanding",
    description: "We seek to understand you to meet and exceed your goals."
  },
  {
    acronym: "S",
    value: "Service",
    description: "We are here to always serve you and your best interests."
  },
  {
    acronym: "T",
    value: "Thankfulness",
    description: "We practice authentic gratitude for the opportunity to serve."
  }
]

export const philosophy = {
  headline: "Relationships > Bots",
  description: "Serve Funding provides working capital advisory for business leaders who operate through trust-based and collaborative partnerships.",
  approach: "We take a servant leadership approach with all our clients, lenders and partners to ensure win-win outcomes."
}

// ============================================================================
// PROCESS STEPS - VERIFY WITH FOUNDER
// ============================================================================

export const serveFundingProcess = [
  {
    step: 1,
    name: "Discovery",
    description: "We genuinely care and listen to your needs and objectives so our process stays strategic to your growth goals.",
    details: [
      "Initial consultation to understand your business",
      "Identify your specific capital needs",
      "Discuss timeline and use of funds",
      "Explore which funding types fit best"
    ]
  },
  {
    step: 2,
    name: "Diligence",
    description: "We lead a comprehensive capital search and advise you on your evolving options for short and long-term growth.",
    details: [
      "Gather financial documentation",
      "Analyze your business and capital structure",
      "Identify best-fit lender partners",
      "Present multiple term sheet options",
      "Advise on rates, terms, and structures"
    ]
  },
  {
    step: 3,
    name: "Delivery",
    description: "We take responsibility to guide your lender engagements all the way to a timely closing. We are here to serve you.",
    details: [
      "Manage lender communications",
      "Coordinate underwriting and due diligence",
      "Address any lender questions or concerns",
      "Negotiate terms on your behalf",
      "Guide through closing process"
    ]
  }
]

// ============================================================================
// COMPETITIVE POSITIONING - VERIFY WITH FOUNDER
// ============================================================================

export const competitivePositioning = {
  tagline: "Relationships Over Bots",

  differentiators: [
    {
      label: "Transparent",
      description: "[VERIFY: Why is Serve Funding more transparent than competitors?]"
    },
    {
      label: "Timely",
      description: "[VERIFY: Why is Serve Funding faster than competitors?]"
    },
    {
      label: "Trusted",
      description: "[VERIFY: Why do lenders and clients trust Serve Funding?]"
    }
  ],

  vsTraditionalBanks: {
    speed: "[VERIFY: How much faster than banks?]",
    flexibility: "[VERIFY: How much more flexible?]",
    creditRequirements: "[VERIFY: Lower credit requirements?]",
    documentation: "[VERIFY: Less documentation required?]"
  },

  vsOnlineLenders: {
    personalService: "[VERIFY: How is personal service different?]",
    rates: "[VERIFY: How do your rates compare?]",
    customerRelationships: "[VERIFY: How do you protect customer relationships?]",
    flexibility: "[VERIFY: More flexible terms?]"
  },

  vsPeerAdvisors: {
    experience: "[VERIFY: Years of experience advantage?]",
    lenderNetwork: "[VERIFY: Size and quality of lender network?]",
    successRate: "[VERIFY: % of deals that successfully fund?]",
    clientSatisfaction: "[VERIFY: Client satisfaction rate/NPS?]"
  }
}

// ============================================================================
// QUALIFICATION CRITERIA - VERIFY WITH LENDER PARTNERS
// ============================================================================

export const qualificationCriteria = {
  general: {
    minimumTimeInBusiness: "[VERIFY: months/years]",
    minimumMonthlyRevenue: "[VERIFY: amount]",
    minimumAnnualRevenue: "[VERIFY: amount]",
    creditScoreRange: {
      ideal: "[VERIFY: 700+?]",
      acceptable: "[VERIFY: 600+?]",
      minimum: "[VERIFY: 500+?]"
    }
  },

  byProductType: {
    assetBasedLending: {
      minimumAssets: "[VERIFY]",
      assetTypes: "AR, Inventory, Equipment, Real Estate"
    },
    invoiceFactoring: {
      minimumInvoiceVolume: "$250K+",
      customerRequirement: "Established commercial customers"
    },
    workingCapitalLoan: {
      minimumRevenue: "[VERIFY]",
      minimumTimeInBusiness: "[VERIFY]"
    }
  },

  disqualifiers: [
    "[VERIFY: What automatically disqualifies someone?]",
    "[VERIFY: Do you work with tax liens?]",
    "[VERIFY: Do you work with judgments?]",
    "[VERIFY: Do you work with bankruptcies?]",
    "[VERIFY: Industry restrictions?]"
  ]
}

// ============================================================================
// MESSAGING TEMPLATES - USE IN FAQ/CONTENT
// ============================================================================

export const messagingTemplates = {
  rejectionNarrative: {
    headline: "Turned Down by Your Bank? We Can Help.",
    message: "[VERIFY: Custom message about bank rejection handling]"
  },

  speedNarrative: {
    headline: "The Fastest Working Capital Solutions",
    message: "[VERIFY: Why is speed important to your clients?]"
  },

  relationshipNarrative: {
    headline: "Relationships Over Transactions",
    message: "[VERIFY: How do you build relationships differently?]"
  },

  trustNarrative: {
    headline: "Built on Trust (TRUST Value System)",
    message: "Transparency. Responsibility. Understanding. Service. Thankfulness."
  }
}

// ============================================================================
// VERIFICATION CHECKLIST
// ============================================================================

export const verificationChecklist = {
  companyBasics: [
    "Phone number and email verified",
    "Address confirmed",
    "Founding date accurate",
    "Number of employees current"
  ],

  founderInfo: [
    "Full name and correct spelling",
    "Background story accurate",
    "Education/credentials verified",
    "Personal motivation documented",
    "LinkedIn URL correct"
  ],

  productData: [
    "All rates and terms current (VERIFY quarterly)",
    "Minimum/maximum amounts accurate",
    "Closing timelines realistic",
    "Advance rates correct"
  ],

  competitivePositioning: [
    "Differentiators validated against competitors",
    "Customer testimonials obtained",
    "Success metrics documented",
    "NPS or satisfaction rating measured"
  ],

  qualifications: [
    "Minimum revenue requirements confirmed",
    "Credit score ranges validated",
    "Time-in-business requirements confirmed",
    "Disqualifier list comprehensive"
  ]
}

// ============================================================================
// TOP-LEVEL FAQ FOR HOMEPAGE - AIEO OPTIMIZED
// ============================================================================

export const topLevelFAQs = [
  {
    q: "What is Serve Funding?",
    a: "Serve Funding is a Business Financing Advisory that provides strategic guidance and access to curated relationships with top lenders for all forms of business financing needs, ranging from $250K to $100MM. We're not a lender—we're your advocate."
  },
  {
    q: "What is working capital?",
    a: "Working capital is the funds available to meet day-to-day operational needs, calculated as current assets minus current liabilities. When businesses seek 'working capital,' they're looking for additional cash through loans or lines of credit to grow without running out of money."
  },
  {
    q: "How much does Serve Funding cost?",
    a: "Serve Funding operates on a success-fee basis of 1-2% of the funded amount, paid only when you successfully receive financing. No upfront costs—we only succeed when you do."
  },
  {
    q: "Can you help if my bank denied me?",
    a: "Yes, absolutely. Bankers are our primary referral sources because we specialize in non-bank financing options. We guide you through the broader world of alternative credit products including asset-based lending, invoice factoring, and revenue-based financing."
  },
  {
    q: "How long does the funding process take?",
    a: "Timeline varies by product: working capital loans can fund in 1-5 business days, standard products take 1-3 weeks, and complex structures may take 1-3 months. We've closed emergency deals in as little as 1-2 business days."
  },
  {
    q: "What industries do you serve?",
    a: "We serve a broad spectrum of industries with specialization in manufacturing, wholesale and distribution, B2B business services, e-commerce, consumer packaged goods, government contractors, and construction. Based in Atlanta, GA, we primarily serve the Southeast United States."
  }
]

export default {
  companyInfo,
  founder,
  coreValues,
  philosophy,
  serveFundingProcess,
  competitivePositioning,
  qualificationCriteria,
  messagingTemplates,
  verificationChecklist,
  topLevelFAQs
}
