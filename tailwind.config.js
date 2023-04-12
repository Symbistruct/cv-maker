/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-main": "#333333",
        "text-white": "#f5f5f5",
        "main-orange": "#f88b53",
        "main-black": "#1f1f1f",
        "orange-tint-black": "#402416",
        "main-white": "#f2f2f2",
        "light-black": "#212027",
      },
    },
  },
  plugins: [],
};
