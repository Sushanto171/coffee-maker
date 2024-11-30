
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        "nav-bg" : "url(./src/assets/images/more/15.jpg)",
        "banner-bg" : "url(./src/assets/images/more/3.png)"
       },
      fontFamily: {
        "Rancho" : ["Rancho", "cursive"]
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

