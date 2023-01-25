/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    fontFamily: {
      space: ['Space Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
