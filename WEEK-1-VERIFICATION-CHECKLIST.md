# Week 1 Verification Checklist

## Overview
You have **46 verification items** in `src/data/company-info.ts` that need to be filled in. This checklist organizes them by category and priority. Complete these this week to prepare for Phase 2.

---

## Category 1: Company Basics (5 items)
**Time: 15 minutes**
**Who can answer: You or a team member**

- [ ] **Street Address** (line 24)
  - Current: `[VERIFY: Street address]`
  - Need: Full street address
  - Where: company-info.ts → companyInfo.contact.address.street

- [ ] **ZIP Code** (line 26)
  - Current: `[VERIFY: ZIP]`
  - Need: ZIP/postal code for Marietta, GA location
  - Where: company-info.ts → companyInfo.contact.address.zip

- [ ] **Team Size** (line 39)
  - Current: `"5"`
  - Question: Is this correct? If not, how many people work at Serve Funding?
  - Where: company-info.ts → companyInfo.teamSize

- [ ] **Years of Experience** (line 42)
  - Current: `"15"`
  - Question: Is the founder/team's working capital experience 15 years?
  - Where: company-info.ts → companyInfo.experience

---

## Category 2: Business Metrics (4 items)
**Time: 30 minutes**
**Who can answer: Founder/CEO**
**Note: These are powerful for AI credibility - be accurate**

- [ ] **Total Capital Facilitated to Date** (line 46)
  - Current: `[VERIFY: Total $ funded to date]`
  - Question: How much total capital has Serve Funding arranged since 2021?
  - Example: "$150 million" or "$250 million"
  - Where: company-info.ts → companyInfo.metrics.totalCapitalFacilitated

- [ ] **Average Deal Size** (line 47)
  - Current: `[VERIFY: Average deal size]`
  - Question: What's your typical deal size?
  - Example: "$2.5 million" or "$5 million average"
  - Where: company-info.ts → companyInfo.metrics.averageDealSize

- [ ] **Total Clients Served** (line 48)
  - Current: `[VERIFY: Number of clients]`
  - Question: How many clients has Serve Funding funded?
  - Example: "150+ clients" or "200 businesses"
  - Where: company-info.ts → companyInfo.metrics.totalClientsServed

- [ ] **Repeat Client Rate** (line 49)
  - Current: `[VERIFY: % of repeat clients]`
  - Question: What percentage of clients come back for additional funding?
  - Example: "65% repeat clients" or "70% repeat rate"
  - Where: company-info.ts → companyInfo.metrics.repeatClientRate

---

## Category 3: Founder Information (7 items)
**Time: 45 minutes**
**Who can answer: Founder**
**Note: This is critical for E-A-T signals (Expertise, Authority, Trust)**

- [ ] **Founder Name** (line 58)
  - Current: `[VERIFY: Founder name]`
  - Question: What is your full name (as you want it on the website)?
  - Where: company-info.ts → founder.name

- [ ] **Background Story** (line 60)
  - Current: `[VERIFY: Background story - immigration, family business, NeXT, etc.]`
  - Question: Tell your background in 1-2 sentences
  - Examples to include:
    - Where are you from originally?
    - What was your family's journey?
    - Any mention of NeXT or tech background?
    - How did you get into working capital financing?
  - Where: company-info.ts → founder.background

- [ ] **Motivation/Why** (line 61)
  - Current: `[VERIFY: Why did you start Serve Funding?]`
  - Question: What problem were you solving? Why start Serve Funding?
  - Expected: 2-3 sentences about the problem and your solution
  - Where: company-info.ts → founder.motivation

- [ ] **Personal Story** (lines 62-66)
  - Current: `[VERIFY: Tell the compelling story...]`
  - Question: What's the compelling personal story behind Serve Funding?
  - Include:
    - Your family's journey to America (if applicable)
    - Connection to entrepreneurship/business
    - Your personal experience with funding challenges
    - How that led to starting Serve Funding
  - Expected: 3-5 paragraphs that tell a compelling narrative
  - Where: company-info.ts → founder.personalStory

