import { fundingSolutions } from "@/data/solutions"
import { fundingCases } from "@/data/fundingData"
import { getTitleAsString } from "@/lib/solution-helpers"

export interface DropdownItem {
  name: string
  id: string
}

export interface FeaturedDropdownItem extends DropdownItem {
  featured?: boolean
  subtitle?: string
  icon?: string
  amount?: string
  description?: string
}

export interface SimpleNavItem {
  type: 'link'
  label: string
  href: string
}

export interface DropdownNavItem {
  type: 'dropdown'
  label: string
  basePath: string
  items: FeaturedDropdownItem[]
  itemType?: 'pages' | 'anchors'
  description?: string
  featuredTitle?: string
  regularTitle?: string
}

export type NavItem = SimpleNavItem | DropdownNavItem

export interface HeaderNavConfig {
  items: NavItem[]
}

export const CALENDLY_URL = "/lets-talk"

const PARTNERS_ITEMS: FeaturedDropdownItem[] = [
  { name: "Commercial Bankers", id: "commercial-bankers", featured: true, subtitle: "Our primary referral partners" },
  { name: "CPAs / Accountants", id: "cpas---accountants", featured: true, subtitle: "Trusted advisors for clients" },
  { name: "Fractional CFOs", id: "fractional-cfos" },
  { name: "Investment Bankers", id: "investment-bankers" },
  { name: "Private Equity Firms", id: "private-equity-firms" },
  { name: "Business Advisors", id: "business-advisors" }
]

const ABOUT_ITEMS: FeaturedDropdownItem[] = [
  { name: "Our Story", id: "our-story" },
  { name: "Core Values", id: "core-values" },
  { name: "Doing Good", id: "doing-good" }
]

export const headerNavConfig: HeaderNavConfig = {
  items: [
    {
      type: 'dropdown',
      label: 'Solutions',
      basePath: '/solutions',
      items: fundingSolutions.map(solution => {
        // Mark the three featured products (working capital, invoice factoring, equipment)
        const isFeatured = ['working-capital-loans', 'invoice-factoring', 'equipment-leasing'].includes(solution.id)
        return {
          name: getTitleAsString(solution.title),
          id: solution.id,
          featured: isFeatured,
          subtitle: isFeatured ? (
            solution.id === 'working-capital-loans' ? 'RBF, MCA & short-term solutions' :
            solution.id === 'invoice-factoring' ? 'Unlock cash from unpaid invoices' :
            'Equipment, machinery & vehicles'
          ) : undefined,
          icon: isFeatured ? (
            solution.id === 'working-capital-loans' ? 'Zap' :
            solution.id === 'invoice-factoring' ? 'FileText' :
            'Wrench'
          ) : undefined
        }
      }),
      itemType: 'pages',
      featuredTitle: 'Core Solutions',
      regularTitle: 'All Solutions',
      description: 'Explore our range of working capital solutions designed to keep your business running smoothly. From short-term cash needs to comprehensive working capital strategies.'
    },
    {
      type: 'dropdown',
      label: 'Fundings',
      basePath: '/fundings',
      items: getFundingsForDropdown(),
      itemType: 'anchors',
      featuredTitle: 'Top Fundings',
      regularTitle: 'Recent Fundings',
      description: 'Discover how we\'ve helped businesses like yours unlock capital and accelerate growth. Real results from real companies across industries.'
    },
    {
      type: 'dropdown',
      label: 'Partners',
      basePath: '/partners',
      items: PARTNERS_ITEMS,
      itemType: 'anchors',
      featuredTitle: 'Primary Partners',
      regularTitle: 'All Partners',
      description: 'We work with trusted advisors and professionals who share our commitment to helping businesses succeed. Join our growing network of referral partners.'
    },
    {
      type: 'dropdown',
      label: 'About Us',
      basePath: '/about-us',
      items: ABOUT_ITEMS,
      itemType: 'anchors',
      featuredTitle: 'Our Story',
      regularTitle: 'Learn More',
      description: 'Built on 40 years of entrepreneurial heritage, we\'re committed to serving you with integrity. We believe relationships matter more than bots—partnering with you as a trusted advisor to simplify your funding journey and accelerate your growth.'
    }
  ]
}

/**
 * Get fundings for the dropdown: 2 top by amount (featured) + 4 most recent
 */
export function getFundingsForDropdown() {
  // Top by amount = highest funding amounts, first 2 (featured)
  const topByAmount = [...fundingCases]
    .sort((a, b) => {
      const amountA = parseInt(a.amount.replace(/[$,K*MM]/g, '')) * (a.amount.includes('MM') ? 1000 : 1)
      const amountB = parseInt(b.amount.replace(/[$,K*MM]/g, '')) * (b.amount.includes('MM') ? 1000 : 1)
      return amountB - amountA
    })
    .slice(0, 2)

  // Most recent = first 4 items (assuming array is ordered by recency)
  const mostRecent = fundingCases.slice(0, 4)

  // Get IDs from top fundings to filter duplicates
  const topIds = new Set(topByAmount.map(f => f.title))

  // Filter recent to exclude any that are in top
  const recentFiltered = mostRecent.filter(f => !topIds.has(f.title))

  // Featured items (top 2 by amount)
  const featured = topByAmount.map((funding) => ({
    name: `${funding.title} - ${funding.company}`,
    id: funding.title.toLowerCase().replace(/\s+/g, '-'),
    amount: funding.amount,
    featured: true,
  }))

  // Regular items (4 most recent, excluding any in featured)
  const regular = recentFiltered.slice(0, 4).map((funding) => ({
    name: `${funding.title} - ${funding.company}`,
    id: funding.title.toLowerCase().replace(/\s+/g, '-'),
    amount: funding.amount,
  }))

  return [...featured, ...regular]
}

/**
 * Converts a label to a consistent expand menu key
 * E.g., "About Us" -> "about-us"
 */
export const getExpandMenuKey = (label: string): string =>
  label.toLowerCase().replace(/\s+/g, '-')
