/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grays
        cfDarkGray: "#1d1d1f",
        cfDarkerGray: "#141416",
        cfMediumGray: "#262628",
        cfLightGray: "#2f2f31",
        cfGray: "#A3A3A3",

        // Brand colors
        cfPurple: "#4323FF",

        // Greens
        cfDarkGreen: "#488163",
        cfGreen: "#73fbb0",

        // Reds & Oranges
        cfOrange: "#FF6A55",
        cfRed: "#E74C3C",
        cfDarkRed: "#d94840",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      minHeight: {
        inherit: "inherit",
      },
      spacing: {
        header: "80px",
      },
    },
  },
  plugins: [],
};
