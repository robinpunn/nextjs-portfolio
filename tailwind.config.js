/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        light:
          "0 0 5px #4c1d95, 0 0 10px #4c1d95, 0 0 25px #4c1d95, 0 0 50px #4c1d95",
        bright:
          "0 0 10px #4c1d95, 0 0 25px #4c1d95, 0 0 50px #4c1d95, 0 0 100px #4c1d95",
      },
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
