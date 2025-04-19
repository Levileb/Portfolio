const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    
    extend: {
      screens:{
        'laptop': '1024px',
        'desktop': '1230px',
        'cs':'768px',
        '1433':'1433px',

      },
      height:{
        "vh-90":"80vh",
      },
      width:{
        "vw-90":"80vw",
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
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-intersect') 
],
}