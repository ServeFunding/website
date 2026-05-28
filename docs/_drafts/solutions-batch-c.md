# Batch C drafts — purchase-order-funding, government-contracts, sba-loans

> Drafts for `src/data/solutions.tsx` written in Mike's voice from the Fathom-call corpus. All anonymized — no prospect names. Pair this draft with the existing `whatIs` capsule already in `solutions.tsx`; do not duplicate the capsule.

---

## purchase-order-funding

### fullDesc (Mike's voice, narrative)

Here's the deal with purchase order funding. You won the order. Congratulations. Now you need to pay a supplier — sometimes a deposit, sometimes 100% up front, sometimes it's an overseas vendor who wants their money before a single pallet leaves the factory — and your customer isn't going to pay you for another 60, 90, sometimes 120 days. So the money's stuck. It's literally trapped between you and your supplier, and the bank usually can't help you because there's no invoice yet — there's only a piece of paper that says someone *plans* to pay you.

A PO funder steps into that gap. They pay your supplier directly, in your supplier's terms, so you can actually go build the thing. Sometimes they front you a credit line with the supplier — say, $100K of product covered, anything beyond that you prepay — sometimes they wire the supplier directly on a per-order basis. Either way, the goal is the same: you get the materials, you build and ship, you invoice the customer, and the PO lender gets paid off at the moment that invoice is created.

That last piece is the part most folks miss. A PO lender doesn't *stay* in the deal once you invoice — they want to be paid off right then. Which means you need a takeout: either a factoring line or an AR line that funds when the invoice hits. We almost always set those up together, under one roof when we can. Pair PO with factoring and you've covered the whole cash-conversion cycle — the supplier side and the customer-pay side.

What does it cost? On the PO side, as of 2026, plan on 2% to 3% per 30 days. We have one group that can sometimes get you closer to 1.75%, which is almost unheard of. AR money on the back end is roughly half that — usually 1% to 1.5% per 30 days — because AR is closer to liquidity, less risk, less cost. If your cycle is 60 days PO plus 60 days AR, you're giving up something in the high single digits all-in. That's not nothing. But if it lets you say yes to an order you'd otherwise turn down, the math usually works.

PO funding isn't a fit for every manufacturer, though. If you're buying widgets from forty vendors to build one custom finished good — there's no clean PO-to-finished-product chain — that's not PO, that's work-in-process financing, and it's a different conversation. We'll tell you up front which one you're actually in.

### features

- Funds 70%–100% of a confirmed customer purchase order, as of 2026
- PO costs typically 2%–3% per 30 days; our network sometimes hits closer to 1.75%
- AR takeout on the back end runs roughly half the PO rate (closer to liquidity = less risk)
- Pays domestic and international suppliers directly, in their terms
- Works for drop-ship, warehouse-fulfilled, and overseas-sourced orders
- Pairs with invoice factoring to cover the full supplier-to-customer cash-conversion cycle
- Lender underwrites on the strength of the end-customer's credit, not yours
- Facility sizes typically $250K to $50MM
- Realistic timeline: factoring + PO combo placed in 2–3 weeks once documents are in
- Volume drives down cost — bigger, predictable PO flow earns better pricing
- Honest exclusion: PO funding generally doesn't fit custom manufacturers buying many components — that's WIP financing territory

### bestFor

- Manufacturers and wholesalers with a confirmed customer PO and a supplier that wants paid first
- Importers and distributors managing overseas supplier deposits or tariff exposure
- CPG brands fulfilling a large retailer or distributor PO with a tight cash-conversion cycle
- Government-contract suppliers self-funding production because there's no dealer flooring
- Businesses capped by a supplier's credit limit and needing to prepay anything above it
- Companies whose existing bank line can't accommodate a step-change in order size
- Operators with strong margins but lumpy AR who need to bridge the build cycle
- Businesses already running a factoring line that need a front-end add-on to fund production

### FAQ candidates

