/** @type {import('tailwindcss').Config} */
import {} from "com";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // important: "#root",
  theme: {
    extend: {
      colors: {
        darkPurple: "#060F21",
        litePurple: "#17356C",
        glassy:"#0B1933",
        lightwhite: "rgba(255,255,255,0.17)",
      },
      backgroundImage: {
        dashboard: "url('./src/assets/banners/dashbord.jpg')",
      },
    },
  },
  plugins: [],
};
