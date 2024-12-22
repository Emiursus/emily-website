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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cstGrey':"#F0F0F0",
        'cstBlue': {
          light: '#4F709C',
          DEFAULT: '#213555',
          dark: '#213555',
        },
        'cstYellow': {
          light: '#fef0bf',
          DEFAULT: '#E5D283',
          dark: '#E5D283',
        },
        'cstBrown': {
          light: '#655c57',
          DEFAULT: '#2e1e11',
          dark: '#2e1e11',
        },
      },
    },
  },
  plugins: [],
};
export default config;
