/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--color-blue)",
        darkblue: "var(--color-darkblue)",
        gray: "var(--color-gray)",
        lightgray: "var(--color-lightgray)",
        darkgray: "var(--color-darkgray)",
        bluebadgebg: "var(--color-bluebadgebg)",
        graybadgebg: "var(--color-graybadgebg)",
        heading: "var(--color-heading)",
        content: "var(--color-content)",
        lighttext: "var(--color-lighttext)",
        smalltext: "var(--color-smalltext)",
      },
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      md: "5px",
      lg: "10px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Mate", "serif"],
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "30px",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "800",
    },
    boxShadow: {
      "3xl": "0px 4px 4px 0px rgba(197, 197, 197, 0.15)",
    },
  },
  plugins: [require("flowbite/plugin")],
};
