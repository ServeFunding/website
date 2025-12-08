/**
 * SERVE FUNDING - SOLUTIONS DATA
 *
 * All funding solution/product information
 * Last Updated: 2025-12-07
 */

import type { FundingSolution } from '@/types/solutions'

export const fundingSolutions: FundingSolution[] = [
  {
    id: "debt-refinance",
    title: "Consolidation & Recapitalization",
    image: "/solutions/Asset Based Lending.webp",
    category: "Strategic Restructuring",

    whatIs: "Debt refinancing lets you replace high-cost debt (like merchant cash advances, expensive term loans, or multiple loan payments) with a single, more affordable financing solution. It's designed to free up cash flow, reduce monthly payments, and give your business breathing room to grow.",

    shortDesc: "Refinance high-cost debt and consolidate multiple loans into one strategic solution. Escape MCA debt traps and reduce monthly payments.",

    fullDesc: "When your business is burdened by high-cost debt—whether it's merchant cash advances (MCAs), expensive equipment loans, or overlapping credit lines—debt refinancing provides a path forward. We help you consolidate and restructure debt into more manageable terms, often reducing your total cost of capital while freeing up working capital for growth. This solution is ideal for businesses trapped in daily or weekly MCA payments, facing renewal at high rates, or simply wanting to clean up their balance sheet.",

    features: [
      "Consolidate multiple loans into one payment",
      "Refinance MCA debt with better terms",
      "Reduce monthly payments by 30-50%",
      "Cash out additional working capital",
      "Options from $250K to $10MM+",
      "Close in 10-20 business days",
      "Asset-based and cash-flow options available"
    ],

    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$10,000,000",
      interestRate: "Prime + 3% to Prime + 8%",
      annualCostRange: "10-16%",
      closingTimeframe: "10-20 business days",
      typicalSavings: "30-50% reduction in monthly payments"
    },

    commonQuestions: [
      {
        id: "what-is-debt-refinance",
        q: "What is debt refinancing for businesses?",
        a: "Debt refinancing replaces your existing high-cost debt with new financing at better terms. It's commonly used to escape MCA debt traps, consolidate multiple loans, or simply reduce your total cost of borrowing."
      },
      {
        id: "can-refinance-mca",
        q: "Can I refinance merchant cash advance debt?",
        a: "Yes. MCA refinancing is one of our most common solutions. We help businesses trapped in daily or weekly MCA payments consolidate into monthly term loans or lines of credit with significantly lower costs."
      },
      {
        id: "how-much-save-refinancing",
        q: "How much can I save by refinancing?",
        a: "Most clients reduce monthly payments by 30-50% and lower their total cost of capital by 5-10 percentage points annually. The exact savings depend on your current debt structure and available collateral."
      }
    ],

    bestFor: [
      "Businesses trapped in MCA debt cycles",
      "Companies with multiple overlapping loans",
      "Refinancing expensive equipment loans",
      "Cleaning up the balance sheet before growth",
      "Reducing monthly debt service to improve cash flow"
    ],

    qualificationCriteria: {
      minimumRevenue: "$1MM+ annually",
      minimumTimeInBusiness: "2+ years preferred",
      minimumCreditScore: "550+ (some exceptions)",
      requiredAssets: "AR, Inventory, Equipment, or Real Estate helpful"
    }
  },

  {
    id: "payroll-financing",
    title: "Emergency Payroll Financing",
    image: "/solutions/Invoice AI Financing.webp",
    category: "Fast Cash Flow",

    whatIs: "Emergency payroll financing provides fast capital when you need to cover payroll but are waiting on receivables, contracts, or other payments to come through. Funding in 24-72 hours ensures your team gets paid on time, preserving trust and operations.",

    shortDesc: "Cover unexpected payroll gaps in 24-72 hours. Keep your team paid on time when receivables are delayed or cash flow hits a wall.",

    fullDesc: "When payroll is due but cash flow hasn't caught up, time isn't just money—it's team trust and operational stability. Emergency payroll financing provides immediate working capital to cover payroll shortfalls caused by delayed invoices, contract delays, seasonal slowdowns, or unexpected expenses. We've closed payroll solutions in as fast as 3-4 business days, ensuring employees are paid on time with zero disruption. This financing works through short-term loans, invoice factoring, or bridge capital tailored to your situation.",

    features: [
      "Funding in 24-72 hours (some cases 3-4 business days)",
      "Loan amounts from $50K to $1MM+",
      "Short-term bridge loans or invoice factoring",
      "No long-term commitment required",
      "Covers payroll, taxes, and benefits",
      "Works with PEO and payroll providers",
      "Available nationwide"
    ],

    ratesAndTerms: {
      minAmount: "$50,000",
      maxAmount: "$1,000,000",
      interestRate: "Prime + 4% to Prime + 12% (short-term)",
      costRange: "1-3% of payroll amount for bridge solutions",
      closingTimeframe: "24-72 hours (up to 5 business days)",
      termLength: "30-90 days (or until receivables clear)"
    },

    commonQuestions: [
      {
        id: "how-fast-payroll-funding",
        q: "How fast can I get payroll funding?",
        a: "In many cases, we can fund in 24-72 hours. Our fastest payroll solution closed in 4 business days, ensuring every employee was paid on time. Speed depends on documentation readiness and deal structure."
      },
      {
        id: "what-if-no-collateral",
        q: "What if I don't have collateral for payroll financing?",
        a: "We can often structure payroll financing against upcoming receivables or future contracts. Some lenders offer short-term unsecured options for established businesses with strong revenue history."
      },
      {
        id: "payroll-financing-cost",
        q: "How much does emergency payroll financing cost?",
        a: "Costs typically range from 1-3% of the payroll amount for short-term bridge solutions, or Prime + 4-12% annualized for term loans. While higher than traditional financing, it's far less than the cost of missing payroll."
      }
    ],

    bestFor: [
      "Unexpected payroll shortfalls",
      "Waiting on delayed invoices or contracts",
      "Seasonal businesses between peak seasons",
      "Companies with PEO or payroll provider relationships",
      "Bridge until receivables or funding arrives"
    ],

    qualificationCriteria: {
      minimumRevenue: "$500K+ annually",
      minimumTimeInBusiness: "1+ years",
      minimumCreditScore: "550+ (flexible)",
      requiredAssets: "Invoices, contracts, or revenue stream"
    }
  },

  {
    id: "asset-based-lending",
    title: "Asset-Based Lending",
    image: "/solutions/Asset Based Lending.webp",
    category: "Flexible Working Capital",

    whatIs: "Asset-Based Lending (ABL) is a flexible credit line that lets you borrow against your company's assets like accounts receivable, inventory, equipment, and real estate. Instead of focusing heavily on credit history, ABL lenders evaluate the value of your collateral.",

    shortDesc: "Leverage business assets such as AR, Inventory, Equipment & CRE for flexible lines of credit that grow with your business.",

    fullDesc: "Asset-Based Lending (ABL) allows businesses to leverage their accounts receivable, inventory, equipment, and commercial real estate as collateral to access flexible working capital. These lines of credit are ideal for companies which are going through seasons of rapid growth or experiencing temporary financial challenges. ABL lines are typically used for working capital, expansion, acquisitions, or debt restructuring.",

    features: [
      "Facility amounts from $1MM – $100MM",
      "Revolving credit lines available",
      "70-90% advance on receivables",
      "50-75% advance on inventory",
      "Rates based on SOFR or Prime +1-5%",
      "Suitable for US-based, B2B and B2C"
    ],

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

    commonQuestions: [
      {
        id: "what-is-abl",
        q: "What is asset-based lending?",
        a: "Asset-based lending (ABL) is a flexible credit line that lets you borrow against your company's assets like accounts receivable, inventory, equipment, and real estate."
      },
      {
        id: "how-much-can-borrow-abl",
        q: "How much can I borrow with ABL?",
        a: "ABL typically ranges from $1MM to $100MM. Advance rates are: 70-90% of accounts receivable, 50-75% of inventory, and 40-70% of equipment."
      },
      {
        id: "abl-rates",
        q: "What are typical ABL rates?",
        a: "Interest rates typically range from Prime + 1.5% to Prime + 5% (currently 8-13%). You may also pay an annual facility fee of 0.5-1% and monthly service fees."
      }
    ],

    bestFor: [
      "Fast-growing companies with strong assets",
      "Companies with inconsistent cash flow",
      "Acquisitions and expansion",
      "Debt restructuring",
      "Managing cash flow during growth periods"
    ],

    qualificationCriteria: {
      minimumRevenue: "",
      minimumTimeInBusiness: "",
      minimumCreditScore: "",
      requiredAssets: "AR, Inventory, Equipment, or Real Estate"
    }
  },

  {
    id: "invoice-factoring",
    title: "Invoice Financing",
    image: "/solutions/Invoice AI Financing.webp",
    category: "Fast Cash Flow",

    whatIs: "Invoice factoring (also called AR financing) is when you sell your unpaid B2B invoices to a factor for immediate cash. Instead of waiting 30-90 days for customers to pay, you get 75-95% of the invoice value within 24-48 hours. As customers pay, the borrowing automatically decreases—making it self-liquidating.",

    shortDesc: "Convert unpaid invoices into working capital in 24-48 hours. Self-liquidating, revolving, and scales with your growth—perfect for companies with strong sales but slow-paying customers.",

    fullDesc: "Invoice factoring (AR financing) unlocks cash trapped in unpaid invoices, converting them into immediate working capital. Unlike traditional term loans that sit on your balance sheet, factoring is self-liquidating: as your customers pay, the borrowing automatically decreases. This solution is ideal for companies with commercial AR facing 30-90 day payment cycles. Factoring works for staffing, construction, manufacturing, healthcare, government contracting, and CPG industries with net-30, net-60, net-90+ payment terms. Real example: A healthcare supply manufacturer secured $1MM at Prime + 2% with 92% advance rates—better terms than most bank loans—and within 3 weeks of approval. The facility automatically scaled to $1.5MM within 2 months as their sales grew.",

    features: [
      "Facility amounts from $250K - $100MM",
      "Revolving lines of credit (scales with your sales)",
      "Advance rates of 75%-95% on AR (industry-best rates)",
      "Self-liquidating: as customers pay, debt automatically decreases",
      "Interest tied to SOFR or Prime + 1-6%",
      "Factor fees from 0.25% to 1% per invoice",
      "Not a loan; no balance sheet impact",
      "Selective factoring: choose which invoices to factor",
      "Approval in 3 weeks, funding in 24-48 hours"
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
        id: "what-is-invoice-factoring",
        q: "What is invoice factoring?",
        a: "Invoice factoring is when you sell your unpaid B2B invoices to a factor for immediate cash. You get 75-95% of invoice value within 24-48 hours instead of waiting 30-90 days. Unlike a term loan, factoring is self-liquidating—as customers pay, the debt automatically decreases."
      },
      {
        id: "how-quickly-cash-factoring",
        q: "How quickly can I get cash?",
        a: "Approval typically takes 2-3 weeks. Once approved, you receive 75-95% of invoice value within 24-48 hours. Our real example: healthcare supply manufacturer approved and funded in 3 weeks, then expanded from $1MM to $1.5MM within 2 months as sales grew."
      },
      {
        id: "tax-return-factoring",
        q: "Can I get factoring if my tax return shows a loss?",
        a: "Yes! This is one of factoring's biggest advantages over traditional bank loans. Banks look at tax returns. We look at invoices. If your customers are paying reliably and your invoices are strong, your tax return doesn't disqualify you. Your invoice quality and customer creditworthiness are what matter."
      },
      {
        id: "factoring-vs-bank-loan",
        q: "Why is factoring better than a bank line of credit?",
        a: "Factoring is self-liquidating (debt decreases as customers pay), scales automatically with your sales, has no balance sheet impact, and doesn't require collateral beyond your invoices. Banks require strong credit, tax returns, and collateral—and their rates are often higher. A real example: one client got Prime + 2% on AR factoring (single-digit when combined), vs. traditional bank rates of 8-13%."
      },
      {
        id: "factoring-selective",
        q: "Do I have to factor all my invoices?",
        a: "No. Selective factoring lets you choose which invoices to factor and which to collect yourself. This flexibility is perfect for businesses with mixed payment terms or situations where you only need cash during specific periods."
      }
    ],

    bestFor: [
      "Companies with strong sales but slow-paying customers (30-90 days)",
      "Growing businesses hitting bank line ceiling",
      "Businesses with loss tax returns but solid invoices",
      "Staffing, construction, manufacturing, healthcare, gov't contractors",
      "Companies needing payroll covered before contract payment arrives",
      "Seasonal businesses needing capital during slower periods",
      "Fast-growing companies whose sales outpace traditional lender appetite"
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
    title: "Working Capital Loans & Lines of Credit",
    image: "/solutions/Working Capital Loans.webp",
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
        id: "what-is-wc-loan",
        q: "What is a working capital loan?",
        a: "Short-term financing for day-to-day operational expenses: payroll, inventory, accounts payable. Working capital loans focus on revenue and growth potential rather than credit scores."
      },
      {
        id: "how-fast-approval-wc",
        q: "How fast can I get approved?",
        a: "Working capital loans are the fastest funding product. Approval typically takes 1-3 business days, with funding within 3-5 business days of approval."
      },
      {
        id: "wc-loan-cost",
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
      minimumMonthlyRevenue: "",
      minimumTimeInBusiness: "1-2 years",
      creditScoreRange: "500+ (better credit = better rates)",
      businessType: "Any B2B or B2C business"
    }
  },

  {
    id: "inventory-financing",
    title: "Inventory Financing",
    image: "/solutions/Inventory Financing.webp",
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
    title: "Equipment Leasing & Financing",
    image: "/solutions/Equipment Leasing.webp",
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
    title: "PO Funding",
    image: "/solutions/Purchase Order Funding.webp",
    category: "Growth Capital",
    whatIs: "PO financing provides funding to fulfill customer purchase orders when you lack working capital for production or materials. Especially valuable for international sourcing, tariff management, and supply chain financing.",
    shortDesc: "Fund large purchase orders from international suppliers, manage tariff costs, and scale without depleting cash. Perfect for manufacturers, importers, and distributors.",
    fullDesc: "PO financing unlocks growth by funding purchase orders before you have customer cash in hand. This works for drop-shipped orders, international sourcing (including overseas suppliers), work-in-process goods, and inventory production. Real example: a specialty coffee importer faced demand surge from corporate roasters but was capped at $150K by their existing lender. Serve Funding secured a $1MM PO facility in 2 weeks, enabling them to pay overseas suppliers without delays, offset rising tariff costs through bulk orders, and fulfill new customer orders at scale. PO financing is ideal for manufacturers, distributors, e-commerce firms, and international traders managing complex supply chains.",
    features: [
      "Loan amounts from $250K to $50M",
      "Revolving credit that scales with growth",
      "Funds 70%-100% of P.O. value",
      "Fees from 1.5% to 3% per 30 days",
      "International supplier support (USA and overseas vendors)",
      "Work-in-process (WIP) and finished goods financing",
      "Tariff cost management through bulk order discounts",
      "Drop-ship and warehouse order support",
      "Fast approval: 2-4 weeks, funding in 5-10 business days"
    ],
    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$50,000,000",
      fundingPercent: "70-100% of PO value",
      costRange: "1.5-3% per 30 days",
      closingTime: "5-10 business days"
    },
    commonQuestions: [
      {
        id: "po-international-suppliers",
        q: "Can PO financing work with international suppliers?",
        a: "Yes. PO financing specifically supports payments to overseas suppliers (China, India, Vietnam, etc.). This is especially valuable when managing tariff costs—you can negotiate bulk discounts upfront and use PO financing to fund the larger order, offsetting tariff expenses."
      },
      {
        id: "po-tariff-management",
        q: "How does PO financing help with tariff costs?",
        a: "When tariffs spike or change, bulk orders at lower per-unit costs can offset the tariff impact. PO financing lets you fund larger upfront orders without depleting working capital. Real example: an importer used their $1MM facility to bulk-order from suppliers before tariff changes, saving significantly on per-unit costs."
      },
      {
        id: "po-wip-goods",
        q: "Does PO financing cover work-in-process (WIP) goods?",
        a: "Yes. PO financing covers work-in-process inventory, finished goods, and production materials. This is perfect for manufacturers who need to finance production before customer payment arrives."
      },
      {
        id: "po-how-fast",
        q: "How quickly can I get PO financing?",
        a: "Approval typically takes 2-4 weeks. Once approved, funding releases in 5-10 business days for most orders. For established facilities, the process moves even faster—sometimes closing in 10-15 days total."
      }
    ],
    bestFor: ["Manufacturers & wholesalers with large orders", "E-commerce firms scaling inventory", "International importers managing supplier payments", "Companies offsetting tariff costs through bulk orders", "Distributors fulfilling major contracts", "Businesses with strong PO pipeline"],
    qualificationCriteria: {}
  },

  {
    id: "government-contracts",
    title: "Government Contracts",
    image: "/solutions/Government Contract Financing.webp",
    category: "Contract-Based",
    whatIs: "Government contract financing funds federal, state, and local contracts, covering payroll, materials, and upfront costs until government payment arrives (often 30-90+ days). Works for prime and subcontractors.",
    shortDesc: "Fund government contracts without depleting working capital. Prime and subcontractor support, fast approval, and payment-cycle management.",
    fullDesc: "Government contract financing bridges the timing gap between contract performance and government payment (often 30-120 days). This covers upfront materials, labor, payroll, and project costs without depleting working capital. Works for federal, state, and local contracts, as well as subcontractors. This solution is essential for contractors competing in government space—government clients prefer contractors who can fund their own projects without requesting advance payments.",
    features: [
      "Financing facilities from $250K to $50MM+",
      "Up to 90% advance on contract value",
      "Approval in 5-10 business days, funding 10-20 days",
      "Rates from Prime + 2% to 8%",
      "Works for prime contractors, subcontractors, and vendors",
      "Covers federal (GSA, DoD), state, and local contracts",
      "Options: contract factoring, asset-based, credit lines",
      "Flexibility for retainage structures",
      "USA and international contract support"
    ],
    ratesAndTerms: {
      minAmount: "$250,000",
      maxAmount: "$50,000,000",
      advanceRate: "Up to 90% of contract value",
      interestRate: "Prime + 2% to 8%",
      approvalTime: "5-10 business days"
    },
    commonQuestions: [
      {
        id: "gov-contract-payment-timing",
        q: "How does government contract financing work with payment timing?",
        a: "Government contracts often have 30-90+ day payment terms (net-30, net-60, net-90, or quarterly). Contract financing covers your costs (materials, payroll, subcontractors) upfront, then is repaid when government payment arrives. Fast example: $500K in 20 business days for a contractor who won a federal GSA contract."
      },
      {
        id: "gov-contract-subcontractor",
        q: "Can subcontractors get government contract financing?",
        a: "Yes. Many subcontractors face the same timing gap—they perform work, then wait 30-60+ days for prime contractor or government payment. We fund subcontractors frequently. Qualification depends on strong POs and credit history of the paying entity."
      },
      {
        id: "gov-contract-retainage",
        q: "How do you handle retainage on government contracts?",
        a: "Government contracts often retain 5-10% of payments until project completion. Financing structures account for this. Some facilities factor the retainage separately or provide bridge coverage until final retainage payment arrives."
      }
    ],
    bestFor: ["Prime contractors on federal/state/local contracts", "Subcontractors waiting on prime or government payment", "Businesses with GSA, DoD, or state contracts", "Contractors managing retainage structures", "Vendors to government agencies"],
    qualificationCriteria: {}
  },

  {
    id: "real-estate-lending",
    title: "Real Estate Lending",
    image: "/solutions/Raeal Estate Lending.webp",
    category: "Long-Term Financing",
    whatIs: "Real estate financing covers commercial property purchases, refinancing, cash-out refinancing, and business owner financing needs. Includes bridge loans (12-36 months) and permanent financing (25-30 year terms).",
    shortDesc: "Bridge and long-term financing for commercial real estate. Purchases, refinancing, cash-out options, and acquisition timing.",
    fullDesc: "Real estate financing solutions cover all property types and purposes: industrial, office, retail, multi-family, mixed-use, and investment portfolios. Options include short-term bridge financing (12-36 months) for acquisition timing, permanent commercial loans (25-30 year amortization), refinancing with cash-out, and business owner financing. Work with banks, credit unions, institutional lenders, private investors, and equity funds. Real example: a surgeon used real estate financing as part of a layered capital strategy—securing a second mortgage on personal assets to provide additional runway during M&A.",
    features: [
      "Financing facilities from $500K to $100MM+",
      "Loan terms from 12 months to 30 years",
      "LTV of 50-85% on commercial properties",
      "Rates from Prime + 2% to 7%",
      "All property types, all asset classes",
      "DSCR-based or bank statement qualified",
      "Bridge and permanent options"
    ],
    ratesAndTerms: {
      minAmount: "$500,000",
      maxAmount: "$100,000,000",
      loanToValue: "50-85%",
      interestRate: "Prime + 2% to 7%",
      termLength: "12 months to 30 years"
    },
    commonQuestions: [
      {
        id: "cre-bridge-timing",
        q: "What is a bridge loan in real estate?",
        a: "A bridge loan is short-term real estate financing (12-36 months, interest-only common) used for timing gaps. Example: you're selling one property and need to close on another before the sale completes. Bridge financing covers the gap, then refinances from sale proceeds. Close in 2-3 weeks."
      },
      {
        id: "personal-asset-refi",
        q: "Can I refinance personal real estate for business needs?",
        a: "Yes. Business owners can use second mortgages on personal residences or real estate assets to fund business operations, provide stretch capital, or acquire real estate. We've structured $550K second mortgages using bank-statement-only approaches for business owners needing flexible qualification."
      },
      {
        id: "cre-cash-out",
        q: "Can I do a cash-out refinance and use it for working capital?",
        a: "Yes. Many business owners refinance commercial property at higher LTV to extract equity for working capital, acquisitions, or other business needs. LTV typically ranges 50-75% depending on property type and lender."
      }
    ],
    bestFor: ["Commercial property acquisitions", "Business owner real estate refinancing", "Bridge financing for property timing gaps", "Cash-out refinancing for working capital", "Investment property portfolios", "Mixed-use development"],
    qualificationCriteria: {}
  },

  {
    id: "unsecured-debt",
    title: "Subordinated & Unsecured Credit",
    image: "/solutions/Unsecured & Sub-Debt Loans.webp",
    category: "Strategic Financing",
    whatIs: "Bridge capital provides quick, flexible financing without requiring collateral or personal guarantees. Perfect for acquisition timing gaps, M&A bridge needs, or 'stretch capital' when you've maxed traditional lenders. Includes unsecured term loans and subordinated/mezzanine financing.",
    shortDesc: "Fast, flexible capital without collateral. Bridge deals, manage M&A timing, or stretch your borrowing capacity—perfect when traditional lenders hit their limits.",
    fullDesc: "Bridge capital serves multiple strategic purposes: bridging time gaps during M&A (like a surgeon's sale timing), providing 'stretch capital' when you've maxed bank lines, funding seasonal needs without long-term debt, or structuring layered capital stacks. This includes interest-only bridge loans, unsecured term loans, and subordinated debt (mezzanine financing). Real example: a surgeon securing $1.475MM in bridge capital within weeks to cover year-end expenses while completing a hospital system acquisition. Another example: a growing medical device company layering $240K unsecured term loan with their AR revolver to move inventory ahead of tariff changes. Bridge capital is typically unsecured (no UCC filings, no personal guarantees on some products) and approved for 6-36 month terms.",
    features: [
      "Loan amounts from $50K to $20MM+ (scaled to your need)",
      "Terms 6-36 months (flexible, interest-only options available)",
      "Interest-only bridge structures for timing gaps",
      "Unsecured options: no UCC filing, no collateral required",
      "Some products: no personal guarantee needed",
      "Lends at 1-5 times EBITDA (for subordinated debt)",
      "Interest: Prime + 4% to 8% (varies by structure)",
      "Second lien structures for layered capital",
      "Fast approval & funding for time-sensitive deals"
    ],
    ratesAndTerms: {
      minAmount: "$50,000",
      maxAmount: "$20,000,000",
      termLength: "6-36 months",
      basedOn: "1-5x EBITDA",
      interestRate: "Prime + 4% to 8%",
      closingTime: "30-45 business days"
    },
    commonQuestions: [
      {
        id: "bridge-vs-term-loan",
        q: "What's the difference between bridge capital and a term loan?",
        a: "Bridge capital is typically shorter-term (6-36 months), unsecured, and designed for specific timing gaps (acquisitions, M&A closings, seasonal needs). Term loans are longer (3-5 years), secured, and sit as permanent debt. Bridge is 'get in, get out' capital; terms loans are permanent structure. Real example: a surgeon used bridge financing for 90 days until hospital acquisition closed, then refinanced into permanent capital."
      },
      {
        id: "bridge-acquisition-timing",
        q: "How does bridge financing work for M&A?",
        a: "You need capital now but large payment arrives after closing. Bridge financing covers the gap. Interest-only options mean you pay interest during the bridge period, then refinance from deal proceeds. Typical timeframe: 90-180 days. We've closed $1.475MM M&A bridge in weeks."
      },
      {
        id: "unsecured-stretch-capital",
        q: "Can I get unsecured bridge capital without collateral?",
        a: "Yes, in many cases. Unsecured bridge loans don't require collateral, UCC filings, or (on some products) personal guarantees. Qualification depends on revenue history and growth trajectory. Growing companies with $1MM+ revenue often qualify for unsecured bridge capital."
      },
      {
        id: "layered-capital-strategy",
        q: "What is layered capital and how does it work?",
        a: "Layered capital combines multiple funding sources (e.g., AR revolver + unsecured term + second lien mortgage). This maximizes available capital for growth phases. Example: a medical device company used $1MM AR revolver + $240K unsecured term + $550K second mortgage = $1.79MM total capital over 10 months, enabling 30%+ growth."
      }
    ],
    bestFor: ["M&A bridge timing gaps", "Acquisition funding", "Growth companies maxing traditional lenders", "Seasonal or project-based cash needs", "Companies with strong revenue but weak assets", "Layered capital strategies", "Leveraged buyouts", "Stretch capital to accelerate growth"],
    qualificationCriteria: {}
  },

  {
    id: "bridge-funding",
    title: "Bridge Funding",
    image: "/solutions/Unsecured & Sub-Debt Loans.webp",
    category: "Short-Term Capital",
    whatIs: "Bridge funding provides short-term capital to cover timing gaps, whether waiting for contracts to close, receivables to arrive, or larger financing to fund. Typically 6-12 months, interest-only structures available.",
    shortDesc: "Quick capital for timing gaps. Bridge acquisitions, cover operating expenses, or connect to permanent financing.",
    fullDesc: "Bridge funding serves as flexible, short-term capital when you need immediate cash for time-sensitive situations. Whether you're awaiting contract closure, managing seasonal needs, or covering expenses before larger deals close, bridge financing provides the runway you need. Terms typically range from 6-12 months with interest-only payment options available.",
    features: [
      "Loan amounts from $50K to $5MM+",
      "Short-term: 6-12 month typical terms",
      "Interest-only payment options",
      "Fast approval and funding",
      "No long-term commitment required",
      "Flexible structure for timing gaps"
    ],
    ratesAndTerms: {
      minAmount: "$50,000",
      maxAmount: "$5,000,000",
      termLength: "6-12 months",
      interestRate: "Prime + 3% to 8%",
      closingTime: "5-15 business days"
    },
    commonQuestions: [
      {
        id: "bridge-when-use",
        q: "When should I use bridge funding?",
        a: "Bridge funding is ideal for timing gaps: awaiting contract closure, waiting for receivables, managing seasonal needs, or covering expenses before larger financing arrives."
      }
    ],
    bestFor: ["Timing gaps", "Seasonal cash needs", "Awaiting contracts or receivables", "Coverage before larger deals close"],
    qualificationCriteria: {}
  },

  {
    id: "sba-loans",
    title: "SBA Loans",
    image: "/solutions/Small Business Administration Loans.webp",
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
