/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js,tsx}"
  ],
  theme: {
    fontSize: {
      "weatherCardText": "12px",
      "hpaText": "12px",
      "heading2": "36px",
      "heading2Mobile": "24px",
      "textMobile": "16px",
      "textFigures": "28px",
      "textFiguresMobile": "20px",
      "cardHeading": "20px"
    },
    extend: {},
  },
  plugins: [],
}