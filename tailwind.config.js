/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "inter" : ['inter'],
        "RALEWAY" : ['Raleway', 'sans-serif']

      },
      colors:{
        "ungu" :'#5D50C6'
      },
      dropShadow :{
        "sm-shadow" : {
          
        }
      }
    },
  },
  plugins: [],
}