import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef7f0",
          100: "#fdebd6",
          200: "#fad5aa",
          300: "#f5b76e",
          400: "#e99840",
          500: "#d4852e",
          600: "#c87a28",
          700: "#a86220",
          800: "#8a4f1d",
          900: "#6e3e18"
        },
        neutral: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#b8b8b8",
          300: "#8a8a8a",
          400: "#666666",
          500: "#4a4a4a",
          600: "#3a3a3a",
          700: "#2d2d2d",
          800: "#1f1f1f",
          900: "#141414"
        }
      }
    }
  },
  safelist: [
    "text-primary-50",
    "text-primary-100",
    "text-primary-200",
    "text-primary-300",
    "text-primary-400",
    "text-primary-500",
    "text-primary-600",
    "text-primary-700",
    "text-primary-800",
    "text-primary-900",
    "bg-primary-50",
    "bg-primary-100",
    "bg-primary-200",
    "bg-primary-300",
    "bg-primary-400",
    "bg-primary-500",
    "bg-primary-600",
    "bg-primary-700",
    "bg-primary-800",
    "bg-primary-900",
  ],
  plugins: []
};

export default config;