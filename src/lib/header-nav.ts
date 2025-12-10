import { fundingSolutions } from "@/data/solutions"
import { getTitleAsString } from "@/lib/solution-helpers"

export interface DropdownItem {
  name: string
  id: string
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
  items: DropdownItem[]
  itemType?: 'pages' | 'anchors'
}

export type NavItem = SimpleNavItem | DropdownNavItem

export interface HeaderNavConfig {
  items: NavItem[]
}

export const CALENDLY_URL = "https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11"

const PARTNERS_ITEMS: DropdownItem[] = [
  { name: "Commercial Bankers", id: "commercial-bankers" },
  { name: "Fractional CFOs", id: "fractional-cfos" },
  { name: "Investment Bankers", id: "investment-bankers" },
  { name: "CPAs / Accountants", id: "cpas---accountants" },
  { name: "Private Equity Firms", id: "private-equity-firms" },
  { name: "Business Advisors", id: "business-advisors" }
]

const ABOUT_ITEMS: DropdownItem[] = [
  { name: "Our Story", id: "our-story" },
  { name: "Core Values", id: "core-values" },
  { name: "Doing Good", id: "doing-good" }
]

export const headerNavConfig: HeaderNavConfig = {
  items: [
    {
      type: 'link',
      label: 'Home',
      href: '/'
    },
    {
      type: 'dropdown',
      label: 'Solutions',
      basePath: '/solutions',
      items: fundingSolutions.map(solution => ({
        name: getTitleAsString(solution.title),
        id: solution.id
      })),
      itemType: 'pages'
    },
    {
      type: 'link',
      label: 'Fundings',
      href: '/fundings'
    },
    {
      type: 'dropdown',
      label: 'Partners',
      basePath: '/partners',
      items: PARTNERS_ITEMS,
      itemType: 'anchors'
    },
    {
      type: 'dropdown',
      label: 'About Us',
      basePath: '/about-us',
      items: ABOUT_ITEMS,
      itemType: 'anchors'
    }
  ]
}

/**
 * Converts a label to a consistent expand menu key
 * E.g., "About Us" -> "about-us"
 */
export const getExpandMenuKey = (label: string): string =>
  label.toLowerCase().replace(/\s+/g, '-')
