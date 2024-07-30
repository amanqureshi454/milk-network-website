/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xxl": "1800px",  // Extra-extra-large screens (>= 1800px)
        "xl": "1280px",   // Extra-large screens (>= 1280px)
        "lg": "1024px",   // Large screens (>= 1024px)
        "md": { "min": "540px", "max": "1024px" },     // Medium screens (>= 950px)
        "sm": { "min": "320px", "max": "540px" },   // Small screens (>= 640px)
      }
    }
  },
  plugins: []
};
