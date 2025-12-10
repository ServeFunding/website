/**
 * ============================================================================
 * SERVE FUNDING BRAND COLOR PALETTE
 * ============================================================================
 */

export const COLORS = {
  primary: "#65773d",
  secondary: "#d3ce75",
  tertiary: "#bcb450",
  highlight: "#efe073",
  dark: "#323b1e",
  background: "#f1f0d5", // added color (not in brand guide)
  white: "#ffffff",
  gray: "#f3f4f6",
} as const;

// Color option types for components
export type HeadingColorOption = 'primary' | 'secondary' | 'highlight' | 'white' | 'dark' | 'background' | 'gradient'
export type TextColorOption = 'dark' | 'primary' | 'secondary' | 'white'
export type CardColorOption = 'white' | 'background'
export type SectionBackgroundOption = 'white' | 'gray' | 'primary' | 'background'

// Tailwind pallet ( not using as much )
export const tailwindColors = {
  "brand-primary": COLORS.primary,
  "brand-secondary": COLORS.secondary,
  "brand-tertiary": COLORS.tertiary,
  "brand-highlight": COLORS.highlight,
  "brand-dark": COLORS.dark,
  "brand-background": COLORS.background,
  // Olive color variants for backwards compatibility
  "olive-900": COLORS.dark,         // Darkest text
  "olive-800": COLORS.primary,      // Primary text
  "gold-500": COLORS.secondary     // Gold/secondary accents
} as const;
