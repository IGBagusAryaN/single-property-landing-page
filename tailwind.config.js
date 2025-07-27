/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        smx: "800px",
      }, 

      fontSize: {
        xs2: "8px",
        xs1: "10px",
        xs: "12px",
        sm: "14px",
        base: "18px",
        md: "20px",
        lg: "36px",
        xl: "38px",
        xl2: "48px",
      },
      colors: {
        brand: "#B7701B",
        hoverBrand: "#A85C01",
        dark: "#252525",
        darkGray: "#414141",
        gray: "#494949",
        softGray: "#8A8A8A",
        verySoftGray: "#BABABA",
        grayBorder: "#E2E2E2",
        lightGray: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
};
