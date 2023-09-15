/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E5E7EB",
          200: "#6B7280",
          300: "#111827",
        },
        secondary: {
          100: "#E11D48",
          200: "#9F1239",
          300: "#0369A1",
        },
      },
      fontFamily: {
        body: ["DM Sans"],
      },
      // backgroundImage: {
      //   "hero-pattern":
      //     "url('https://images.hdqwalls.com/download/john-wick-3-parabellum-poster-qf-1440x900.jpg')",
      // },
    },
  },
  plugins: [],
};
