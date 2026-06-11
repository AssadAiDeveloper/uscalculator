import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue":         "#1B3A6B",
        "brand-blue-mid":     "#2553A0",
        "brand-blue-light":   "#3B72D4",
        "brand-orange":       "#F97316",
        "brand-orange-dark":  "#EA6A0A",
        "brand-orange-pale":  "#FFF4EC",
        "surface":            "#F8FAFC",
        "surface-card":       "#FFFFFF",
        "surface-border":     "#E2E8F0",
        "surface-muted":      "#F1F5F9",
        "ink":                "#1E293B",
        "ink-muted":          "#64748B",
        "ink-faint":          "#94A3B8",
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      boxShadow: {
        "card":       "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 4px 12px 0 rgb(0 0 0 / 0.10)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
