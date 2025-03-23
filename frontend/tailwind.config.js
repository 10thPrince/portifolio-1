/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#122620',
        'main-light': '#fffef9',
        'secondary': '#D4A373'
      },
    },
  },
  plugins: [],
}

