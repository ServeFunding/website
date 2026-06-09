# Batch A drafts — working-capital-loans, invoice-factoring, debt-refinance

> Draft prose intended to replace `fullDesc` / `features` / `bestFor` in `src/data/solutions.tsx` and seed new entries in `src/data/faq-data.ts`. Voice: Mike (Michael Kodinsky), founder of Serve Funding. Sources: `docs/mike-voice-patterns.md`, `docs/product-explanations.md`, `docs/industry-scripts.md`, `_source-extractions/batch1-construction-staffing.md`, `_source-extractions/batch5-sba-referout-wip.md`. No prospect names included — every real-deal reference has been anonymized to industry + size + scenario.

---

## working-capital-loans

### fullDesc (Mike's voice, narrative)

Here's the deal with a working capital loan: it's the fastest tool in our toolbox, and it's the one we reach for when a business is fundamentally healthy but the calendar is the enemy — payroll is Friday, the receivable lands the 15th, and a bank can't move in three days. We underwrite this product out of what I call the second of two underwriting buckets — not asset-based, but cash-flow-based. The lender is looking at your trailing twelve months of revenue, the consistency of your deposits, and whether the business has the bandwidth to absorb a fixed monthly payment without choking. As of 2026, sizing usually lands at roughly 10%–15% of annual revenue.

The piece I want to be very transparent about is what this product isn't. It isn't a merchant cash advance. MCAs are a drug. People get addicted, then they stack, and what started as a Band-Aid turns into a tourniquet two refis later. The revenue-based product we use here has *monthly* payments — not daily, not weekly extractions from your sales — and good versions of it include real prepay forgiveness, so if you pay it off early, you actually save money. That single design difference cuts the true APR roughly in half versus a typical MCA, and it keeps your operating cash flow intact while you put the capital to work.

A clean example, sanitized: a Northeast staffing agency doing about $13MM in revenue got declined by their bank on the owner's personal credit. They had a million dollars in receivables but payroll was every two weeks and clients paid net-45. We bridged them with a revenue-based line in under a week — single-digit weeks of runway turned into months — while we built out a permanent AR-based facility behind it. That's the "one-then-three" sequencing we use a lot: a fast working capital loan now, a structured asset-based line in six to eight weeks once the underwriting is done.

Where this product is the right answer: you're profitable or close to it, your receivables aren't large enough or commercial enough to anchor a real AR facility, and you need money in days, not months. Where it isn't: you've already got MCAs stacked, your trailing deposits are sliding the wrong direction, or you're trying to fund an acquisition. Those need a different tool. We'd rather tell you that up front than waste your time — because time is the only resource you can't make more of.

### features

- Loan sizes from $100K to $10MM+, sized at roughly 10–15% of annual revenue
- Monthly payments — not daily or weekly extractions from sales like an MCA
- Terms of 6–48 months, with revolving line structures available from select lenders
- Funding in 2–10 business days; emergency payroll situations have closed in 24–72 hours
- Pricing 1.25%–4% per month all-in; the best-priced revolving versions sit in the mid-teens true APR
- Real prepay forgiveness on the better products — pay off early, save the unused interest
- Subordinate options that don't require senior lien position (will sit behind an existing factor or ABL)
- Underwritten on revenue history and deposit consistency, not on credit score gates or hard assets
- Personal credit matters more here than in asset-based lending — clean 680+ FICO meaningfully widens options
- Used as the "step one" bridge while a slower asset-based facility (ABL, factoring, SBA) underwrites in parallel
- A consistent 3-month run of healthy deposits is the practical gate — a soft December tells a story lenders don't want to see

### bestFor

- Payroll bridge gaps: Friday payroll, receivable lands the 15th
- Seasonal revenue businesses pre-funding the next peak (e-comm pre-Q4, contractors pre-spring)
- Fast-growing companies whose sales have outpaced their bank line ceiling
- Businesses declined by a bank on credit-score or DSCR grounds where the underlying revenue is solid
- Bridge financing while a permanent ABL or factoring facility underwrites in parallel (the "one-then-three" play)
- New-customer order financing when you need to staff up or buy materials before the first invoice goes out
- Cleaner-than-MCA replacement for businesses with one or two existing advances they want to clear out
- Acquisition or M&A timing gaps where speed matters more than the lowest possible rate

