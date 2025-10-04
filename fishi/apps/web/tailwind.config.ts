import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        floating: '0 20px 50px -20px rgba(0,0,0,.35), 0 8px 24px rgba(0,0,0,.15)'
      },
      backdropBlur: {
        xs: '2px'
      },
      colors: {
        ocean: {
          50: '#f1fbff',
          100: '#dff6ff',
          200: '#b8ecff',
          300: '#7fe0ff',
          400: '#3fd1ff',
          500: '#09b7ef',
          600: '#008fbd',
          700: '#066e91',
          800: '#0a5671',
          900: '#0e475e'
        }
      }
    }
  },
  plugins: []
} satisfies Config
