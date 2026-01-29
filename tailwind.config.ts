import type { Config } from "tailwindcss";

const tailwindColors = {
  "brand-primary": "#65773d",
  "brand-secondary": "#d3ce75",
  "brand-tertiary": "#bcb450",
  "brand-highlight": "#efe073",
  "brand-dark": "#323b1e",
  "brand-background": "#f1f0d5",
  "olive-900": "#323b1e",
  "olive-800": "#65773d",
  "gold-500": "#d3ce75"
};

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