### FAQ candidates

```typescript
{
  id: 'wc-loan-vs-mca',
  q: 'How is a working capital loan different from a merchant cash advance?',
  a: 'A working capital loan from Serve Funding has monthly payments, real prepay discounts, and a true APR roughly half of a typical MCA. MCAs take daily or weekly extractions from your sales and have no meaningful prepay benefit, which is why they tend to stack — businesses borrow another to pay the first. Our working capital product is designed to be paid off and walked away from, not refinanced into a worse position.',
  relatedSolutions: ['working-capital-loans']
},
{
  id: 'wc-loan-size',
  q: 'How much working capital can I borrow?',
  a: 'As of 2026, working capital loans typically size at 10–15% of your annual revenue, with a practical range of $100K to $10MM+. A $5MM revenue business should expect $500K–$750K of capacity on a clean profile. We always ask what the perfect-world ask is and what the minimum is to make it make sense — those two numbers shape which lender we go to first.',
  relatedSolutions: ['working-capital-loans']
},
{
  id: 'wc-loan-speed',
  q: 'How fast can a working capital loan fund?',
  a: 'A typical working capital loan funds in 2–10 business days from approval. Emergency situations — like a payroll that has to clear in 72 hours — can close inside a week if the deposit history and documentation are clean. The fastest closings happen when the business has at least three months of consistent deposits and no recent MCA activity gumming up the picture.',
  relatedSolutions: ['working-capital-loans']
},
{
  id: 'wc-loan-credit-score',
  q: 'Do I need good personal credit for a working capital loan?',
  a: 'Personal credit matters more in cash-flow underwriting than it does in asset-based lending — a clean 680+ FICO opens meaningfully better pricing. That said, the primary gate is the strength and consistency of your trailing revenue, not the score alone. If credit is the only weak point and the business is solid, we still have lenders who will get the deal done.',
  relatedSolutions: ['working-capital-loans']
},
{
  id: 'wc-loan-bridge-to-abl',
  q: 'Can a working capital loan bridge to a cheaper facility later?',
  a: 'Yes — this is what we call the one-then-three approach. A fast revenue-based working capital loan stabilizes the business in under a week while we build out a permanent asset-based line, factoring facility, or SBA loan in parallel over the next 6–8 weeks. We negotiate the working capital terms so there is no prepayment penalty when the cheaper structure takes over.',
  relatedSolutions: ['working-capital-loans', 'asset-based-lending', 'invoice-factoring']
}
```

---

## invoice-factoring

### fullDesc (Mike's voice, narrative)

Invoice factoring is, hands down, the product I explain most often on a discovery call — because once you see the mechanics, it makes more sense than almost anything else in the alternative-lending world. Here's how I usually walk through it: a receivable is an asset. You did the work, you sent the invoice, the customer's promise according to the agreement is that they'll pay you in 30, 60, or 90 days. A factor steps into that picture as a third party — almost like a triangle between you, your customer, and them. They buy the receivable from you at a slight discount, advance you 80–95 cents on the dollar within a day or two, and the remaining held-back portion gets remitted to you, less their fee, when the customer pays. Does that make sense as a general mechanic? Most people get it on the first pass.

Two things that surprise people. First, it's not a loan. It's a recurring sale of an asset, so it doesn't show up on the balance sheet as debt — which matters if you've got bank covenants or you're trying to keep the picture clean for an acquirer. Second, the line acts like water in a cup: as your customers pay, the line refills, and you can draw against new invoices the day you upload them to the portal. The lender sets up what's called a lockbox — a separate bank account in your name where customer payments land — and they sweep it. Your customer pays a slightly different remit-to address; that's the only operational change for them, and most A/P departments handle a few hundred a year.

As of 2026, advance rates run 75%–95%, factor fees are typically 0.25%–1.5% per invoice, and facility sizes run $250K to $100MM. The pricing depends heavily on which underwriting bucket you fall into. Factors don't weight personal credit much — they care about *your customer's* credit (we call them the account debtors). That's the killer reframe for staffing agencies, manufacturers selling to blue-chip OEMs, and government subcontractors who got a bank "no" on owner credit: the bank was looking at the wrong picture. A sanitized example — a Northeast staffing agency at $13MM in revenue, declined by their bank on the owner's personal credit, got a 90% advance rate at prime-plus-two within four weeks because the underlying receivables were to hotels, restaurants, and the U.S. government. The credit lens shifted, and the deal got done.

