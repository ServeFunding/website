/**
 * SERVE FUNDING - SOLUTIONS DATA
 *
 * All funding solution/product information
 * Last Updated: 2025-12-07
 */

import type { FundingSolution } from '@/types/solutions'

export const fundingSolutions: FundingSolution[] = [
  {
    id: "working-capital-loans",
    title: "Working Capital Loans & Lines of Credit",
    seoTitle: "Fast Working Capital Loans Approved in 3-10 Days",
    image: "/solutions/Working Capital Loans.webp",
    category: "Quick Operations Funding",
    whatIs: "A working capital loan is short-term financing that helps businesses cover day-to-day operational expenses: payroll, inventory, accounts payable, rent, etc.",
    shortDesc: "Working capital loans for growing companies. Fast funding (2–10 business days). Support payroll, inventory, expansion. $100K–$10M+.",
    fullDesc: "Working capital funding is typically funded on a revenue-based underwriting model. They can be closed quickly – often within days – and provide essential funding for managing day-to-day operating expenses. They are typically used for help to cover payroll, fund additional inventory, address accounts payable, and more. Working capital loans ensure smooth operations amid cash flow challenges stemming from the unexpected to seasonal fluctuations.",
    features: [
      "Loan sizes from $100K to $10M+",
      "Flexible terms from 6 to 48 months",
      "Funding within 2–10 business days",
      "Monthly rates of 1.25%–4% per month",
      "Focus on revenue and growth potential rather than credit scores and existing assets",
      "Fast-growing companies across all industries"
    ],
    bestFor: [
      "Unexpected payroll shortfalls",
      "Seasonal cash flow gaps",
      "Rapid growth cash flow needs",
      "New customer order financing",
      "Accounts payable management",
      "Bridge between funding rounds"
    ],
  },

  {
    id: "invoice-factoring",
    title: "Invoice Financing",
    seoTitle: "Get Paid Faster | Invoice Financing",
    image: "/solutions/Invoice AI Financing.webp",
    category: "Fast Cash Flow",
    whatIs: "Invoice factoring (also called AR financing) is when you sell your unpaid B2B invoices to a factor for immediate cash. Instead of waiting 30-90 days for customers to pay, you get 75-95% of the invoice value within 24-48 hours. As customers pay, the borrowing automatically decreases—making it self-liquidating.",
    shortDesc: "Invoice financing for growing companies. Fast cash access once approved. Scales with sales. Better for rapidly growing businesses than bank loans.",
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
    bestFor: [
      "Companies with strong sales but slow-paying customers (30-90 days)",
      "Growing businesses hitting bank line ceiling",
      "Businesses with loss tax returns but solid invoices",
      "Staffing, construction, manufacturing, healthcare, gov't contractors",
      "Companies needing payroll covered before contract payment arrives",
      "Seasonal businesses needing capital during slower periods",
      "Fast-growing companies whose sales outpace traditional lender appetite"
    ],
  },

  {
    id: "equipment-leasing",
    title: <>Equipment Leasing <br />& Financing</>,
    seoTitle: "Equipment Financing Without Big Upfront Costs",
    image: "/solutions/Equipment Leasing.webp",
    category: "Asset Acquisition",
    whatIs: "Equipment leasing lets you acquire essential machinery, vehicles, technology without large upfront capital. Monthly payments spread the cost over 3-7 years.",
    shortDesc: "Equipment financing for growing manufacturers & contractors. 3-7 year terms. Avoid upfront capital costs. Scale operations.",
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
  },

  {
    id: "asset-based-lending",
    title: "Asset-Based Lending",
    seoTitle: "Asset-Based Lending Credit Lines Fast",
    image: "/solutions/Asset Based Lending.webp",
    category: "Flexible Working Capital",
    whatIs: "Asset-Based Lending (ABL) is a flexible credit line that lets you borrow against your company's assets like accounts receivable, inventory, equipment, and real estate. Instead of focusing heavily on credit history, ABL lenders evaluate the value of your collateral.",
    shortDesc: "Asset-based lending for growing companies. Flexible credit lines backed by AR, inventory, equipment & real estate. Facility sizes $250K–$25M.",
    fullDesc: "Asset-Based Lending (ABL) allows businesses to leverage their accounts receivable, inventory, equipment, and commercial real estate as collateral to access flexible working capital. These lines of credit are ideal for companies which are going through seasons of rapid growth or experiencing temporary financial challenges. ABL lines are typically used for working capital, expansion, acquisitions, or debt restructuring.",
    features: [
      "Facility sizes from $250K – $25M",
      "Revolving credit lines available",
      "70-90% advance on receivables",
      "50-75% advance on inventory",
      "Cost of capital: Prime + 1–5%+",
      "Funding timeline: 6–8 weeks",
      "Typical industries: manufacturers, distributors, government contractors, services firms",
      "Suitable for US-based, B2B companies"
    ],
    bestFor: [
      "Fast-growing companies with strong assets",
      "Companies with inconsistent cash flow",
      "Acquisitions and expansion",
      "Debt restructuring",
      "Managing cash flow during growth periods"
    ],
  },

  {
    id: "inventory-financing",
    title: "Inventory Financing",
    seoTitle: "Inventory Financing for Growing Retailers",
    image: "/solutions/Inventory Financing.webp",
    category: "Asset-Based",
    whatIs: "Inventory financing is a short-term loan option that leverages existing inventory as collateral, offering businesses the liquidity to manage inventory levels.",
    shortDesc: "Inventory financing for growing e-commerce & retail. Scale inventory levels without depleting working capital. Up to 85% advance.",
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
  },

  {
    id: "purchase-order-funding",
    title: "PO Funding",
    seoTitle: "PO Funding: Scale Without Cash Drain",
    image: "/solutions/Purchase Order Funding.webp",
    category: "Growth Capital",
    whatIs: "PO financing provides funding to fulfill customer purchase orders when you lack working capital for production or materials. Especially valuable for international sourcing, tariff management, and supply chain financing.",
    shortDesc: "PO funding for growing manufacturers & importers. Scale orders without cash depletion. Manage tariffs, international suppliers.",
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
    bestFor: ["Manufacturers & wholesalers with large orders", "E-commerce firms scaling inventory", "International importers managing supplier payments", "Companies offsetting tariff costs through bulk orders", "Distributors fulfilling major contracts", "Businesses with strong PO pipeline"],
  },

  {
    id: "government-contracts",
    title: "Government Contracts",
    seoTitle: "Government Contract Financing Solutions",
    image: "/solutions/Government Contract Financing.webp",
    category: "Contract-Based",
    whatIs: "Government contract financing funds federal, state, and local contracts, covering payroll, materials, and upfront costs until government payment arrives (often 30-90+ days). Works for prime and subcontractors.",
    shortDesc: "Government contract financing. Fund federal, state & local contracts. For prime contractors, subcontractors & vendors.",
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
    bestFor: ["Prime contractors on federal/state/local contracts", "Subcontractors waiting on prime or government payment", "Businesses with GSA, DoD, or state contracts", "Contractors managing retainage structures", "Vendors to government agencies"],
  },

  {
    id: "real-estate-lending",
    title: "Real Estate Lending",
    seoTitle: "Real Estate Financing Fast | Bridge Loans",
    image: "/solutions/Raeal Estate Lending.webp",
    category: "Long-Term Financing",
    whatIs: "Real estate financing covers commercial property purchases, refinancing, cash-out refinancing, and business owner financing needs. Includes bridge loans (12-36 months) and permanent financing (25-30 year terms).",
    shortDesc: "Real estate financing for growing companies. Bridge loans, refinancing, cash-out options. Fast approval for acquisition timing.",
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
    bestFor: ["Commercial property acquisitions", "Business owner real estate refinancing", "Bridge financing for property timing gaps", "Cash-out refinancing for working capital", "Investment property portfolios", "Mixed-use development"],
  },

  {
    id: "unsecured-debt",
    title: "Subordinated & Unsecured Credit",
    seoTitle: "Unsecured & Subordinated Financing",
    image: "/solutions/Unsecured & Sub-Debt Loans.webp",
    category: "Strategic Financing",
    whatIs: "Bridge capital provides quick, flexible financing without requiring collateral or personal guarantees. Perfect for acquisition timing gaps, M&A bridge needs, or 'stretch capital' when you've maxed traditional lenders. Includes unsecured term loans and subordinated/mezzanine financing.",
    shortDesc: "Subordinated & unsecured credit for growing companies. Stretch capital when banks say no. Bridge M&A and acquisitions.",
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
    bestFor: ["M&A bridge timing gaps", "Acquisition funding", "Growth companies maxing traditional lenders", "Seasonal or project-based cash needs", "Companies with strong revenue but weak assets", "Layered capital strategies", "Leveraged buyouts", "Stretch capital to accelerate growth"],
  },

  {
    id: "bridge-funding",
    title: "Bridge Funding",
    seoTitle: "Quick Bridge Funding | Cover Timing Gaps in Days",
    image: "/solutions/Bridge Funding.webp",
    category: "Short-Term Capital",
    whatIs: "Bridge funding provides short-term capital to cover timing gaps, whether waiting for contracts to close, receivables to arrive, or larger financing to fund. Typically 6-12 months, interest-only structures available.",
    shortDesc: "Bridge funding for growing companies. Quick capital for timing gaps, acquisitions, and operational expenses.",
    fullDesc: "Bridge funding serves as flexible, short-term capital when you need immediate cash for time-sensitive situations. Whether you're awaiting contract closure, managing seasonal needs, or covering expenses before larger deals close, bridge financing provides the runway you need. Terms typically range from 6-12 months with interest-only payment options available.",
    features: [
      "Loan amounts from $50K to $5MM+",
      "Short-term: 6-12 month typical terms",
      "Interest-only payment options",
      "Fast approval and funding",
      "No long-term commitment required",
      "Flexible structure for timing gaps"
    ],
    bestFor: ["Timing gaps", "Seasonal cash needs", "Awaiting contracts or receivables", "Coverage before larger deals close"],
  },

  {
    id: "sba-loans",
    title: "SBA Loans",
    seoTitle: "SBA Loans: Lower Rates & Longer Terms",
    image: "/solutions/Small Business Administration Loans.webp",
    category: "Government-Backed",
    whatIs: "SBA Loans are government-backed loans from banks offering lower interest rates and longer terms than traditional loans.",
    shortDesc: "SBA loans for established small businesses. Lower rates, longer terms. Working capital, equipment, real estate.",
    fullDesc: "SBA Loans foster small business growth by offering government-backed guarantees on loans from banks or credit unions. This support reduces lenders' risk, enabling businesses to secure essential capital. With options like the versatile 7(a) Loan for various needs, the 504 Loan for asset purchases, and the Express Loans for quick funding, SBA Loans cater to diverse business requirements.",
    features: [
      "Loan amounts from $250K to $5MM+",
      "Typical term up to 10 years",
      "Advance rates based on cash flow and assets",
      "Available exclusively in the USA"
    ],
  },

  {
    id: "debt-refinance",
    title: "Consolidation & Recapitalization",
    seoTitle: "Consolidate Debt & Lower Payments 30-50%",
    image: "/solutions/Consolidation and Recapitalization.webp",
    category: "Strategic Restructuring",
    whatIs: "Debt refinancing lets you replace high-cost debt (like merchant cash advances, expensive term loans, or multiple loan payments) with a single, more affordable financing solution. It's designed to free up cash flow, reduce monthly payments, and give your business breathing room to grow.",
    shortDesc: "Debt refinancing for growing companies. Consolidate loans, refinance MCAs, reduce payments by 30-50%. Cash out for growth.",
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
    bestFor: [
      "Businesses trapped in MCA debt cycles",
      "Companies with multiple overlapping loans",
      "Refinancing expensive equipment loans",
      "Cleaning up the balance sheet before growth",
      "Reducing monthly debt service to improve cash flow"
    ],
  }
]
