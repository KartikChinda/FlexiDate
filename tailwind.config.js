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
        //just some different palettes I tried out 
        // yellowPalette: {
        //   background: "#F7F7F7",
        //   componentBackground: "#000000",
        //   componentForeground: "#FFDB00",
        // },
        // palette: {
        //   background: "#F7F7F7",
        //   purpleLight: "#D6C6F7",
        //   // purpleDark: "#8365FE",
        //   purpleDark: "#FFDB00"
        // }
        // yellow
        // palette: {
        //   background: "#F7F7F7",
        //   purpleLight: "#FFEBA1",
        //   // purpleDark: "#8365FE",
        //   purpleDark: "#FFDB00"
        // }
        // orange
        palette: {
          background: "#F7F7F7",
          colLight: "#FEEAD1",
          // purpleDark: "#8365FE",
          colDark: "#F6673F"
        }
        // purple
        // palette: {
        //   background: "#F7F7F7",
        //   purpleLight: "#B3B4ED",
        //   // purpleDark: "#8365FE",
        //   purpleDark: "#8365FE"
        // }
        // green
        // palette: {
        //   background: "#F7F7F7",
        //   purpleLight: "#D0E000",
        //   // purpleDark: "#8365FE",
        //   purpleDark: "#7CD213"
        // }
      },
    },
  },
  plugins: [],
}