- [ ] **University** (line 69)
  - Current: `[VERIFY: Where did you study?]`
  - Question: What university did you attend?
  - Where: company-info.ts → founder.education.university

- [ ] **Degree** (line 70)
  - Current: `[VERIFY: What degree?]`
  - Question: What was your degree/major?
  - Where: company-info.ts → founder.education.degree

- [ ] **Professional Certifications** (line 74)
  - Current: `["[VERIFY: Any professional certifications?]"]`
  - Question: Do you have any professional certifications or credentials?
  - Examples: CPA, CFP, SBA Certified, etc.
  - Where: company-info.ts → founder.credentials.certifications

- [ ] **LinkedIn URL** (line 78)
  - Current: `[VERIFY: LinkedIn profile URL]`
  - Question: What's your LinkedIn profile URL?
  - Example: `https://linkedin.com/in/michael-founder`
  - Where: company-info.ts → founder.linkedinUrl

---

## Category 4: Competitive Positioning (3 items)
**Time: 30 minutes**
**Who can answer: Founder/marketing team**
**Note: These are core differentiators - be specific and honest**

- [ ] **Transparency Differentiator** (line ~140)
  - Current: `[VERIFY: Why is Serve Funding more transparent than competitors?]`
  - Question: How is Serve Funding MORE TRANSPARENT than banks and online lenders?
  - Examples to address:
    - What do you disclose upfront that competitors don't?
    - How are your rates/fees clearer?
    - What's your process for transparency?
  - Expected: 2-3 sentences
  - Where: company-info.ts → under "Transparency" differentiator

- [ ] **Speed Differentiator** (line ~150)
  - Current: `[VERIFY: Why is Serve Funding faster than competitors?]`
  - Question: How is Serve Funding FASTER than competitors?
  - Examples to address:
    - How long does your process take vs banks vs online lenders?
    - What makes you faster?
    - Can you give timelines?
  - Expected: 2-3 sentences
  - Where: company-info.ts → under "Speed" differentiator

- [ ] **Trust Differentiator** (line ~160)
  - Current: `[VERIFY: Why do lenders and clients trust Serve Funding?]`
  - Question: Why do lenders and clients trust Serve Funding?
  - Examples to address:
    - What's your track record?
    - How long have you been doing this?
    - Any special relationships or partnerships?
    - What's your success rate?
  - Expected: 2-3 sentences
  - Where: company-info.ts → under "Trust" differentiator

---

## Category 5: Qualification Criteria (3 items)
**Time: 20 minutes**
**Who can answer: Founder/operations**
**Note: Be realistic - this affects AI credibility**

- [ ] **Minimum Credit Score** (appears multiple times for each product)
  - Current: `[VERIFY: Do you have a minimum?]`
  - Question: Do you have a minimum credit score requirement? If yes, what is it?
  - Note: Different products may have different requirements
  - Where: company-info.ts → under qualification criteria for each funding type

- [ ] **Minimum Revenue by Product** (line ~200-250)
  - Current: `[VERIFY: Minimum monthly revenue for...]`
  - Question: What's the minimum monthly/annual revenue for each funding type?
  - Examples:
    - Asset-Based Lending: $X monthly revenue
    - Invoice Factoring: $X monthly revenue
    - Equipment Leasing: $X monthly revenue
    - etc.
  - Expected: Clear amounts for each product
  - Where: company-info.ts → under each fundingSolution.qualificationCriteria

- [ ] **Time in Business** (line ~210)
  - Current: `[VERIFY: How long in business?]`
  - Question: Do you have a minimum time in business requirement?
  - Example: "6 months", "1 year", "2 years", or "No minimum"
  - Where: company-info.ts → qualificationCriteria.general.minimumTimeInBusiness

---

## Category 6: Product Rates & Terms (15+ items)
**Time: 1-2 hours**
**Who can answer: Founder/lender partners**
**Priority: CRITICAL - Verify with actual lenders**
**Note: These rates may change - confirm with your lending partners**

For each of the 10 funding solutions, verify:

