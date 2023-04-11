/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-main": "#333333",
        "text-white": "#f5f5f5",
        "main-orange": "#f88b53",
        "orange-tint-black": "#402416",
      },
    },
  },
  plugins: [],
};
