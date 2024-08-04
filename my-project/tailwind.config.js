/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          lightYellow: "#f6d876",
          white2: "#fffbf2",
          darkGreen: "#05ab54",
          dark: "1e1e1e"
        }
      }
    },
  },
  plugins: [],
}

