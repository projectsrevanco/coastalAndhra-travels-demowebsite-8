/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#073B4C',
        secondary: '#0E7490',
        accent: '#F97316',
        background: '#FFF8ED',
        surface: '#E0F2FE', // Very light blue/teal
        sand: {
          100: '#f5f5f4',
        },
        gray: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7', // Nice blue for sub text
          600: '#0369a1', // Darker blue for sub text
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