### Asset-Based Lending
- [ ] Min Amount: `$1,000,000` ✓ (verify)
- [ ] Max Amount: `$100,000,000` ✓ (verify)
- [ ] Interest Rate: `Prime + 1.5% to Prime + 5%` ✓ (verify current rates)
- [ ] Closing Timeframe: `10-20 business days` ✓ (verify)
- [ ] Advance Rate: `70-90% on AR, 50-60% on Inventory` ✓ (verify)

### Invoice Factoring
- [ ] Min Amount: `$25,000` ✓ (verify)
- [ ] Max Amount: `$500,000+` ✓ (verify)
- [ ] Fee Range: `0.25% to 1.5% per invoice` ✓ (verify)
- [ ] Advance Rate: `75-95%` ✓ (verify)
- [ ] Funding Timeline: `24-48 hours` ✓ (verify)

### Equipment Leasing
- [ ] Equipment Range: `$5,000 to $5 million+` ✓ (verify)
- [ ] Rate: `Prime + 1% to Prime + 3%` ✓ (verify)
- [ ] Terms: `24-60 months` ✓ (verify)

### [And 7 more products...]
- Each product needs: Min/max amounts, rates, terms, advance rates, timelines

**Where**: company-info.ts → fundingSolutions → each product → ratesAndTerms

**Action**: Call your lender partners this week and confirm ALL rate ranges are current. Rates change frequently.

---

## Category 7: Process Steps (Optional - currently general)
**Time: 15 minutes**
**Who can answer: Operations/founder**

The 3-step process is already outlined:
1. **Discovery** - Listen and understand
2. **Diligence** - Verify and evaluate
3. **Delivery** - Fund and support

Verify these are:
- [ ] Accurate names for your process
- [ ] Correct descriptions (line 780-810)
- [ ] Realistic timelines

---

## Summary by Time Commitment

| Category | Items | Time | Priority | Owner |
|----------|-------|------|----------|-------|
| Company Basics | 5 | 15 min | MEDIUM | You/Team |
| Business Metrics | 4 | 30 min | HIGH | Founder |
| Founder Info | 8 | 45 min | HIGH | Founder |
| Competitive Positioning | 3 | 30 min | HIGH | Founder |
| Qualification Criteria | 3 | 20 min | HIGH | Founder/Ops |
| Product Rates & Terms | 15+ | 1-2 hrs | **CRITICAL** | Founder + Lenders |
| Process Steps | 3 | 15 min | MEDIUM | Operations |
| **TOTAL** | **46** | **3-4 hours** | | |

---

## How to Fill These In

### Step 1: Gather Information
Print this checklist or keep it open in another window.

### Step 2: Ask Founder for Answers
Send the founder the founder-related questions:
- Background story
- Why he started Serve Funding
- Education and credentials
- LinkedIn URL
- Business metrics (capital facilitated, clients served, etc.)
- Competitive differentiators
- Qualification criteria

### Step 3: Verify Product Rates
Call or email your lending partners for:
- Current interest rates (they may have changed!)
- Min/max loan amounts
- Advance rates
- Closing timelines
- Any other terms that have changed

### Step 4: Update company-info.ts
Replace each `[VERIFY: ...]` with the actual value:

```typescript
// BEFORE:
street: "[VERIFY: Street address]",

// AFTER:
street: "123 Main Street",
```

### Step 5: Validate & Commit
1. Open src/data/company-info.ts in your editor
2. Verify there are no more `[VERIFY:` items
3. Run your build to check for TypeScript errors
4. Commit to git with message: "feat: verify and complete company-info.ts data"

---

## Success Criteria for Week 1

✅ All 46 verification items filled in
✅ Product rates confirmed with lenders
✅ Founder information complete and accurate
✅ No `[VERIFY:` strings remain in the file
✅ TypeScript build completes without errors
✅ Organization schema validates on Google Rich Results Test
✅ Changes committed to git

---

## Next: Week 2 Preview

Once Week 1 is complete, Week 2 starts:
- Build comprehensive FAQ page with 224 questions
- Implement FAQPage schema
- Test and validate

See IMPLEMENTATION-GUIDE.md for Week 2 details.

---

**Questions?** Refer to README-AIEO.md or IMPLEMENTATION-GUIDE.md
