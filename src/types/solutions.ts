/**
 * Shared Solution Types
 */

import { ReactNode } from 'react'
import { FAQ } from './faq'

export interface RatesAndTerms {
  minAmount?: string
  maxAmount?: string
  interestRate?: string
  annualCostRange?: string
  facilityFee?: string
  monthlyServiceFee?: string
  closingTimeframe?: string
  arAdvanceRate?: string
  inventoryAdvanceRate?: string
  advanceRate?: string
  factorFeeRange?: string
  annualizedCost?: string
  fundingSpeed?: string
  monthlyFactorRate?: string
  flatInterestRate?: string
  approvalTime?: string
  fundingTime?: string
  termLength?: string
  basedOn?: string
  ltvRange?: string
  amortization?: string
  fundingPercent?: string
  costRange?: string
  [key: string]: string | undefined
}

export interface QualificationCriteria {
  minimumRevenue?: string
  minimumTimeInBusiness?: string
  minimumCreditScore?: string
  requiredAssets?: string
  minimumInvoiceVolume?: string
  customerType?: string
  creditScoreRequired?: string
  invoiceAge?: string
  minimumMonthlyRevenue?: string
  creditScoreRange?: string
  businessType?: string
  [key: string]: string | undefined
}

export interface FundingSolution {
  id: string
  title: string | ReactNode
  image: string
  category: string

  // Descriptions
  whatIs: string // Answer capsule - "What is X?" in 1-2 sentences
  shortDesc: string // Short description for cards/listings
  fullDesc: string // Full description for detail pages

  // Features and benefits
  features: string[]

  // Rates and terms
  ratesAndTerms?: RatesAndTerms

  // FAQ
  commonQuestions: FAQ[]

  // Use cases
  bestFor?: string[]

  // Qualification
  qualificationCriteria?: QualificationCriteria
}
