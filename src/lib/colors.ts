/**
 * ============================================================================
 * SERVE FUNDING BRAND COLOR PALETTE
 * ============================================================================
 *
 * Single source of truth for all brand colors used throughout the application.
 * These colors define the visual identity and should be used consistently
 * across all pages, components, and marketing materials.
 *
 * USAGE:
 * - Import COLORS for component styling: import { COLORS } from '@/lib/colors'
 * - Use Tailwind classes for most styling (extends with semantic names)
 * - Use COLORS object only when dynamic styling or non-Tailwind contexts needed
 */

export const COLORS = {
  // =========================================================================
  // PRIMARY PALETTE
  // =========================================================================
  // Primary green - main brand color for headings, primary buttons, accents
  primary: "#65773d",

  // Secondary green - lighter variant for secondary elements and hover states
  secondary: "#d3ce75",

  // Tertiary/bronze - mid-tone for borders, dividers, and tertiary elements
  tertiary: "#bcb450",

  // Bright yellow - for highlights, icons, and call-to-action accents
  highlight: "#efe073",

  // Dark green/near-black - for primary text, titles, and darkest accents
  dark: "#323b1e",

  // =========================================================================
  // SEMANTIC COLORS (derived from primary palette)
  // =========================================================================
  // Light background - subtle, warmth-neutral background
  background: "#f1f0d5",

  // =========================================================================
  // USAGE GUIDELINES
  // =========================================================================
  //
  // PRIMARY (#65773d)
  //   - Page titles and major headings
  //   - Primary CTA buttons
  //   - Active/selected states
  //   - Key accent elements
  //
  // SECONDARY (#d3ce75)
  //   - Secondary headings
  //   - Hover states
  //   - Secondary buttons
  //   - Complementary accents
  //
  // TERTIARY (#bcb450)
  //   - Borders and dividers
  //   - Icons and decorative elements
  //   - Tertiary buttons
  //
  // HIGHLIGHT (#efe073)
  //   - Important badges/badges
  //   - Special offers or emphasis
  //   - Icon highlights
  //
  // DARK (#323b1e)
  //   - Body text
  //   - Titles and headings (alternative to primary)
  //   - Darkest accents and font color
  //
  // BACKGROUND (#f1f0d5)
  //   - Page backgrounds
  //   - Card backgrounds
  //   - Light sections
  //
} as const;

/**
 * Tailwind color palette
 * Maps semantic names to hex values for use in Tailwind config
 * Use these class names in your components: bg-brand-primary, text-brand-dark, etc.
 */
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
  "gold-500": COLORS.secondary,     // Gold/secondary accents
  "gold-100": "#f9f5e9",            // Light gold background
  "gold-700": "#b8a845",            // Darker gold variant
} as const;
