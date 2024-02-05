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
        xxl: "1496px",
        xl: "1201px",
        lg: "993px",
        md: "769px",
        sm: "577px",
        xsm: "100px",
      },
    },
  },
  plugins: [],
};
