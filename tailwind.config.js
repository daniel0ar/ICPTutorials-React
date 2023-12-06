/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-gray": "rgb(36,36,40)"
      }
    },
  },
  plugins: [],
}