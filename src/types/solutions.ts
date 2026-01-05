/**
 * Shared Solution Types
 */

import { ReactNode } from 'react'

export interface FundingSolution {
  id: string
  title: string | ReactNode
  seoTitle?: string // SEO title for search results (benefit-driven, under 60 chars)
  image: string
  category: string

  // Descriptions
  whatIs: string // Answer capsule - "What is X?" in 1-2 sentences
  shortDesc: string // Short description for cards/listings
  fullDesc: string // Full description for detail pages

  // Features and benefits
  features: string[]

  // Use cases
  bestFor?: string[]
}
