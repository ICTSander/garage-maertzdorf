import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  extend: {
    colors: {
      primary: "#D9772B",   // oranje
      dark: "#4A4A4A",      // donker grijs
      light: "#F5F5F5"      // achtergrond
    }
  }
},
  plugins: []
};

export default config;

