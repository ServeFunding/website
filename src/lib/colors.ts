/**
 * Brand Colors - Single Source of Truth
 * Used by both Tailwind config and design system components
 */

export const COLORS = {
  primary: {
    darkGreen: "#65773D",    // Olive green from logo
    lightGreen: "#D3CE75",   // Gold/light from logo
  },
} as const;

/**
 * Tailwind color palette
 * Maps semantic names to hex values for Tailwind config
 */
export const tailwindColors = {
  "olive-green": COLORS.primary.darkGreen,
  "gold-light": COLORS.primary.lightGreen,
} as const;
