/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   charcoal: "rgb(38 38 38)",
    //   sun: "rgb(254 240 138)",
    // },
    extend: {},
  },
  plugins: [],
};
