/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",

  theme: {
    extend: {},
    screens: {
      ph: { max: '400px' },
      sx: {max: '500px' },
      l: { max: '600px' },
      xl: { max: '700px' },
      xxl:{ max: "800px" },
      cs: { max: "900px" },
      cx: { max: "1000px" }
    },
  },
  plugins: [],
}

