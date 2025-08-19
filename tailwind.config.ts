import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        muted: '#9ca3af'
      },
      boxShadow: {
        soft: '0 6px 22px rgba(0,0,0,0.35)'
      }
    },
  },
  plugins: [],
} satisfies Config


