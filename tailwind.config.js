const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      height:{
        "vh-90":"90vh",
      },
      width:{
        "vw-90":"90vw",
      },
      keyframes:{
        slidein:{
          from:{
            opacity:"0",
            transform:"translateY(-10px)",
          },
          to:{
            opacity:"1",
            transform:"translateY(0)",
          },
        },
      },
      animation:{
        slidein1:"slidein 1s ease 400ms forwards",
        slidein2:"slidein 1s ease 600ms forwards",
        slidein3:"slidein 1s ease 800ms forwards",
      },
    },
  },
  plugins: [],
}