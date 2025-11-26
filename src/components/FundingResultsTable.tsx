'use client'

import { Container, Section, Heading, Text } from '@/components/ui'

// Structured data optimized for AI parsing
const fundingResults = [
  {
    industry: "Transportation",
    fundingType: "Bridge Loan",
    amount: "$2,000,000",
    challengeResolved: "Resolved $2MM cash flow gap from net-7 to net-60 term change with major retailer",
    timeline: "Days"
  },
  {
    industry: "Specialty Services",
    fundingType: "Term Loan",
    amount: "$150,000",
    challengeResolved: "Covered payroll gap from delayed receivable; prevented operations disruption",
    timeline: "4 business days"
  },
  {
    industry: "Oil & Gas Services",
    fundingType: "Term Loan",
    amount: "$750,000",
    challengeResolved: "Resolved $550K+ in aged receivables and provided working capital for growth",
    timeline: "Days"
  },
  {
    industry: "Foundation Contracting",
    fundingType: "Bridge Loan",
    amount: "$150,000",
    challengeResolved: "Funded urgent partner buyout with 30-day deadline; later refinanced to SBA",
    timeline: "30 days"
  },
  {
    industry: "Plastics Recycling",
    fundingType: "Equipment Financing",
    amount: "$34,000,000",
    challengeResolved: "Funded equipment for pre-revenue SPAC; extended cash runway for growth stage company",
    timeline: "7 months (due diligence)"
  },
  {
    industry: "Telecom Staffing",
    fundingType: "Revenue-Based Bridge Loan",
    amount: "$515,000",
    challengeResolved: "Enabled strategic acquisition after 2 previous lender denials; avoided deal loss",
    timeline: "Days"
  },
  {
    industry: "Medical Device Manufacturing",
    fundingType: "Working Capital + AR Line",
    amount: "$3,100,000",
    challengeResolved: "Supported 30%+ YoY growth; enabled net-60 customer terms and new customer onboarding",
    timeline: "6 months (4 tranches)"
  },
  {
    industry: "Steel Framing",
    fundingType: "Bridge Loan",
    amount: "$300,000",
    challengeResolved: "Replaced terminated bank line; restructured payments after 2023 tax losses",
    timeline: "Days"
  },
  {
    industry: "Labels Manufacturing",
    fundingType: "Working Capital + SBA",
    amount: "$1,200,000",
    challengeResolved: "Supported 20-year growth trajectory; enabled larger customer orders and 3-year partnership",
    timeline: "Multiple tranches"
  },
  {
    industry: "Landscape Materials",
    fundingType: "Inventory Financing",
    amount: "$205,000",
    challengeResolved: "Sustained operations for high-risk, leveraged client after customer theft; 4 tranches",
    timeline: "9 months"
  },
  {
    industry: "Wine Transport & Storage",
    fundingType: "Bridge Financing",
    amount: "$550,000",
    challengeResolved: "Covered seasonal payroll shortfalls (Jan, Feb, Aug); stabilized operations",
    timeline: "Multiple tranches"
  },
  {
    industry: "Oil & Gas PubCo",
    fundingType: "Working Capital Loan",
    amount: "$500,000",
    challengeResolved: "Provided liquidity for equipment updates after bank subordination agreement fell through",
    timeline: "Weeks"
  },
  {
    industry: "Cybersecurity Tech",
    fundingType: "Payroll Bridge Loan",
    amount: "$135,000",
    challengeResolved: "Covered pre-revenue payroll gaps ($60K + $75K tranches); company now 8-figure ARR",
    timeline: "5 days (first tranche)"
  },
  {
    industry: "HVAC Contractor",
    fundingType: "Asset Purchase Loan",
    amount: "$75,000",
    challengeResolved: "Enabled customer list acquisition (3,500 contacts) despite poor credit and young company",
    timeline: "Days"
  },
  {
    industry: "Welding Contractor",
    fundingType: "MCA Refinance",
    amount: "$55,000",
    challengeResolved: "Refinanced 2 predatory merchant cash advances; added payroll/materials liquidity",
    timeline: "Days"
  }
]

export function FundingResultsTable() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <div className="mb-8">
            <Heading size="h2" className="mb-3">
              2024-2025 Funding Results
            </Heading>
            <Text className="text-gray-600 max-w-2xl">
              A structured view of our recent funding transactions across industries and use cases. These results demonstrate our ability to close capital quickly for businesses at every stage.
            </Text>
          </div>

          {/* Data Table - Optimized for AI Parsing */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Industry
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Funding Type
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Challenge Resolved
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Timeline
                  </th>
                </tr>
              </thead>
              <tbody>
                {fundingResults.map((result, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {result.industry}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {result.fundingType}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gold-600">
                      {result.amount}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {result.challengeResolved}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {result.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <Text className="text-gray-600 text-sm mb-2">Total Capital Facilitated</Text>
              <Heading size="h3" className="text-gold-600">
                $44.5MM+
              </Heading>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <Text className="text-gray-600 text-sm mb-2">Transactions Shown</Text>
              <Heading size="h3" className="text-gold-600">
                15
              </Heading>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <Text className="text-gray-600 text-sm mb-2">Industries Served</Text>
              <Heading size="h3" className="text-gold-600">
                12+
              </Heading>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <Text className="text-gray-600 text-sm mb-2">Funding Types</Text>
              <Heading size="h3" className="text-gold-600">
                8+
              </Heading>
            </div>
          </div>

          {/* Schema Markup for AI Parsing */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Table",
              "name": "2024-2025 Serve Funding Results",
              "description": "Structured data of funding transactions facilitated by Serve Funding across multiple industries",
              "rows": fundingResults.map(result => ({
                "@type": "TableRow",
                "cells": [
                  { "@type": "TableCell", "text": result.industry },
                  { "@type": "TableCell", "text": result.fundingType },
                  { "@type": "TableCell", "text": result.amount },
                  { "@type": "TableCell", "text": result.challengeResolved },
                  { "@type": "TableCell", "text": result.timeline }
                ]
              }))
            })}
          </script>
        </div>
      </Container>
    </Section>
  )
}