```typescript
{
  id: 'what-is-po-funding',
  q: 'What is purchase order (PO) funding and how does it work?',
  a: 'PO funding pays your supplier directly — domestic or overseas — so you can fulfill a confirmed customer order before you have customer cash in hand. The lender gets paid off the moment you invoice the end customer, which is why PO funding is almost always paired with a factoring or AR line as the takeout. As of 2026, expect 2%–3% per 30 days on the PO side and roughly half that on the AR back end.',
  relatedSolutions: ['purchase-order-funding', 'invoice-factoring']
},
{
  id: 'po-vs-factoring',
  q: 'What\'s the difference between PO funding and invoice factoring?',
  a: 'PO funding covers the period before you ship — it pays your supplier so you can build. Factoring covers the period after you ship and invoice — it advances cash against the receivable so you don\'t wait 60 or 90 days to get paid. They\'re not either-or; together they close the full cash-conversion cycle, and most growing manufacturers and importers use them as a pair.',
  relatedSolutions: ['purchase-order-funding', 'invoice-factoring']
},
{
  id: 'why-is-po-funding-more-expensive',
  q: 'Why does PO funding cost more than factoring?',
  a: 'PO money is further from liquidity, which makes it riskier for the lender. With factoring, an invoice already exists and a creditworthy customer has agreed to pay; with PO, the product hasn\'t even been built yet. That extra risk and longer float time is why PO sits around 2%–3% per 30 days while AR financing on the same deal runs closer to 1%–1.5%.',
  relatedSolutions: ['purchase-order-funding', 'invoice-factoring']
},
{
  id: 'po-funding-international-suppliers',
  q: 'Can PO funding pay overseas suppliers?',
  a: 'Yes — paying international suppliers in their own terms is one of the most common use cases. The lender wires the supplier directly, often before the goods ship, which is exactly what an overseas vendor needs to release production. This is especially useful when tariffs or supply-chain timing push you toward bulk orders that your existing line can\'t cover.',
  relatedSolutions: ['purchase-order-funding']
},
{
  id: 'po-funding-credit-requirements',
  q: 'Do I need strong personal credit to qualify for PO funding?',
  a: 'Not really — PO and AR lenders care most about the creditworthiness of the customer who issued the purchase order, not the owner\'s personal credit. If you\'re selling to a blue-chip customer, a national distributor, or a government entity, that anchors the deal. Mike\'s rule of thumb: bring us the PO, the supplier terms, and your last 12 months of revenue, and we can usually tell you on the first call whether it\'s workable.',
  relatedSolutions: ['purchase-order-funding', 'invoice-factoring']
}
```

---

## government-contracts

### fullDesc (Mike's voice, narrative)

Government contract financing is its own animal — and it's one of the most misunderstood corners of working capital, especially if you're a subcontractor sitting under a prime.

Here's the cash-flow physics. You won a federal, state, or local contract. The government doesn't pay deposits. They don't do dealer flooring. They want a direct contract with you, the operator, and they expect you to fund production out of pocket. Then — and this is the part that surprises first-time GovCon operators — the clock doesn't start when you deliver. It starts when the contracting officer accepts the delivery, after a sign-off, after the stickers and labels and acceptance documents are all squared away. Sixty days from *acceptance*, not from delivery, is a normal pay cycle. So you're realistically looking at a 60-day PO float plus a 60-day AR wait — 120 days of capital commitment on a single order, sometimes longer.

If the order's a staggered delivery — and most government POs are; they'll order 50 of something and ask for them in three batches across the year — that 120-day cycle repeats with each batch. You can do the math on what that does to your working-capital line.

Here's how we solve it. For most contracts, we set up a PO-plus-AR facility under one roof: PO money funds production, the AR line takes out the PO at invoice creation, and you've got a single revolving structure built around that government receivable. For shops where 100% of the revenue is GovCon, we go to a specialist lender — there's a handful of factors in the market who only do government work, and they're worth their weight in gold because they know assignment of claims, they know CO sign-off procedures, they know how to talk to a contracting officer. For shops that are mostly commercial with a slice of GovCon, a generalist AR lender usually does the job.

