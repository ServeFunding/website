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
    a: 'Seasonal and irregular cash flow don\'t disqualify you—they\'re actually perfect reasons to seek working capital. Businesses need financing to maintain payroll and inventory during slow periods while preparing for busy ones. Revolving lines of credit, working capital loans, and invoice factoring all work well for seasonal businesses. Landscaping, retail, hospitality, and tourism companies commonly use working capital to bridge seasonal gaps.',
    relatedSolutions: ['working-capital-loans', 'invoice-factoring', 'asset-based-lending']
  },
  {
    id: 'can-get-wc-for-payroll',
    q: 'Can I get working capital for payroll emergencies?',
    a: 'Absolutely. Payroll emergencies from delayed customer payments, depleted cash reserves, or unexpected expenses are common drivers for working capital. When payroll is due but cash flow hasn\'t caught up, time isn\'t just money—it\'s team trust and operational stability. We can fund payroll emergencies in 1-2 business days through short-term bridge loans or invoice factoring without exploiting your urgency.',
    relatedSolutions: ['working-capital-loans', 'invoice-factoring', 'bridge-funding']
  },
  {
    id: 'what-credit-score-needed',
    q: 'What credit score do I need for business financing?',
    a: 'Credit score requirements vary by solution. Asset-based lending and invoice factoring focus on collateral value (550+ credit often acceptable). Term loans and lines of credit typically require 600-650+ for approval. Debt refinancing and MCA consolidation can work with 550+ if you have strong revenue and assets. The key advantage of alternative financing is that credit score is just one factor—revenue, assets, and business trajectory matter more.',
    relatedSolutions: ['asset-based-lending', 'invoice-factoring', 'working-capital-loans', 'debt-refinance']
  },

  // RBF/MCA Critical Questions
  {
    id: 'mca-vs-rbf-which-to-use',
    q: 'Should I use MCA or RBF—and what\'s the difference?',
    a: 'The core difference: MCAs take daily or weekly cuts from your card sales (typically 10-20%), while RBF takes a fixed monthly percentage (typically 5-15%) that scales with revenue. MCA hits hardest on slow days and weekends when you need cash most; RBF is predictable regardless of daily fluctuations. Working capital loans (RBF) at 1.25%-4% per month typically cost 30-50% less than MCA, making them the better choice for sustainable growth.',
    relatedSolutions: ['working-capital-loans', 'invoice-factoring', 'debt-refinance']
  },

  {
    id: 'mca-factor-rate-real-cost',
    q: 'What is an MCA factor rate, and how much will it actually cost me?',
    a: 'Factor rates hide true costs—a "1.3 factor rate" means you owe $130K on a $100K advance, which looks like 30% but is actually much higher depending on repayment speed. Over 5-6 months, that 1.3x factor rate translates to roughly 50-80%+ APR; over 3 months, it\'s significantly higher. By comparison, invoice factoring at Prime + 1-6% or working capital loans at 1.25%-4% monthly give you transparent pricing you can actually compare.',
    relatedSolutions: ['debt-refinance', 'invoice-factoring', 'working-capital-loans']
  },

  {
    id: 'mca-daily-payments-cash-flow',
    q: 'Why do MCA daily payments destroy cash flow?',
    a: 'Because MCA pulls from revenue you haven\'t stabilized yet—if 15% of daily card sales goes to MCA, slow days still require full pulls even when you\'re short on cash. Real scenario: staffing agencies need cash on Monday before weekend payroll, but if Monday is light, they\'re still short. This creates a debt spiral where you take a second or third MCA just to cover payroll, and suddenly you\'re extracting 60%+ of revenue just to service debt. We\'ve helped dozens escape this trap through debt refinancing into single monthly payments that free up 30-50% of what they were paying.',
    relatedSolutions: ['debt-refinance', 'working-capital-loans', 'invoice-factoring']
  },

  {
    id: 'how-to-escape-mca-process',
    q: 'How do I actually escape MCA debt?',
    a: 'Stop taking new advances immediately, then refinance your balance into a term loan, asset-based line, or invoice factoring—typically closing in 10-20 business days. We shop your situation across 30+ lenders because your invoices, AR, and revenue are real collateral; most clients qualify for solutions that cost 10-20 percentage points less annually than their current MCA. Real example: a staffing company paying $15K/month in MCA fees refinanced into an $8K/month term loan, freeing up $7K monthly for growth.',
    relatedSolutions: ['debt-refinance', 'asset-based-lending', 'invoice-factoring']
  },

  {
    id: 'mca-red-flags-predatory-lender',
    q: 'How do I spot a predatory MCA lender?',
    a: 'Red flags include high-pressure sales ("offer expires at 5 PM"), refusing to explain factor rate math or APR, non-negotiable daily pulls, prepayment penalties, and confession of judgment clauses. Good lenders ask about your business, disclose APR upfront, and let you shop around without pressure. When in doubt, have us review the terms before you sign—we spot predatory language regularly.',
    relatedSolutions: ['debt-refinance']
  },

  {
    id: 'rbf-vs-traditional-loan-when-use',
    q: 'When should I use RBF instead of a bank loan?',
    a: 'Use RBF when you\'re growing faster than banks can approve, your tax return doesn\'t match current revenue, or you\'ve maxed your bank line but are still scaling. Banks typically approve in 4-8 weeks; RBF closes in 1-2 weeks and adapts to revenue growth. RBF costs more (1.25%-4% monthly) than bank loans (typically 6-12% APR), so our advice is always bank first if your banker can help—but RBF when they can\'t keep up with your growth.',
    relatedSolutions: ['working-capital-loans', 'invoice-factoring']
  },

  {
    id: 'mca-consolidation-what-happens',
    q: 'If I consolidate MCA debt, what happens to my daily payments?',
    a: 'They stop immediately—you pay off the MCA and refinance into a single monthly term payment, typically 30-50% lower than what you were paying in daily MCA fees. Real example: $150K MCA balance with daily extractions owed roughly $195K total; refinanced to a term loan that costs $7K/month instead of $32K/month. The key is acting before cash flow becomes too constrained—contact us as soon as you realize MCA payments are unsustainable.',
    relatedSolutions: ['debt-refinance', 'asset-based-lending', 'working-capital-loans']
  }
]

