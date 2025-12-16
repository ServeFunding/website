/**
 * SERVE FUNDING - FAQ DATA
 *
 * Simplified FAQ structure with concise 3-5 sentence answers
 * Optimized for GEO/AIEO (Generative Engine Optimization)
 * Last Updated: 2025-12-03
 */

import { FAQ, FAQCategory } from '@/types/faq'

// ============================================================================
// FAQ CATEGORIES
// ============================================================================

export const faqCategories: FAQCategory[] = [
  {
    id: 'about-serve-funding',
    name: 'About Serve Funding',
    description: 'Learn about our company, process, costs, and what makes us different from traditional lenders.'
  },
  {
    id: 'working-capital',
    name: 'Working Capital',
    description: 'Everything you need to know about working capital loans, costs, qualification, and when to use them.'
  }
]


// ============================================================================
// TOP-LEVEL FAQ FOR HOMEPAGE - AIEO OPTIMIZED
// ============================================================================

export const topLevelFAQs: FAQ[] = [
  {
    id: 'top-what-is-serve-funding',
    q: "What is Serve Funding?",
    a: "Serve Funding is a boutique business financing advisory that provides strategic guidance and access to 30+ lenders for alternative financing needs from $250K to $100MM. As a channel-neutral advisor, we're not a lender—we're your advocate who fights for your best interests."
  },
  {
    id: 'top-when-banks-say-no',
    q: "What if my bank denied my loan application?",
    a: "When banks say no, we say how. We specialize in non-bank financing options including asset-based lending, invoice factoring, debt refinance, and MCA consolidation. Bankers are our primary referral sources because we help businesses that don't fit traditional credit boxes."
  },
  {
    id: 'top-how-fast-funding',
    q: "How fast can I get funding?",
    a: "Speed varies by solution: emergency payroll financing in 24-72 hours, invoice factoring in 3-5 days, asset-based lending in 10-20 days. We've closed deals in as little as 3 business days when time was critical."
  },
  {
    id: 'top-debt-refinance',
    q: "Can you help refinance expensive debt?",
    a: "Yes. Debt refinancing is one of our most popular solutions. We help businesses escape MCA debt traps, consolidate multiple loans, and reduce monthly payments by 30-50%. Most clients save 5-10 percentage points on their total cost of capital."
  },
  {
    id: 'top-how-much-cost',
    q: "How much does Serve Funding cost?",
    a: "We operate on a success-fee basis of 1-2% of the funded amount, paid only when you receive financing. No upfront costs, no retainers. We only succeed when you do, which aligns our incentives with yours."
  },
  {
    id: 'top-industries-served',
    q: "What industries do you serve?",
    a: "We serve manufacturing, construction, staffing, healthcare, CPG, e-commerce, government contractors, and professional services. Based in Atlanta, we primarily serve the Southeast but work with clients nationwide."
  }
]

// ============================================================================
// ABOUT SERVE FUNDING FAQs
// ============================================================================