A note on subcontractors. This is the under-served part of the market. Most factors will not touch a sub-on-a-prime deal because the account debtor is technically another contractor, not the government — so the credit risk isn't the same as a direct federal AR. But our network includes lenders who specifically do GovCon-sub work, and the right structure can finance you against a prime's commitment, which a traditional factor simply won't.

Two practical notes. First, gov AR takes longer to set up than commercial AR — you have to file assignment of claims, get the CO's sign-off, and that's three to four weeks minimum. So if your billing is sporadic — milestone-based, with peaks and valleys — we usually set up a true facility with a small unused-line fee (50 basis points or so) rather than try to do this on a spot basis. Second, government slow-pay is normal — 30 to 45 days net is not alarming, it's just the rhythm. The whole point of this facility is to make that rhythm survivable.

### features

- Up to 90% advance against federal (GSA, DoD, civilian agencies), state, and local contract value, as of 2026
- Works for prime contractors *and* subcontractors-on-a-prime — including deals traditional factors won't touch
- Specialist GovCon lenders available for shops where 100% of revenue is government work
- PO + AR combo under one roof to cover the full pre-invoice and post-invoice cycle
- Handles staggered/batched delivery schedules typical of government orders
- Accommodates milestone billing — peaks and valleys are expected, not red flags
- Sporadic-billing facilities available with a nominal unused-line fee (~50 basis points)
- Built-in support for assignment of claims and contracting-officer sign-off process
- Pricing: AR side runs sub-mid-teens annualized; PO side runs mid-20s annualized for normal cycles
- Underwriting weighs the government receivable, not the operator's personal credit
- Realistic setup: 3–4 weeks for a true facility once assignment of claims is in motion
- Honest exclusion: spot/one-off GovCon factoring is rare — the procedural overhead makes a facility a better fit

### bestFor

- Prime contractors on federal, state, or local awards funding production before payment
- Subcontractors waiting 30–90+ days on a prime, including deals traditional factors decline
- OEMs forced to self-fund because the government client refuses dealer financing
- Federal staffing firms with weekly payroll and 30–60 day net government AR
- DoD or civilian-agency suppliers with milestone-based, lumpy billing
- 100% GovCon shops who need a lender that specializes in assignment of claims
- Mixed commercial/GovCon shops with a generalist AR line that won't extend to the gov slice
- Manufacturers running staggered delivery schedules and needing a revolving facility per batch

### FAQ candidates

```typescript
{
  id: 'gov-contract-financing-basics',
  q: 'How does government contract financing work?',
  a: 'A lender advances against the value of a federal, state, or local contract or receivable — usually up to 90% — so you can fund production and payroll before the government pays. The structure normally combines a PO line (covers materials and labor before invoice) with an AR line (covers the wait from invoice to payment). As of 2026, the full cycle is typically 60 days PO plus 60 days AR — about 120 days of capital commitment per order.',
  relatedSolutions: ['government-contracts', 'purchase-order-funding', 'invoice-factoring']
},
{
  id: 'subcontractor-on-a-prime-financing',
  q: 'Can subcontractors on a prime contract get financing?',
  a: 'Yes — and this is one of the most under-served corners of the market. Most traditional factors won\'t touch a sub-on-a-prime because the account debtor is another contractor rather than the government directly. Serve Funding works with lenders who specifically finance GovCon subcontractors against the prime\'s commitment, which opens up a category that\'s a hard no almost everywhere else.',
  relatedSolutions: ['government-contracts', 'invoice-factoring']
},
{
  id: 'why-government-payment-takes-so-long',
  q: 'Why does the government take so long to pay?',
  a: 'The clock doesn\'t start when you deliver — it starts when the contracting officer formally accepts the work, often after inspection and document sign-off. Sixty days from acceptance is normal across DoD, GSA, and most state and local agencies, and net-30 contracts frequently pay in 45. That timing isn\'t a sign of a problem; it\'s just the rhythm of government work, which is exactly why a PO+AR facility exists.',
  relatedSolutions: ['government-contracts']
},
{
  id: 'assignment-of-claims-explained',
  q: 'What is assignment of claims and why does it slow GovCon financing?',
  a: 'Assignment of claims is the legal process that lets a government payment be redirected from the contractor to a lender — it\'s the equivalent of a lockbox for commercial AR, but with federal paperwork attached. The contracting officer has to sign off, which typically adds three to four weeks of setup time. It\'s why government AR facilities are best set up before you desperately need them, with a small unused-line fee to keep the facility available for sporadic billing.',
  relatedSolutions: ['government-contracts']
},
{
  id: 'govcon-specialist-vs-generalist-lender',
  q: 'Should I use a GovCon-specialist lender or a generalist?',
  a: 'It depends on the mix. If 100% of what you do is government work, a specialist lender is almost always the right call — they understand assignment of claims, CO procedures, and milestone billing in a way generalists don\'t. If GovCon is a slice of a mostly commercial book — say, 10% to 30% — a generalist AR or ABL lender usually handles the whole portfolio, with the government receivables included.',
  relatedSolutions: ['government-contracts', 'invoice-factoring', 'asset-based-lending']
}
```

