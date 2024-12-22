export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'newhite' : '#F1FAEE',
      'lightblue' : '#A8DADC',
      'newred' : '#E63946',
      'newblue' : '#457B9D',
    },
    fontFamily : {
      'newfont' : ["Roboto Slab","serif"],
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
          },
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}