import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
          muted: "rgb(var(--color-muted) / <alpha-value>)",
          surface: "rgb(var(--color-surface) / <alpha-value>)",
          onprimary: "rgb(var(--color-on-primary) / <alpha-value>)"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgb(var(--color-primary) / 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