The places factoring doesn't work: direct-to-consumer businesses (no commercial B2B AR), construction with heavy retainage and lumpy 3-customer concentration, and businesses where the AR balance just isn't big enough to support a facility — under about $250K in steady AR, the economics get thin for both sides. We'll tell you straight if your AR profile doesn't fit. That's part of being here to serve.

### features

- Facility sizes from $250K to $100MM, scaling automatically as your sales grow
- Advance rates of 75%–95% on eligible invoices; medical AR runs lower (65–70%) because of insurance discounting
- Pricing: factor fees of 0.25%–1.5% per invoice on the discount-rate model; combined-fee structures run Prime + 1–6% on borrowed funds
- Not a debt product on your balance sheet — it's a recurring sale of an asset
- Self-liquidating revolving line: as customers pay, the line refills like water in a cup
- Lockbox or DACA account set up in your name; lender sweeps customer payments directly
- Underwritten primarily on the credit of your customers (account debtors), not on owner personal credit
- Funding typically 24–48 hours after invoice upload; full facility setup runs 3–4 weeks
- Validity guarantee in lieu of personal guarantee on many deals — you're only liable if there's fraud or misrepresentation
- Selective or full-turn factoring options — you can choose which invoices to fund or run the whole book
- Mid-stream facility raises happen fast (often in days) once the lender knows your account debtors
- Distressed-company pricing runs higher (mid-teens to 18%+ all-in); cleaner profiles get below 14%, sometimes 12–13%
- Bank-owned factors are more rigid but cheaper; non-bank factors are more flexible and slightly pricier

### bestFor

- Staffing agencies with weekly or bi-weekly payroll against 30–60 day client receivables
- Manufacturers selling to blue-chip OEMs, distributors, or government primes on terms
- Government subcontractors waiting on assignment-of-claims and CO sign-offs
- Healthcare practices billing insurance (Medicare, Humana, Blue Cross) on 30–90 day cycles — uses specialized medical factoring
- Growing companies that have hit the ceiling on their bank line and need a facility that scales with sales
- Businesses declined by their bank on owner personal credit or thin profitability where the AR itself is high-quality
- Companies with loss tax returns but strong recurring invoices to creditworthy customers
- Bridge facility for a company on the way to a bank-owned ABL in 6–12 months
- Acquired businesses where the new ownership wants to keep operating debt off the balance sheet

### FAQ candidates

```typescript
{
  id: 'factoring-vs-abl',
  q: 'What is the difference between invoice factoring and asset-based lending?',
  a: 'Factoring and ABL are cousins — both are revolving lines secured by your receivables, often with an inventory add-on. The key difference is that factoring is not a debt product. It is a recurring sale of an asset, so it does not show up on your balance sheet as debt and personal guarantees are often replaced with a validity guarantee. ABL is a true line of credit on the balance sheet and tends to price lower for businesses that qualify, but it takes 6–8 weeks to set up versus 3–4 weeks for factoring.',
  relatedSolutions: ['invoice-factoring', 'asset-based-lending']
},
{
  id: 'factoring-customer-notification',
  q: 'Will my customers know I am factoring my invoices?',
  a: 'Your customer is aware in the sense that their A/P team will be told to send payments to a new bank account — typically still in your company name on the remit-to. Most factors do not require you to disclose that you are factoring; you can simply say you have a new collections partner. The factor will make a couple of verification calls at the start of the relationship to confirm the invoice is real, and then the operational change for your customer is essentially a different routing number.',
  relatedSolutions: ['invoice-factoring']
},
{
  id: 'factoring-cost-comparison',
  q: 'How much does invoice factoring actually cost on an annual basis?',
  a: 'As of 2026, a clean profile runs 12–14% all-in on an annualized basis; middle-of-the-road distressed companies sit at 18% or so; and harder cases can run into the mid-twenties. A common term-sheet structure is 1.5% for the first 30 days plus 0.5% every 10 days thereafter, which translates to roughly 18% APR if your customers pay in 30 days and higher if they stretch. Watch for layered fees — some factors quote a low discount rate but add a separate rate on borrowed funds. We always do the all-in math before signing.',
  relatedSolutions: ['invoice-factoring']
},
{
  id: 'factoring-personal-credit',
  q: 'Does my personal credit score matter for invoice factoring?',
  a: 'Not nearly as much as it does in cash-flow lending. Factors underwrite on the credit of your account debtors — the customers who owe you money — because that is who actually pays them. Owners with bruised credit who got declined by a bank on FICO grounds can absolutely qualify for factoring if their customer mix is strong. This is the single most common bank-decline reframe we run.',
  relatedSolutions: ['invoice-factoring']
},
{
  id: 'factoring-for-construction',
  q: 'Does invoice factoring work for construction companies?',
  a: 'Often not as cleanly as people expect. Construction AR tends to be thin relative to revenue, concentrated in three or four large customers, with milestone billing and retainage holdbacks of 10% sitting out six to twelve months. A factor wants steady, recurring, lots-of-customers AR — construction usually has the opposite shape. For construction, we more often pivot to MCA consolidation into a true-term product, a real-estate-backed bridge on owned land, or job-mobilization financing that covers upfront materials and labor.',
  relatedSolutions: ['invoice-factoring', 'debt-refinance', 'real-estate-lending']
}
```

