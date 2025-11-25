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
// FUNDING SOLUTIONS - CORE PRODUCT DATA
// ============================================================================

export const fundingSolutions = [
  {
    id: "asset-based-lending",
    title: "Asset-Based Lending",
    category: "Flexible Working Capital",

    // Basic Definition (for "What is..." questions)
    whatIs: "Asset-Based Lending (ABL) is a flexible credit line that lets you borrow against your company's assets like accounts receivable, inventory, equipment, and real estate. Instead of focusing heavily on credit history, ABL lenders evaluate the value of your collateral.",

    // Short Description (for product listing)
    shortDesc: "Leverage business assets such as AR, Inventory, Equipment & CRE for flexible lines of credit that grow with your business.",

    // Full Description (for detailed page)
    fullDesc: "Asset-Based Lending (ABL) allows businesses to leverage their accounts receivable, inventory, equipment, and commercial real estate as collateral to access flexible working capital. These lines of credit are ideal for companies which are going through seasons of rapid growth or experiencing temporary financial challenges. ABL lines are typically used for working capital, expansion, acquisitions, or debt restructuring.",

    // Key Features/Benefits
    features: [
      "Facility amounts from $1MM – $100MM",
      "Revolving credit lines available",
      "70-90% advance on receivables",
      "50-75% advance on inventory",
      "Rates based on SOFR or Prime +1-5%",
      "Suitable for US-based, B2B and B2C"
    ],

    // VERIFY: Actual rates and terms your lenders offer
    ratesAndTerms: {
      minAmount: "$1,000,000",
      maxAmount: "$100,000,000",
      interestRate: "Prime + 1.5% to Prime + 5%",
      annualCostRange: "8-13%",
      facilityFee: "0.5-1% annually",
      monthlyServiceFee: "$500-2,000",
      closingTimeframe: "10-20 business days",
      arAdvanceRate: "70-90% of accounts receivable",
      inventoryAdvanceRate: "50-75% of inventory value"
    },

    // Common Questions
    commonQuestions: [
      {
        q: "What is asset-based lending?",
        a: "Asset-based lending (ABL) is a flexible credit line that lets you borrow against your company's assets like accounts receivable, inventory, equipment, and real estate."
      },
      {
        q: "How much can I borrow with ABL?",
        a: "ABL typically ranges from $1MM to $100MM. Advance rates are: 70-90% of accounts receivable, 50-75% of inventory, and 40-70% of equipment."
      },
      {
        q: "What are typical ABL rates?",
        a: "Interest rates typically range from Prime + 1.5% to Prime + 5% (currently 8-13%). You may also pay an annual facility fee of 0.5-1% and monthly service fees."
      }
    ],

    // Use Cases
    bestFor: [
      "Fast-growing companies with strong assets",
      "Companies with inconsistent cash flow",
      "Acquisitions and expansion",
      "Debt restructuring",
      "Managing cash flow during growth periods"
    ],

    // Who qualifies
    qualificationCriteria: {
      minimumRevenue: "[VERIFY]",
      minimumTimeInBusiness: "[VERIFY]",
      minimumCreditScore: "[VERIFY: Do you have a minimum?]",
      requiredAssets: "AR, Inventory, Equipment, or Real Estate"
    }
  },

  {
    id: "invoice-factoring",
    title: "Invoice (AR) Financing",
    category: "Fast Cash Flow",

    whatIs: "Invoice factoring (also called AR financing) is when you sell your unpaid B2B invoices to a factor for immediate cash. Instead of waiting 30-90 days for customers to pay, you get 75-95% of the invoice value within 24-48 hours.",

    shortDesc: "Turn your open B2B invoices into immediate cash flow to maximize growth and maintain smooth operations.",

    fullDesc: "Invoice financing (also called factoring) turns your open B2B invoices into immediate cash to maximize growth and maintain smooth operations. This solution is ideal for companies with commercial AR to enhance cash flow and reduce credit risk. Factoring suits businesses that sell to both US-based & international commercial customers. It takes longer terms such as net-30, net-60, net-90 + and provides access to the cash trapped in those invoices on day 1!",

    features: [
      "Facility amounts from $250K – $100MM",
      "Revolving lines of credit",
      "Advance rates of 75%–95% on AR",
      "Interest tied to SOFR or Prime + 1-6%",
      "Factor fees from 0.25% to 1% per invoice",
      "Not a loan; no balance sheet impact",
      "Options for single debtor factoring"
    ],

    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$100,000,000",
      advanceRate: "75-95% of invoice value",
      factorFeeRange: "0.25% to 1.5% per invoice",
      annualizedCost: "3-18% depending on factors",
      monthlyServiceFee: "$100-500",
      fundingSpeed: "24-48 hours",
      interestRate: "SOFR or Prime + 1-6%"
    },

    commonQuestions: [
      {
        q: "What is invoice factoring?",
        a: "Invoice factoring is when you sell your unpaid B2B invoices to a factor for immediate cash. You get 75-95% of invoice value within 24-48 hours instead of waiting 30-90 days."
      },
      {
        q: "How quickly can I get cash?",
        a: "This is invoice factoring's biggest advantage: you typically receive 75-95% of invoice value within 24-48 hours of approval. Once established, the process is nearly instantaneous."
      },
      {
        q: "How much does it cost?",
        a: "Factoring fees range from 0.25% to 1.5% per invoice, translating to roughly 3-18% annualized depending on volume, customer credit, and industry."
      }
    ],

    bestFor: [
      "Businesses with long payment terms (net-30, net-60, net-90+)",
      "B2B companies with creditworthy customers",
      "Staffing firms, manufacturers, transporters",
      "Companies needing immediate cash flow",
      "Growth-stage companies"
    ],

    qualificationCriteria: {
      minimumInvoiceVolume: "$250K+",
      customerType: "Established commercial companies (Fortune 500 preferred)",
      creditScoreRequired: "Customer credit matters more than yours",
      invoiceAge: "Must be current invoices (net-30 to net-90)"
    }
  },

  {
    id: "working-capital-loans",
    title: "Working Capital Loans",
    category: "Quick Operations Funding",

    whatIs: "A working capital loan is short-term financing that helps businesses cover day-to-day operational expenses: payroll, inventory, accounts payable, rent, etc.",

    shortDesc: "Secure creative working capital options which close quickly, serving as bridge funding to cover expenses & support growth.",

    fullDesc: "Working capital funding is typically funded on a revenue-based underwriting model. They can be closed quickly – often within days – and provide essential funding for managing day-to-day operating expenses. They are typically used for help to cover payroll, fund additional inventory, address accounts payable, and more. Working capital loans ensure smooth operations amid cash flow challenges stemming from the unexpected to seasonal fluctuations.",

    features: [
      "Loan amounts from $100K to $5MM+",
      "Flexible terms from 6 to 24 months",
      "Approval within 1-3 business days",
      "Monthly factor rates of 1.25-3% +",
      "For B2B and B2C businesses",
      "Fast-growing companies across industries"
    ],

    ratesAndTerms: {
      minAmount: "$100,000",
      maxAmount: "$5,000,000",
      monthlyFactorRate: "1-3%",
      flatInterestRate: "8-25%",
      annualizedCost: "12-36%+",
      approvalTime: "1-3 business days",
      fundingTime: "3-5 business days",
      termLength: "6-24 months"
    },

    commonQuestions: [
      {
        q: "What is a working capital loan?",
        a: "Short-term financing for day-to-day operational expenses: payroll, inventory, accounts payable. Working capital loans focus on revenue and growth potential rather than credit scores."
      },
      {
        q: "How fast can I get approved?",
        a: "Working capital loans are the fastest funding product. Approval typically takes 1-3 business days, with funding within 3-5 business days of approval."
      },
      {
        q: "What does it cost?",
        a: "Monthly factor rate of 1-3% (translates to 12-36%+ annualized) or flat interest rate of 8-25% depending on creditworthiness."
      }
    ],

    bestFor: [
      "Unexpected payroll shortfalls",
      "Seasonal cash flow gaps",
      "Rapid growth cash flow needs",
      "New customer order financing",
      "Accounts payable management",
      "Bridge between funding rounds"
    ],

    qualificationCriteria: {
      minimumMonthlyRevenue: "[VERIFY]",
      minimumTimeInBusiness: "1-2 years",
      creditScoreRange: "500+ (better credit = better rates)",
      businessType: "Any B2B or B2C business"
    }
  },

  // Add remaining 7 solutions with same structure...
  {
    id: "inventory-financing",
    title: "Inventory Financing",
    category: "Asset-Based",
    whatIs: "Inventory financing is a short-term loan option that leverages existing inventory as collateral, offering businesses the liquidity to manage inventory levels.",
    shortDesc: "Access the value tied up in your existing inventory or use specialized financing solutions to purchase new inventory.",
    fullDesc: "Inventory financing is a short-term loan option that leverages existing inventory as collateral, offering businesses the liquidity to manage inventory levels. It's ideal for companies needing to maintain stock to satisfy customer demand while facing interim cash flow issues.",
    features: [
      "Loan amounts from $500K to $20M",
      "Revolving credit lines available",
      "Advance rate up to 85% of liquidation value",
      "Inventory audit / review typically required",
      "Interest based on Prime + 6-12%",
      "Suited for B2B and B2C companies",
      "Great solution for e-commerce firms"
    ],
    ratesAndTerms: {
      minAmount: "$500,000",
      maxAmount: "$20,000,000",
      advanceRate: "Up to 85% of liquidation value",
      interestRate: "Prime + 6-12%",
      closingTime: "15-30 business days"
    },
    commonQuestions: [],
    bestFor: ["E-commerce", "Retail", "Wholesale", "Seasonal inventory needs"],
    qualificationCriteria: {}
  },

  {
    id: "equipment-leasing",
    title: "Equipment Leasing & Loans",
    category: "Asset Acquisition",
    whatIs: "Equipment leasing lets you acquire essential machinery, vehicles, technology without large upfront capital. Monthly payments spread the cost over 3-7 years.",
    shortDesc: "Take advantage of flexible equipment financing & lease options to purchase new equipment or cash-out of existing equipment.",
    fullDesc: "Equipment leasing offers businesses a practical solution to acquire essential machinery, vehicles, and technology without large upfront costs. By opting for a lease or loan specifically for equipment, companies can efficiently manage cash flow while securing the assets necessary for their operations. This financing method is ideal for most industries, including manufacturing, construction, transportation, healthcare, and technology.",
    features: [
      "Loan range from $100K to $50MM+",
      "Terms of 3 to 7 years are most typical",
      "70%–85% advance of liquidation value",
      "Equipment appraisal or audit required",
      "Rates: Prime + 3% to 10%",
      "Applicable for B2B and B2C sectors",
      "Sale-leaseback options for existing equipment"
    ],
    ratesAndTerms: {
      minAmount: "$100,000",
      maxAmount: "$50,000,000",
      termLength: "3-7 years",
      advanceRate: "70-85% of liquidation value",
      interestRate: "Prime + 3% to 10%",
      closingTime: "15-30 business days"
    },
    commonQuestions: [],
    bestFor: ["Manufacturing", "Construction", "Transportation", "Healthcare", "Technology"],
    qualificationCriteria: {}
  },

  {
    id: "purchase-order-funding",
    title: "Purchase Order (PO) Funding",
    category: "Growth Capital",
    whatIs: "PO funding provides financing to fulfill customer purchase orders when you lack working capital for production or purchasing costs.",
    shortDesc: "Maximize growth through funding solutions designed to fulfill new PO's and mobilize contracts without straining cash-flow.",
    fullDesc: "Purchase Order Funding provides businesses with crucial financing to fulfill large orders without the cash to cover initial production or purchase costs. Ideal for companies experiencing cash flow issues, limited traditional financing access, or rapid expansion, this funding bridges gaps and ensures timely order fulfillment.",
    features: [
      "Loan amounts from $250K to $50M",
      "Revolving credit available",
      "Funds 70%-100% of P.O. value",
      "Fees from 1.5% to 3% per 30 days",
      "Supports drop-shipped orders",
      "Includes warehouse and processing orders",
      "For B2B and B2C businesses",
      "Serving USA and Canada"
    ],
    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$50,000,000",
      fundingPercent: "70-100% of PO value",
      costRange: "1.5-3% per 30 days",
      closingTime: "5-10 business days"
    },
    commonQuestions: [],
    bestFor: ["Manufacturers", "Wholesalers", "Distributors", "Companies with large orders"],
    qualificationCriteria: {}
  },

  {
    id: "government-contracts",
    title: "Government Contract Financing",
    category: "Contract-Based",
    whatIs: "Government Contract Financing offers tailored funding to businesses awarded contracts with federal, state, or local agencies.",
    shortDesc: "Access flexible lines of credit designed exclusively to provide financing for federal, state & local government contracts.",
    fullDesc: "Government Contract Financing offers tailored funding to businesses awarded contracts with federal, state, or local agencies. This financial solution ensures seamless cash flow management, covering upfront costs without depleting working capital, thereby enabling contractors to meet obligations and compete effectively in government projects.",
    features: [
      "Financing facilities from $250K to $50MM",
      "Up to 90% advance on contract value",
      "Approval in 5-10 business days",
      "Rates from Prime + 2% to 8%",
      "For prime and subcontractors",
      "Options: factoring, asset-based, credit lines",
      "USA-focused for government contracts"
    ],
    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$50,000,000",
      advanceRate: "Up to 90% of contract value",
      interestRate: "Prime + 2% to 8%",
      approvalTime: "5-10 business days"
    },
    commonQuestions: [],
    bestFor: ["Prime contractors", "Subcontractors", "Federal suppliers", "State/local contractors"],
    qualificationCriteria: {}
  },

  {
    id: "real-estate-lending",
    title: "Real Estate Financing Commercial & Investor",
    category: "Long-Term Financing",
    whatIs: "Real estate lending provides financing solutions for commercial properties including purchases, refinancing and cash-out options.",
    shortDesc: "Receive bridge & long-term financing on commercial properties, including purchases, refinancing and cash-out options.",
    fullDesc: "Our real estate lending options provide financing solutions through banks, credit unions, specialized alternative lenders, private investors, and equity funds. These loans cater to the complex needs of commercial properties and cover all asset classes such as industrial, office, retail, single and multi-family investment portfolios and more. Our clients receive financing in both short-term bridge offerings of 12-36 months as well as permanent commercial loans with 25-30 terms.",
    features: [
      "Loan amounts $500K to $100MM+",
      "25-30 year amortization periods",
      "50-80% Loan-to-Value (LTV)",
      "Rates: 5-10 year Treasury + 3.5% to 7%",
      "Interest-Only Bridge Loan Options",
      "Options available in all 50 states"
    ],
    ratesAndTerms: {
      minAmount: "$500,000",
      maxAmount: "$100,000,000",
      ltvRange: "50-80%",
      amortization: "25-30 years (permanent) or 12-36 months (bridge)",
      interestRate: "Treasury + 3.5% to 7%",
      closingTime: "30-45 business days"
    },
    commonQuestions: [],
    bestFor: ["Commercial property purchases", "Refinancing", "Cash-out refinancing", "Investment portfolios"],
    qualificationCriteria: {}
  },

  {
    id: "unsecured-debt",
    title: "Unsecured & Sub-Debt Loans",
    category: "Alternative Debt",
    whatIs: "Mezzanine Financing or subordinated debt sits behind senior debt in repayment priority. Higher risk means higher interest rates.",
    shortDesc: "Obtain timely working capital without leveraging any collateral or accepting lien filings through unsecured and subordinated debt.",
    fullDesc: "Mezzanine Financing, or subordinated debt, offers a unique funding option that sits behind senior debt in repayment priority during liquidation or bankruptcy. Due to its lower claim on assets, it carries higher risk, requiring lenders to charge relatively higher interest rates.",
    features: [
      "Loan amounts from $250K to $20MM",
      "Terms span 12-60 months",
      "Lends at 1-5 times EBITDA",
      "Interest: Prime + 4% to 8%",
      "Options or warrants may apply",
      "Available in the USA only"
    ],
    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$20,000,000",
      termLength: "12-60 months",
      basedOn: "1-5x EBITDA",
      interestRate: "Prime + 4% to 8%",
      closingTime: "30-45 business days"
    },
    commonQuestions: [],
    bestFor: ["Growth companies", "Acquisitions", "Leveraged buyouts", "Capital-light businesses"],
    qualificationCriteria: {}
  },

  {
    id: "sba-loans",
    title: "Small Business Administration Loans",
    category: "Government-Backed",
    whatIs: "SBA Loans are government-backed loans from banks offering lower interest rates and longer terms than traditional loans.",
    shortDesc: "Tap into lower-interest and longer-term loans and lines of credit in Federal SBA programs for working capital & real estate financing.",
    fullDesc: "SBA Loans foster small business growth by offering government-backed guarantees on loans from banks or credit unions. This support reduces lenders' risk, enabling businesses to secure essential capital. With options like the versatile 7(a) Loan for various needs, the 504 Loan for asset purchases, and the Express Loans for quick funding, SBA Loans cater to diverse business requirements.",
    features: [
      "Loan amounts from $250K to $5MM+",
      "Typical term up to 10 years",
      "Advance rates based on cash flow and assets",
      "Available exclusively in the USA"
    ],
    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$5,000,000",
      termLength: "Up to 10 years",
      interestRate: "Prime + 1-2.75%",
      closingTime: "45-90 business days"
    },
    commonQuestions: [],
    bestFor: ["Established small businesses", "Long-term financing", "Real estate purchases", "Equipment purchases"],
    qualificationCriteria: {}
  }
]

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

export default {
  companyInfo,
  founder,
  coreValues,
  philosophy,
  fundingSolutions,
  serveFundingProcess,
  competitivePositioning,
  qualificationCriteria,
  messagingTemplates,
  verificationChecklist
}
