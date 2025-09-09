/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#4B0082",
          light: "#6a0dad",
          dark: "#2e0854"
        }
      }
    }
  },
  plugins: []
}