---

## debt-refinance

### fullDesc (Mike's voice, narrative)

Let me say this first, because it matters: we don't shame anyone for being in MCA debt. Sometimes that's the only thing that kept the lights on through a payroll, a lost contract, a slow-paying customer, a tariff shock. Real businesses make real decisions in real time, and an MCA at 2 a.m. when payroll clears on Thursday is a survival choice, not a character flaw. Our job is to get you out cleanly, not to lecture you.

That said — here's the honest read. MCAs are like a drug. They're addictive. People stack them — two, then three, then six — and each one makes the next harder to dig out of because they're taking daily or weekly bites out of your sales while you're still trying to operate. By the time most clients call us, the true APR on their stack is somewhere between 50% and the triple digits. Most don't know that. When you do the math out loud, it's sobering.

Here's how we think about getting out. I tell clients it's not a single leap from the basement to the first floor — it's a few steps up the ladder. The first move is usually a true-term loan product: monthly payments, two-year term, somewhere around 18%–20% APR. That's not amazing, but it's a real loan, it doesn't trigger MCA warnings in future lenders, and it cuts the cash bleed roughly in half almost overnight. From there, with twelve months of clean payment history, we can often refinance again into asset-based lending, a non-bank SBA, or a bank ABL — *that's* the first floor.

The mechanics matter. A real consolidation lender is, in effect, doing you a favor — taking on debt that other people priced as risky and pricing it lower because they believe in your business. They want to see real assets, a real plan, and a real reason this won't be a Band-Aid that gets peeled off two weeks later. So we build the case: 13-week cash flow forecast, a math-driven explanation (not a story, a *math* story) for why you'll be fine going forward, and ideally a piece of leverage they can underwrite against — receivables, real estate equity, free-and-clear equipment, or in some cases just clean owner credit with a 680+ FICO. As of 2026, we see monthly debt service typically cut 30%–50% and the all-in rate drop 5–10 percentage points on the first refinance step.

Two cases where we won't pretend we can help. First, if you're three or more MCAs deep with no commercial receivables, no real estate equity, and a credit profile under 600 — the math doesn't get to a yes through conventional refi. In those cases, sometimes the right honest answer is a Home Equity Advance on the owner's residence (if available), and in true crisis scenarios, an Article 9 sale — a pseudo-bankruptcy alternative that wipes the slate. Second, if the deal is small — sub-$50K — the volume just isn't there for institutional lenders to bother. We'll tell you straight. Half of something is better than all of nothing, and an honest "no" is better than three months of false hope.

### features

