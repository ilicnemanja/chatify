import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        custom: {
          50: "#F2F6FF",
          100: "#E6EEFF",
          200: "#C0D3FF",
          300: "#7CF5FF",
          400: "#00CCDD",
          500: "#4F75FF",
          600: "#6439FF",
          700: "#3B1E6D",
          800: "#1E0E2A",
          900: "#0F0514",
        },
        secondary: {
          100: "#F0F4FF",
          200: "#D9E4FF",
          300: "#A6C1FF",
          400: "#598BFF",
          500: "#3366FF",
          600: "#274BDB",
          700: "#1A34B8",
          800: "#102694",
          900: "#091A7A",
        },
      },
      fontFamily: {
        "sour-gummy": ["var(--font-sour-gummy)"], 
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config