import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f9f8f3",
          100: "#f1f0e8",
          200: "#e3e1d0",
          300: "#d4d1b8",
          400: "#b8b295",
          500: "#997f5e",
          600: "#7a6347",
          700: "#5a4a35",
          800: "#3d3225",
          900: "#2a231a",
        },
        gold: {
          50: "#faf7f1",
          100: "#f5f0e3",
          200: "#ead9c3",
          300: "#dfc2a3",
          400: "#d4a76b",
          500: "#c99c42",
          600: "#b8851a",
          700: "#8f6a15",
          800: "#664d10",
          900: "#4a360a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
