/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brilliant-blue': '#007bff',
        'brilliant-bg': '#f7f7f7',
      }
    },
  },
  plugins: [],
}