// ============================================================================
// SOLUTION-SPECIFIC FAQs
// ============================================================================

export const solutionSpecificFAQs: FAQ[] = [
  // Asset-Based Lending
  {
    id: "what-is-abl",
    q: "What is asset-based lending?",
    a: "Asset-based lending (ABL) is a flexible credit line that lets you borrow against your company's assets like accounts receivable, inventory, equipment, and real estate.",
    relatedSolutions: ["asset-based-lending"]
  },
  {
    id: "how-much-can-borrow-abl",
    q: "How much can I borrow with ABL?",
    a: "Most typical ABL asset-based lenders start their facilities sizes from 3-5 million and up. However, at Serve Funding, we can facilitate ABL lines from as low as $250K. Advance rates are: 70-90% of accounts receivable, 50-75% of inventory, and 40-70% of equipment.",
    relatedSolutions: ["asset-based-lending"]
  },
  {
    id: "abl-rates",
    q: "What are typical ABL rates?",
    a: "Interest rates typically range from Prime + 1% to Prime + 5%. You may also pay a facility fee and monthly service fees.",
    relatedSolutions: ["asset-based-lending"]
  },

  // Invoice Factoring
  {
    id: "what-is-invoice-factoring",
    q: "What is invoice factoring?",
    a: "Invoice factoring is when you sell your unpaid B2B invoices to a factor for immediate cash. You get 75-95% of invoice value within 24-48 hours instead of waiting 30-90 days. Unlike a term loan, factoring is self-liquidating—as customers pay, the debt automatically decreases.",
    relatedSolutions: ["invoice-factoring"]
  },
  {
    id: "how-quickly-cash-factoring",
    q: "How quickly can I get cash?",
    a: "Approval typically takes 2-3 weeks. Once approved, you receive 75-95% of invoice value within 24-48 hours. Our real example: healthcare supply manufacturer approved and funded in 3 weeks, then expanded from $1MM to $1.5MM within 2 months as sales grew.",
    relatedSolutions: ["invoice-factoring"]
  },
  {
    id: "tax-return-factoring",
    q: "Can I get factoring if my tax return shows a loss?",
    a: "Yes! This is one of factoring's biggest advantages over traditional bank loans. Banks look at tax returns. We look at invoices. If your customers are paying reliably and your invoices are strong, your tax return doesn't disqualify you. Your invoice quality and customer creditworthiness are what matter.",
    relatedSolutions: ["invoice-factoring"]
  },
  {
    id: "factoring-vs-bank-loan",
    q: "Why is factoring better than a bank line of credit?",
    a: "Factoring is self-liquidating (debt decreases as customers pay), scales automatically with your sales, has no balance sheet impact, and doesn't require collateral beyond your invoices. Banks require strong credit, tax returns, and collateral—and their rates are often higher. A real example: one client got Prime + 2% on AR factoring (single-digit when combined), vs. traditional bank rates of 8-13%.",
    relatedSolutions: ["invoice-factoring"]
  },
  {
    id: "factoring-selective",
    q: "Do I have to factor all my invoices?",
    a: "No. Selective factoring lets you choose which invoices to factor and which to collect yourself. This flexibility is perfect for businesses with mixed payment terms or situations where you only need cash during specific periods.",
    relatedSolutions: ["invoice-factoring"]
  },

  // Working Capital Loans
  {
    id: "what-is-wc-loan",
    q: "What is a working capital loan?",
    a: "Short-term financing for day-to-day operational expenses: payroll, inventory, accounts payable. Working capital loans focus on a company's historical revenue, rather than credit scores and the company's assets.",
    relatedSolutions: ["working-capital-loans"]
  },
  {
    id: "how-fast-approval-wc",
    q: "How fast can I get approved and funded?",
    a: "Working capital loans are the fastest funding product. Approval typically takes 1–3 business days, with funding within 2–10 business days of approval.",
    relatedSolutions: ["working-capital-loans"]
  },
  {
    id: "wc-loan-cost",
    q: "What does it cost?",
    a: "You can expect to pay anywhere from 1.25% to 4% per month for these products. The rates vary depending upon a number of factors, such as industry, time in business, and profitability.",
    relatedSolutions: ["working-capital-loans"]
  },
  {
    id: "rbf-approval-funding",
    q: "What is the fastest timeline for RBF?",
    a: "Revenue-based financing is the fastest funding product. Approval typically takes 1–3 business days with funding within 1–5 business days of approval.",
    relatedSolutions: ["working-capital-loans"]
  },

  // Purchase Order Funding
  {
    id: "po-international-suppliers",
    q: "Can PO financing work with international suppliers?",
    a: "Yes. PO financing specifically supports payments to overseas suppliers (China, India, Vietnam, etc.). This is especially valuable when managing tariff costs—you can negotiate bulk discounts upfront and use PO financing to fund the larger order, offsetting tariff expenses.",
    relatedSolutions: ["purchase-order-funding"]
  },
  {
    id: "po-tariff-management",
    q: "How does PO financing help with tariff costs?",
    a: "When tariffs spike or change, bulk orders at lower per-unit costs can offset the tariff impact. PO financing lets you fund larger upfront orders without depleting working capital. Real example: an importer used their $1MM facility to bulk-order from suppliers before tariff changes, saving significantly on per-unit costs.",
    relatedSolutions: ["purchase-order-funding"]
  },
  {
    id: "po-wip-goods",
    q: "Does PO financing cover work-in-process (WIP) goods?",
    a: "Yes. PO financing covers work-in-process inventory, finished goods, and production materials. This is perfect for manufacturers who need to finance production before customer payment arrives.",
    relatedSolutions: ["purchase-order-funding"]
  },
  {
    id: "po-how-fast",
    q: "How quickly can I get PO financing?",
    a: "Approval typically takes 2-4 weeks. Once approved, funding releases in 5-10 business days for most orders. For established facilities, the process moves even faster—sometimes closing in 10-15 days total.",
    relatedSolutions: ["purchase-order-funding"]
  },

  // Government Contracts
  {
    id: "gov-contract-payment-timing",
    q: "How does government contract financing work with payment timing?",
    a: "Government contracts often have 30-90+ day payment terms (net-30, net-60, net-90, or quarterly). Contract financing covers your costs (materials, payroll, subcontractors) upfront, then is repaid when government payment arrives. Fast example: $500K in 20 business days for a contractor who won a federal GSA contract.",
    relatedSolutions: ["government-contracts"]
  },
  {
    id: "gov-contract-subcontractor",
    q: "Can subcontractors get government contract financing?",
    a: "Yes. Many subcontractors face the same timing gap—they perform work, then wait 30-60+ days for prime contractor or government payment. We fund subcontractors frequently. Qualification depends on strong POs and credit history of the paying entity.",
    relatedSolutions: ["government-contracts"]
  },
  {
    id: "gov-contract-retainage",
    q: "How do you handle retainage on government contracts?",
    a: "Government contracts often retain 5-10% of payments until project completion. Financing structures account for this. Some facilities factor the retainage separately or provide bridge coverage until final retainage payment arrives.",
    relatedSolutions: ["government-contracts"]
  },

  // Real Estate Lending
  {
    id: "cre-bridge-timing",
    q: "What is a bridge loan in real estate?",
    a: "A bridge loan is short-term real estate financing (12-36 months, interest-only common) used for timing gaps. Example: you're selling one property and need to close on another before the sale completes. Bridge financing covers the gap, then refinances from sale proceeds. Close in 2-3 weeks.",
    relatedSolutions: ["real-estate-lending"]
  },
  {
    id: "personal-asset-refi",
    q: "Can I refinance personal real estate for business needs?",
    a: "Yes. Business owners can use second mortgages on personal residences or real estate assets to fund business operations, provide stretch capital, or acquire real estate. We've structured $550K second mortgages using bank-statement-only approaches for business owners needing flexible qualification.",
    relatedSolutions: ["real-estate-lending"]
  },
  {
    id: "cre-cash-out",
    q: "Can I do a cash-out refinance and use it for working capital?",
    a: "Yes. Many business owners refinance commercial property at higher LTV to extract equity for working capital, acquisitions, or other business needs. LTV typically ranges 50-75% depending on property type and lender.",
    relatedSolutions: ["real-estate-lending"]
  },

  // Unsecured/Subordinated Debt
  {
    id: "bridge-vs-term-loan",
    q: "What's the difference between bridge capital and a term loan?",
    a: "Bridge capital is typically shorter-term (6-36 months), unsecured, and designed for specific timing gaps (acquisitions, M&A closings, seasonal needs). Term loans are longer (3-5 years), secured, and sit as permanent debt. Bridge is 'get in, get out' capital; terms loans are permanent structure. Real example: a surgeon used bridge financing for 90 days until hospital acquisition closed, then refinanced into permanent capital.",
    relatedSolutions: ["unsecured-debt"]
  },
  {
    id: "bridge-acquisition-timing",
    q: "How does bridge financing work for M&A?",
    a: "You need capital now but large payment arrives after closing. Bridge financing covers the gap. Interest-only options mean you pay interest during the bridge period, then refinance from deal proceeds. Typical timeframe: 90-180 days. We've closed $1.475MM M&A bridge in weeks.",
    relatedSolutions: ["unsecured-debt"]
  },
  {
    id: "unsecured-stretch-capital",
    q: "Can I get unsecured bridge capital without collateral?",
    a: "Yes, in many cases. Unsecured bridge loans don't require collateral, UCC filings, or (on some products) personal guarantees. Qualification depends on revenue history and growth trajectory. Growing companies with $1MM+ revenue often qualify for unsecured bridge capital.",
    relatedSolutions: ["unsecured-debt"]
  },
  {
    id: "layered-capital-strategy",
    q: "What is layered capital and how does it work?",
    a: "Layered capital combines multiple funding sources (e.g., AR revolver + unsecured term + second lien mortgage). This maximizes available capital for growth phases. Example: a medical device company used $1MM AR revolver + $240K unsecured term + $550K second mortgage = $1.79MM total capital over 10 months, enabling 30%+ growth.",
    relatedSolutions: ["unsecured-debt"]
  },

  // Bridge Funding
  {
    id: "bridge-when-use",
    q: "When should I use bridge funding?",
    a: "Bridge funding is ideal for timing gaps: awaiting contract closure, waiting for receivables, managing seasonal needs, or covering expenses before larger financing arrives.",
    relatedSolutions: ["bridge-funding"]
  },

  // Debt Refinance
  {
    id: "what-is-debt-refinance",
    q: "What is debt refinancing for businesses?",
    a: "Debt refinancing replaces your existing high-cost debt with new financing at better terms. It's commonly used to escape MCA debt traps, consolidate multiple loans, or simply reduce your total cost of borrowing.",
    relatedSolutions: ["debt-refinance"]
  },
  {
    id: "can-refinance-mca",
    q: "Can I refinance merchant cash advance debt?",
    a: "Yes. MCA refinancing is one of our most common solutions. We help businesses trapped in daily or weekly MCA payments consolidate into monthly term loans or lines of credit with significantly lower costs.",
    relatedSolutions: ["debt-refinance", "working-capital-loans"]
  },
  {
    id: "how-much-save-refinancing",
    q: "How much can I save by refinancing?",
    a: "Most clients reduce monthly payments by 30-50% and lower their total cost of capital by 5-10 percentage points annually. The exact savings depend on your current debt structure and available collateral.",
    relatedSolutions: ["debt-refinance"]
  }
]

// ============================================================================
// ALL FAQs COMBINED
// ============================================================================

export const allFAQs: FAQ[] = [
  ...aboutServeFundingFAQs,
  ...workingCapitalFAQs,
  ...solutionSpecificFAQs
]
