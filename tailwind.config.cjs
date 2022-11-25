/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mybg: "url('/public/inception.jpg')",
      },
    },
  },
  plugins: [],
};
