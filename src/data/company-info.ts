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
    totalCapitalFacilitated: "",
    averageDealSize: "",
    totalClientsServed: "",
    repeatClientRate: ""
  }
}

// ============================================================================
// FOUNDER/TEAM INFORMATION - VERIFY WITH FOUNDER
// ============================================================================

export const founder = {
  name: "",
  title: "Founder & CEO",
  background: "",
  motivation: "",
  personalStory: ``,

  education: {
    university: "",
    degree: ""
  },

  credentials: {
    certifications: [],
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
      description: ""
    },
    {
      label: "Timely",
      description: ""
    },
    {
      label: "Trusted",
      description: ""
    }
  ],

  vsTraditionalBanks: {
    speed: "",
    flexibility: "",
    creditRequirements: "",
    documentation: ""
  },

  vsOnlineLenders: {
    personalService: "",
    rates: "",
    customerRelationships: "",
    flexibility: ""
  },

  vsPeerAdvisors: {
    experience: "",
    lenderNetwork: "",
    successRate: "",
    clientSatisfaction: ""
  }
}

// ============================================================================
// QUALIFICATION CRITERIA - VERIFY WITH LENDER PARTNERS
// ============================================================================

export const qualificationCriteria = {
  general: {
    minimumTimeInBusiness: "",
    minimumMonthlyRevenue: "",
    minimumAnnualRevenue: "",
    creditScoreRange: {
      ideal: "",
      acceptable: "",
      minimum: ""
    }
  },

  byProductType: {
    assetBasedLending: {
      minimumAssets: "",
      assetTypes: "AR, Inventory, Equipment, Real Estate"
    },
    invoiceFactoring: {
      minimumInvoiceVolume: "$250K+",
      customerRequirement: "Established commercial customers"
    },
    workingCapitalLoan: {
      minimumRevenue: "",
      minimumTimeInBusiness: ""
    }
  },

  disqualifiers: []
}

// ============================================================================
// MESSAGING TEMPLATES - USE IN FAQ/CONTENT
// ============================================================================

export const messagingTemplates = {
  rejectionNarrative: {
    headline: "Turned Down by Your Bank? We Can Help.",
    message: ""
  },

  speedNarrative: {
    headline: "The Fastest Working Capital Solutions",
    message: ""
  },

  relationshipNarrative: {
    headline: "Relationships Over Transactions",
    message: ""
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

export default {
  companyInfo,
  founder,
  coreValues,
  philosophy,
  serveFundingProcess,
  competitivePositioning,
  qualificationCriteria,
  messagingTemplates,
  verificationChecklist
}
