/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryClr: "#000",
        secondaryClr: "#1b1b1b",
        widgetbgclr: "#393939",
      },
      gridTemplateColumns: {
      dashboard: "200px 1fr",
      }
      
    },
  },
  plugins: [],
};
