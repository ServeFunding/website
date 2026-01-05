/**
 * Shared FAQ Types
 * Used across all FAQ implementations for consistency
 */

// Simple FAQ format - used in accordions, solution pages, homepage
export interface FAQ {
  id: string
  q: string
  a: string
  relatedSolutions?: string[] // Optional array of solution IDs this FAQ relates to
}

// FAQ Category for organization
export interface FAQCategory {
  id: string
  name: string
  description: string
}
