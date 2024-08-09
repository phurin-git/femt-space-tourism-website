/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        900: '#0B0D17',
        300: '#D0D6F9'
      },
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}