- Consolidates multiple MCAs, expensive term loans, and overlapping credit lines into a single product
- Typical first-step refi: true-term loan, monthly payments, 18–36 month term, roughly 18%–22% APR
- Better second-step refi (12+ months later): asset-based line, ABL, or non-bank SBA at single-digit to low-teens rates
- Monthly debt service typically reduced 30%–50% on the first refi step
- All-in cost of capital typically drops 5–10 percentage points versus a stacked MCA position
- Deal sizes from $250K to $10MM+, with smaller deals (sub-$100K) usually requiring a HELOC or Home Equity Advance instead
- Close in 10–20 business days for clean profiles; longer if a real estate or asset appraisal is in the path
- Will sometimes take out 2–3 MCA positions in a single tranche; rare to take all positions if the stack is six-plus deep
- Will sit subordinate to an existing SBA 7(a) loan — SBA lenders usually consent to subordinate for an AR-backed working capital tranche
- Real-estate-backed bridge structures available where owner has free-and-clear property or significant home equity
- A 13-week cash flow forecast and a math-driven recovery plan are practically required to get to a yes
- Spot/single-invoice factoring exists at 3% flat for 30 days for sub-prime borrowers needing one-off liquidity
- No more daily or weekly sweeps — payments shift to monthly on the better products

### bestFor

- Businesses 1–3 MCAs deep that need to step up the ladder before they get pulled under
- Companies whose monthly payments have outgrown their ability to operate (cash bleed from daily ACH sweeps)
- Owners with strong commercial receivables, free-and-clear equipment, or home equity who can secure the refi against a real asset
- Businesses whose MCAs were triggered by a one-time shock (lost contract, payroll spike, tariff shift) — fundamentals are sound
- Companies preparing for an SBA application 6–12 months out who need to clear MCAs off the file first
- Construction subs with progress-billing carry burdens that snowballed into MCA stacks
- Manufacturers and importers hit by tariff or supply-chain shocks that took capital out of cycle
- Acquisition targets where the seller's debt structure needs to clean up before close
- Multi-loan companies with overlapping bank line, equipment loans, and trade payables wanting a single restructure

### FAQ candidates

```typescript
{
  id: 'mca-refi-qualify',
  q: 'How do I qualify for an MCA consolidation loan?',
  a: 'The honest gate is: real assets or real equity to underwrite against, plus a 13-week cash flow forecast that shows the math works going forward. Commercial receivables, free-and-clear equipment, or home equity are the most common anchors. We also look at how many MCA positions are open, how recently the last one was taken, and whether the underlying business is fundamentally healthy. Three or more MCAs deep with no collateral is the hardest case — sometimes the right answer there is a Home Equity Advance instead of a conventional refi.',
  relatedSolutions: ['debt-refinance']
},
{
  id: 'mca-refi-cost-savings',
  q: 'How much can I save by refinancing my MCA debt?',
  a: 'As of 2026, our typical first-step refi cuts monthly debt service by 30%–50% and drops the all-in rate by 5–10 percentage points. A business paying $15K a month in MCA fees often ends up around $8K a month on a true-term loan, freeing up $7K monthly for actual operations. A second refi twelve months later, into an ABL or SBA structure, can take another 5–10 points off the rate.',
  relatedSolutions: ['debt-refinance']
},
{
  id: 'mca-refi-multiple-positions',
  q: 'Can you pay off all of my MCAs at once?',
  a: 'Usually we can take out two or three positions in a single refi tranche. Six positions deep is rare to clear in one move — that is where we use the basement-to-first-floor analogy. The first step is a few rungs up the ladder, not the whole climb. With six to twelve months of clean payment history on the new product, we can come back and refinance again into a meaningfully cheaper structure.',
  relatedSolutions: ['debt-refinance']
},
{
  id: 'mca-refi-vs-new-mca',
  q: 'How is a Serve Funding refinance different from another MCA reverse consolidation?',
  a: 'A reverse consolidation is just another MCA dressed up — same daily sweeps, same factor-rate math, often the same lenders behind the curtain. Our refinance products have monthly payments, real prepay forgiveness, longer terms (24+ months versus the typical MCA 6–12), and a true APR that is roughly half. The goal is to get you off the daily-sweep treadmill, not to extend it.',
  relatedSolutions: ['debt-refinance']
},
{
  id: 'mca-refi-credit-impact',
  q: 'Will refinancing my MCAs hurt my credit?',
  a: 'On its own, no — most MCAs do not report to traditional credit bureaus, and the new term product we put in place is structured to be reportable in a healthy way. The bigger credit lever is what comes after: once you have 12 months of clean monthly payments on a real loan, you start to look refinanceable to bank-owned ABL desks, SBA lenders, and non-bank SBA programs. That second refi step is where the meaningful credit and cost improvement compounds.',
  relatedSolutions: ['debt-refinance']
}
```
