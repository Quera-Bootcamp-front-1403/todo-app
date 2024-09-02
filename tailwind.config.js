/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        "custom-38": "38px",
        "custom-52": "52px",
      },
      borderRadius: {
        "custom-10": "10px",
      },
      colors: {
        dark: {
          "background-Dark": "#040810",
          "#848890c": "#848890",
          "#57A8FFc": "#57A8FF",
          "#203E62c": "#203E62",
          "#091120c": "#091120",
          "#52555Bc": "#52555B",
          "#AFAEB2c": "#AFAEB2",
          "#7D7D7Fc": "#7D7D7F",

        },
        "#696969c": "#696969",
        "#007BFFc": "#007BFF",
        "#CCCCCCc": "#CCCCCC",
        "#7D7D7Fc": "#7D7D7F",
        "#AFAEB2c": "#AFAEB2"
      },
    },
  },
  plugins: [],
}