export const aboutServeFundingFAQs: FAQ[] = [
  {
    id: 'what-is-serve-funding',
    q: 'What is Serve Funding?',
    a: 'Serve Funding is a boutique business financing advisory that provides strategic guidance and access to 30+ lenders for alternative financing from $250K to $100MM. As a channel-neutral advisor, we\'re not limited by a single lender\'s "credit box"—we tap into multiple underwriting styles. We operate with servant leadership and 15+ years of experience in asset-based and cash-flow lending.'
  },
  {
    id: 'relationships-over-bots',
    q: 'What does "Relationships Over Bots" mean?',
    a: 'We believe tired of automated platforms and generic funding advice? We provide high-touch, relationship-based advisory—not algorithms or quick-fix bots. You work directly with our founder or senior team members who understand your story, fight for your best interests, and negotiate the best terms across our lender network. When you partner with us, a little part of your reputation goes with it—and we protect that trust.'
  },
  {
    id: 'how-does-serve-funding-work',
    q: 'How does Serve Funding work?',
    a: 'We follow a three-step process: Discovery (understanding your needs and goals), Diligence (evaluating financing options across our lender network), and Delivery (guiding you through closing and negotiating on your behalf). Most engagements start with referrals from bankers, CFOs, or CPAs. You\'ll work directly with experienced advisors throughout—no handoffs to junior staff.'
  },
  {
    id: 'what-makes-serve-different',
    q: 'What makes Serve Funding different from other lenders or brokers?',
    a: 'We\'re not a lender—we\'re your trusted advisor with relationships across 30+ lenders and multiple underwriting styles. Unlike captive brokers tied to one lender, we provide unbiased guidance throughout your company\'s growth trajectory. We operate on a success-fee basis (1-2% when you fund), so our incentives align with yours. We fight hard to negotiate 10-20 percentage point rate reductions compared to going direct.'
  },
  {
    id: 'can-you-help-if-bank-denied',
    q: 'Can you help if my bank denied me?',
    a: 'Absolutely. When banks say no, we say how. Bankers are our primary referral sources because we specialize in alternative financing that traditional banks don\'t offer. We leverage asset-based lending, invoice factoring, debt refinance, revenue-based financing, and PO funding. We have relationships with dozens of alternative lenders who evaluate businesses differently and often approve when banks decline.'
  },
  {
    id: 'channel-neutral-advisor',
    q: 'What is a channel-neutral advisor?',
    a: 'A channel-neutral advisor is not tied to any single lender or product. Unlike captive brokers who earn commissions from one lender, we maintain relationships across 30+ lenders with different underwriting styles, rate structures, and specialties. This means we can match you with the best lender for your situation—and negotiate aggressively because we\'re not beholden to any single relationship.'
  },
  {
    id: 'why-banks-first',
    q: 'Why do most businesses go to their bank first?',
    a: 'Banks are the cheapest capital source and offer the most favorable terms for businesses that fit their credit boxes. If your banker knows you and can help, that\'s always the right first step. When banks can\'t help—whether due to credit limitations, timing, growth rate, or business model—that\'s when alternative financing becomes the next logical choice. We specialize in solving the problems your bank can\'t.'
  },
  {
    id: 'spot-predatory-lender',
    q: 'How do I know if a lender is predatory?',
    a: 'Red flags include: high-pressure sales tactics ("this offer expires at 5 PM today"), unclear rate disclosures (advertising "6% rates" when APR is actually 80-120%), double-digit fees not explained upfront, claims of "guaranteed approval" without questions, and ads that seem too good to be true. Good lenders ask questions to understand your business, explain everything clearly, and let you shop around without pressure. Trust your gut—if something feels rushed or unclear, it probably is.'
  },
  {
    id: 'tax-return-vs-invoices',
    q: 'Why do some lenders focus on invoices instead of tax returns?',
    a: 'Invoice factoring and asset-based lending evaluate what you\'re earning NOW (invoices and assets), not what you earned last year (tax return). If your business is growing, had a startup year, or faced temporary headwinds, your tax return might not reflect current reality. Your invoices tell the true story: strong customers, reliable payment history, and actual cash flow. We can help even if your tax return shows a loss, as long as your customers are paying reliably.'
  },
  {
    id: 'profitable-need-capital',
    q: 'How much working capital do profitable companies actually need?',
    a: 'Profitability and cash flow are different. A $5M profitable company might need $2.5M+ in working capital to fulfill a $10M growth contract because that money funds materials, payroll, and inventory BEFORE customer payment arrives. A simple rule of thumb: maintain 2-3 months of operating expenses as working capital. For example, $500K monthly expenses suggests $1M-$1.5M in working capital. Growing companies and those with uneven payment terms need even more.'
  },
  {
    id: 'layered-capital-stacking',
    q: 'Can I combine multiple funding sources?',
    a: 'Absolutely. "Layered capital" stacks multiple products to maximize available funds for growth. Example: $1MM AR revolver + $240K unsecured term loan + $550K second mortgage on personal real estate = $1.79MM total capital. This approach gives growing companies more runway without over-leveraging any single source. Each layer serves a different purpose: AR covers working capital needs, term loans provide bridge capital, real estate provides long-term flexibility.'
  },
  {
    id: 'early-payoff-discount',
    q: 'What\'s an "early payoff discount" and how does it work?',
    a: 'When you need quick funding at a higher rate, we build aggressive early payoff discounts into the structure. Scenario: You fund at 18% for 90 days, but close on a customer contract after 2 weeks. Instead of paying 90 days of interest, the early payoff discount lets you exit the loan with only 2 weeks of interest owed. This lets you refinance into a cheaper product immediately. We structure deals expecting this—it rewards clients who get liquidity events quickly.'
  },
  {
    id: 'percentage-need-capital',
    q: 'What percentage of businesses actually need working capital?',
    a: 'Approximately 90%+ of growing companies need working capital at some point in their first 5 years. It might come from family, investors, or lenders, but capital is essential for growth. Some bootstrap it themselves (slower growth), but most need an infusion. Working capital can be a one-time need or ongoing—either way, the vast majority of growing businesses face the need at some point.'
  },
  {
    id: 'maxed-bank-line-options',
    q: 'What if I\'ve maxed out my bank line but still need more capital?',
    a: 'This is where junior/subordinated lending and unsecured options come in. When you\'ve tapped traditional lenders, we have options: unsecured term loans, subordinated debt (mezzanine financing), invoice factoring backed by your AR, or asset-based lines secured by equipment and real estate. These products are designed for businesses that have outgrown their bank but have growth opportunities. They fit \"above\" your bank line in the capital stack.'
  },
  {
    id: 'emergency-payroll-speed',
    q: 'How fast can emergency payroll be funded?',
    a: 'In urgent situations (24-72 hours), we can secure bridge loans, invoice factoring, or lines of credit against upcoming receivables. Real example: $500K payroll emergency funded in 4 business days. Costs vary: bridge solutions typically 1-3% of payroll amount, or Prime + 4-12% annualized for term loans. The key is having assets or invoices to collateralize. Without collateral, speed increases but costs rise accordingly.'
  },
  {
    id: 'why-use-serve-vs-direct',
    q: 'Why should I use Serve Funding instead of going direct to a lender?',
    a: 'Working with a channel-neutral advisor typically reduces your cost of capital by 10-20 percentage points vs. going direct. Here\'s why: we have relationships with 30+ lenders and can negotiate aggressively on your behalf because we\'re not committed to any one relationship. We also guide you away from predatory products and help you avoid costly mistakes. Our 65% repeat client rate shows we deliver value—we succeed only when you do.'
  }
]

