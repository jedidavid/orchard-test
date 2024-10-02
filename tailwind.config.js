/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1240px",
      // => @media (min-width: 1240px) { ... }
    },
    extend: {
      colors: {
        "ruined-smores": "#0e1414",
        primary: "#bd3534",
        "gun-smoke": "#8b8d8d",
      },
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      body: ['"Open Sans"', "sans-serif"],
    },
  },
  plugins: [],
};
