/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['Sour Gummy'],
      // }
      boxShadow: {
        custom: '0 5px 6px -4px rgba(0, 0, 0, 1)',
      },

      
    },
  },
  plugins: [],
}