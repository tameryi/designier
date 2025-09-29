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
      fontFamily: {
        sans: [
          'var(--font-bricolage)',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
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
  plugins: [require('@tailwindcss/typography')],
} satisfies Config