// ============================================================================
// WORKING CAPITAL FAQs
// ============================================================================

export const workingCapitalFAQs: FAQ[] = [
  {
    id: 'what-is-working-capital',
    q: 'What is working capital?',
    a: 'Working capital is the funds available to meet day-to-day operational needs, calculated as current assets minus current liabilities (cash, AR, inventory minus AP and short-term debt). When businesses need "working capital," they\'re seeking additional liquidity to grow without running out of money, meet obligations, and scale operations. Positive working capital means you have enough liquid assets to cover short-term obligations.'
  },
  {
    id: 'how-to-refinance-business-debt',
    q: 'How do I refinance high-cost business debt?',
    a: 'Debt refinancing replaces expensive debt (MCAs, high-interest loans, multiple payments) with a single, more affordable solution. We help you consolidate debt, reduce monthly payments by 30-50%, and often cash out additional working capital. Most refinances close in 10-20 business days using asset-based lending or term loans. The key is having sufficient revenue ($1MM+ annually) and ideally some collateral (AR, inventory, equipment, or real estate).'
  },
  {
    id: 'how-to-escape-mca-debt',
    q: 'How do I escape merchant cash advance (MCA) debt?',
    a: 'MCA consolidation refinances daily or weekly MCA payments into a single monthly term loan or line of credit with significantly lower costs. We\'ve helped dozens of businesses escape MCA debt traps by securing asset-based lending, term loans, or revenue-based financing that costs 10-20 percentage points less annually. The key is acting before cash flow becomes too constrained—contact us as soon as you realize MCA payments are unsustainable.'
  },
  {
    id: 'emergency-payroll-financing',
    q: 'How fast can I get emergency payroll financing?',
    a: 'Emergency payroll financing can fund in 24-72 hours in many cases. Our fastest payroll solution closed in 4 business days, ensuring every employee was paid on time with zero disruption. We structure payroll financing through short-term bridge loans, invoice factoring, or lines of credit against upcoming receivables. Costs range from 1-3% of payroll amount for bridge solutions or Prime + 4-12% annualized for term loans.'
  },
  {
    id: 'how-much-working-capital-needed',
    q: 'How much working capital do I need?',
    a: 'The amount varies by business size, growth rate, industry, and operating costs—heavier overhead industries need more, while asset-light businesses need less. A common rule of thumb is maintaining 2-3 months of operating expenses. For example, $500K in monthly expenses suggests $1M-$1.5M in working capital. Rapidly growing companies and those with uneven payment terms need more to bridge cash flow gaps.'
  },
  {
    id: 'what-is-working-capital-loan',
    q: 'What is a working capital loan?',
    a: 'A working capital loan is short-term financing ($100K to $5MM+) that provides cash for payroll, inventory, and expenses, typically approved in 1-3 business days. These loans are based on revenue and growth potential rather than credit scores alone, with terms of 6-24 months. Modern working capital loans are often called merchant cash advances (MCAs) and can be used for inventory, marketing, hiring, or bridging payment term gaps.'
  },
  {
    id: 'how-much-cost-wc-loan',
    q: 'What is the cost of working capital loans?',
    a: 'Costs typically range from 1.5-4% per month (18-48% annualized) depending on creditworthiness, revenue, and who negotiates on your behalf. Strong credit (700+), established businesses (3+ years), and growing revenues get lower rates (18-25% APR), while newer businesses or cash flow challenges face higher rates. Serve Funding fights hard to negotiate 10-20 percentage point reductions compared to going direct to lenders.'
  },
  {
    id: 'can-use-wc-for-growth',
    q: 'Can I use working capital loans for growth investments?',
    a: 'Absolutely. Working capital loans are ideally suited for growth—it takes money to make money. Businesses use them to fund inventory buildup, hire ahead of revenue, invest in marketing and sales, enter new markets, and purchase equipment. A $500K loan invested in inventory, marketing, and staff can generate $2MM in new revenue with strong ROI when the business model is proven and market demand is validated.'
  },
  {
    id: 'what-if-cash-flow-irregular',
    q: 'What if my cash flow is irregular or seasonal?',
    a: 'Seasonal and irregular cash flow don\'t disqualify you—they\'re actually perfect reasons to seek working capital. Businesses need financing to maintain payroll and inventory during slow periods while preparing for busy ones. Revolving lines of credit, working capital loans, and invoice factoring all work well for seasonal businesses. Landscaping, retail, hospitality, and tourism companies commonly use working capital to bridge seasonal gaps.'
  },
  {
    id: 'can-get-wc-for-payroll',
    q: 'Can I get working capital for payroll emergencies?',
    a: 'Absolutely. Payroll emergencies from delayed customer payments, depleted cash reserves, or unexpected expenses are common drivers for working capital. When payroll is due but cash flow hasn\'t caught up, time isn\'t just money—it\'s team trust and operational stability. We can fund payroll emergencies in 1-2 business days through short-term bridge loans or invoice factoring without exploiting your urgency.'
  },
  {
    id: 'what-credit-score-needed',
    q: 'What credit score do I need for business financing?',
    a: 'Credit score requirements vary by solution. Asset-based lending and invoice factoring focus on collateral value (550+ credit often acceptable). Term loans and lines of credit typically require 600-650+ for approval. Debt refinancing and MCA consolidation can work with 550+ if you have strong revenue and assets. The key advantage of alternative financing is that credit score is just one factor—revenue, assets, and business trajectory matter more.'
  }
]

// ============================================================================
// ALL FAQs COMBINED
// ============================================================================

export const allFAQs: FAQ[] = [
  ...aboutServeFundingFAQs,
  ...workingCapitalFAQs
]
