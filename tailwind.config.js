/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headings: "Bebas Neue",
        text: "Lora",
      },
      colors: {
        yellowPalette: {
          background: "#F7F7F7",
          componentBackground: "#000000",
          componentForeground: "#FFDB00",
        },
        purplePalette: {
          background: "#F7F7F7",
          purpleLight: "#D6C6F7",
          purpleDark: "#DDB4FF",
        }
      },
    },
  },
  plugins: [],
}

