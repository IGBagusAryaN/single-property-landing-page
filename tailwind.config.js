/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs2: "8px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "18px",
        md2: "28px",
        lg: "36px",
        xl: "38px",
        xl2: "48px"
      },
      colors: {
        brand: "#B7701B",
        hoverBrand: "#A85C01", 
        dark: "#252525",
        darkGray: "#414141", 
        gray: "#494949"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
