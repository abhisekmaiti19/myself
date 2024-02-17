/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#0F0F0F",
        "brand-bg-light": "#1E1B1E",
        "brand-purple": "#8623FB",
        "brand-black-light": "#AAA9AA",
        "brand-text-dark": "#6D6E71",
      },
      screens: {
        // for safe side i increase pixel by +1
        xxxl: "1920px",
        xxl: "1496px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        xs: "100px",
      },
    },
  },
  plugins: [],
};
