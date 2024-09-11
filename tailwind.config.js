/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          default:"1rem",
          md:"2rem",
          lg:"4rem",
          xl:"6rem",
        }
      },
    },
  },
  plugins: [],
}

