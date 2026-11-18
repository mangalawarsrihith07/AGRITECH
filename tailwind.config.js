/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f2fbf4',
          100: '#e1f6e6',
          200: '#c5ecd0',
          300: '#99dbaa',
          400: '#64c07c',
          500: '#3fa458',
          600: '#2f8645',
          700: '#276a38',
          800: '#23542f',
          900: '#1e4529',
          950: '#0c2614',
        },
        earth: {
          50: '#faf6f1',
          100: '#f3ece0',
          200: '#e6d7be',
          300: '#d5bd96',
          400: '#c3a171',
          500: '#b48a54',
          600: '#9f7246',
          700: '#7f583a',
          800: '#674733',
          900: '#553c2d',
        }
      }
    },
  },
  plugins: [],
}
