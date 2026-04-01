/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ac3500",
        "primary-container": "#ff6c37",
        "secondary": "#005ac1",
        "secondary-container": "#4d8efe",
        "surface": "#fff8f6",
        "surface-container-low": "#fff1ed",
        "surface-container-highest": "#f7ddd6",
        "surface-container-lowest": "#ffffff",
        "background": "#fff8f6",
        "on-background": "#261814",
        "on-surface": "#261814",
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  plugins: [],
}
