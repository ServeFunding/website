/**
 * Brand Colors - Single Source of Truth
 * Used by both Tailwind config and design system components
 */

export const COLORS = {
  primary: {
    darkGreen: "#758d5b",    // Olive green from logo
    lightGreen: "#D3CE75",   // Gold/light from logo
    bgGreen: "#f1f0d5",      // Light background green
  },
} as const;

/**
 * Tailwind color palette
 * Maps semantic names to hex values for Tailwind config
 */
export const tailwindColors = {
  "olive-green": COLORS.primary.darkGreen,
  "gold-light": COLORS.primary.lightGreen,
  "bg-green": COLORS.primary.bgGreen,
} as const;
