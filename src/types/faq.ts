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
  videoId?: string // Optional YouTube video ID for expanded answer
  videoTranscript?: string // Optional transcript of the video
}

// FAQ Category for organization
export interface FAQCategory {
  id: string
  name: string
  description: string
}
