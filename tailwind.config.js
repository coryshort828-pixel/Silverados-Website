/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        silverados: {
          dark: '#0f172a',
          accent: '#eab308', // Yellow/Gold
          secondary: '#334155',
          text: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}