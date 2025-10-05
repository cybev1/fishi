import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { boxShadow: { floating: '0 20px 50px -20px rgba(0,0,0,.35), 0 8px 24px rgba(0,0,0,.15)' } } },
  plugins: []
} satisfies Config
