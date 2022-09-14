/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",

  content: [
    "./pages/**/*.js",
    "./pages/*.js",
    "./components/**/*.js",
    "./components/*.js",
  ],

  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightBackground: "#F2F2F2",
        gray: "#5A5A5A",
        green: "#9FBA17",
        orange: "#FF7E00",
        red: "#DB3434",
        blue: "#2290e3",
        darkBackground: "#212121",
      },
      screens: {
        notebook: { max: "1440px" },
        // => @media (max-width: 1279px) { ... }

        mobile: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }
      },
    },
  },
  plugins: [],
};
