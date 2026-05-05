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
          50:  "#fff1f1",
          100: "#ffe0e0",
          200: "#ffc7c7",
          300: "#ffa1a1",
          400: "#ff6b6b",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        neutral: {
          50:  "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#18181b",
          950: "#09090b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    }
  },
  safelist: [
    "text-primary-50","text-primary-100","text-primary-200","text-primary-300",
    "text-primary-400","text-primary-500","text-primary-600","text-primary-700",
    "text-primary-800","text-primary-900",
    "bg-primary-50","bg-primary-100","bg-primary-200","bg-primary-300",
    "bg-primary-400","bg-primary-500","bg-primary-600","bg-primary-700",
    "bg-primary-800","bg-primary-900",
  ],
  plugins: []
};

export default config;
