/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ['font-rogbold'],
  theme: {
    extend: {
      rogbold: ['ROGBold', 'sans-serif'],
        minion: ['MinionPro', 'serif'],
    },
    
  },
  plugins: [require('@tailwindcss/typography')],
}

