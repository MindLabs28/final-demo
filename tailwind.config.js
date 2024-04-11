/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "dodgerblue",
        secondary: "#3247FF",
      },
      backgroundImage: {
        mainBg:
          "url(https://github.com/pathikcomp/images/blob/main/bg.jpg?raw=true)",
      },
    },
  },
  plugins: [],
}
