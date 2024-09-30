import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        'xs': '100%',
        'sm': '100%',
        'md': '100%',
        'lg': '100%',
        'xl': '1182px',
        '2xl': '1182px',
      },
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#415167',
          dark: '#151d28',
        },
        beige: {
          DEFAULT: '#c7a17a',
          light: '#f9f5e8',
        },
        grey: '#edf0f5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'product-card-shadow': '0 4px 24px 0 rgba(205, 205, 205, 0.5);',
      },
    },
  },
  plugins: [],
}
export default config