---

## sba-loans

### fullDesc (Mike's voice, narrative)

Let me be transparent about SBA, because that's the only way to talk about it honestly.

SBA loans are the cheapest capital most growing businesses will ever see. As of 2026, you're looking at prime plus 2% to 3%, terms up to 10 years for working capital and 25 years for real estate, government-guaranteed, with loan sizes from $250K up to a $5MM cap. Nothing else in the alternative-finance market comes close on price. If you fit the SBA credit box, SBA is almost always the first answer.

Here's the catch — and I'd rather tell you the catch on the first call than waste eight weeks of your time. The SBA process takes 4 to 12 weeks, sometimes longer. It requires two years of clean, profitable financial statements. The credit underwriting is bank credit underwriting — DSCR matters, owner credit matters, business credit matters. There are program-specific requirements: the 7(a) is the workhorse for general business purposes, the 504 is structured around fixed-asset purchases (real estate, big equipment), each with their own rules. And the SBA itself has rules about who can charge what, what fees are allowed, what's not — including a strict prohibition on brokers double-dipping between the bank and the borrower.

Because of that last piece, we don't originate SBA in-house at Serve Funding. We refer SBA out — every single one — to a former SBA banker who runs a dedicated SBA-only shop. We take a small share of his fee on the back end; he does the heavy lifting; you get someone whose entire practice is SBA. That's the right structure for a product this specialized.

When does SBA make sense? Acquisitions of profitable businesses (especially SBA 7(a) for owner-operator purchases), commercial real estate purchases with a meaningful equity injection (SBA 504), refinancing high-cost debt onto a 10-year amortization, and growth capital for established, profitable businesses with clean books. Where SBA doesn't work: you need money in the next 30 days, you've had a rough trailing 12 months, you're trying to bridge an equity gap with mezzanine (the SBA generally won't permit convertible mez), you're in turnaround mode, or your business doesn't have the two-year profitability story to tell.

What we do for the deals that *aren't* SBA fits, or that need bridge capital while SBA underwrites: we run a parallel track. Factoring, asset-based lending, a revenue-based bridge, real-estate cash-out — anything that gets you through the next eight to twelve weeks while a serious SBA underwriter does the real work. We've closed deals where the SBA loan and a bridge funded within the same month.

If SBA's the right fit, we'll send you straight to the specialist and stay close to make sure you're served well. If it's not, we'll tell you on the first call — and we'll have a real Plan B ready by the second.

### features

- Government-guaranteed loans from $250K to the SBA $5MM cap, as of 2026
- Pricing typically prime + 2%–3%, often the cheapest capital available
- Amortizations up to 10 years for working capital, up to 25 years for real estate
- 7(a) program for general business purposes (acquisitions, refi, working capital, equipment)
- 504 program for fixed-asset purchases (commercial real estate, large equipment)
- Strong fit for owner-operator business acquisitions
- Serve refers all SBA deals to a dedicated SBA-only specialist partner — no in-house origination
- SBA Form 159 disclosure handled in writing for full borrower transparency
- Bridge capital can run in parallel while the SBA underwrite completes
- Realistic timeline: 4–12 weeks, sometimes longer; not a fast-money product
- Requires roughly two years of clean financials and bank-style credit underwriting
- Honest exclusion: not a fit for distressed turnarounds, equity-gap mezzanine, or sub-30-day money

### bestFor

- Owner-operators acquiring an established, profitable small business
- Businesses purchasing commercial real estate they currently lease (SBA 504 territory)
- Established companies refinancing higher-cost debt onto a 10-year amortization
- Profitable businesses with two years of clean financials seeking lowest-cost growth capital
- Operators willing to trade 4–12 weeks of underwriting for prime + 2%–3% pricing
- Businesses needing $250K–$5MM that fit traditional bank credit profiles
- Buyers comfortable with a personal guarantee and standard SBA collateral requirements
- Operators who want a serious SBA specialist handling the file, not a generalist broker

### FAQ candidates

```typescript
{
  id: 'who-qualifies-for-sba',
  q: 'Who actually qualifies for an SBA loan?',
  a: 'SBA underwriting looks a lot like bank underwriting — two years of profitable, clean financials, reasonable owner credit, demonstrable cash flow to service the debt, and a business that fits the SBA credit box. If you check those boxes, SBA is almost always the cheapest capital available. If you don\'t — say you had a rough trailing 12 months, or you need money in the next 30 days — there are better-fit products to look at first.',
  relatedSolutions: ['sba-loans']
},
{
  id: 'sba-vs-alternative-financing',
  q: 'When is SBA better than alternative financing — and when isn\'t it?',
  a: 'SBA wins on price and term — prime + 2%–3% over 10 to 25 years is hard to beat. It loses on speed and flexibility. As of 2026, SBA underwriting is 4 to 12 weeks; asset-based lending is 4 to 8 weeks; factoring is 2 to 4 weeks; a revenue-based bridge can fund in days. If your business is clean and profitable and you can wait, do SBA. If you need money sooner or your numbers aren\'t SBA-ready, alternative financing is the better answer.',
  relatedSolutions: ['sba-loans', 'asset-based-lending', 'invoice-factoring', 'working-capital-loans']
},
{
  id: 'sba-7a-vs-504',
  q: 'What\'s the difference between SBA 7(a) and SBA 504?',
  a: 'The 7(a) is the workhorse — general business purposes including acquisitions, working capital, refinance, and equipment, up to the $5MM SBA cap. The 504 is structured around fixed-asset purchases (real estate, major equipment), with a bank loan paired with a CDC second and longer amortization on the property piece. Most operators looking at "an SBA loan" are looking at a 7(a); 504 is the right structure if the deal is anchored by a real-estate purchase.',
  relatedSolutions: ['sba-loans']
},
{
  id: 'why-serve-refers-sba-out',
  q: 'Why does Serve Funding refer all SBA loans out instead of doing them in-house?',
  a: 'SBA is its own discipline — the underwriting, the disclosure rules, the program-by-program nuances, the SBA Form 159 process. The SBA also won\'t allow a broker to charge a success fee on the borrower side and collect lender compensation on the same deal, which makes generalist brokers a bad fit. Serve refers every SBA out to a former SBA banker who runs an SBA-only practice and stays close to make sure the client is served well.',
  relatedSolutions: ['sba-loans']
},
{
  id: 'can-i-get-a-bridge-while-sba-closes',
  q: 'Can I get a bridge loan while my SBA loan is underwriting?',
  a: 'Yes — and this is one of the more common SBA pairings we set up. Because SBA takes 4 to 12 weeks, a parallel bridge — usually a revenue-based line, factoring facility, or short-term asset-backed loan — can fund within days to weeks and tide you over until the SBA closes. The bridge gets paid off when the SBA funds, and you only pay interest for the days you actually used the money.',
  relatedSolutions: ['sba-loans', 'bridge-funding', 'working-capital-loans', 'invoice-factoring']
}
```
