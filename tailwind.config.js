/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#353331",
        black: "#000",
        gainsboro: "#d9d9d9",
        firstcolor: "#ffaaaa",
        secondcolor: "#e37070",
        thirdcolor: "#c7004c",
        fourthcolor: "#766583",
        fifthcolor: "#a790ac"

      },
      theme: {
        extend: {
          zIndex: {
            '100': '100',
          }
        }
      },
      spacing: {},
      fontFamily: {
        fontawesome: "FontAwesome",
        "fira-sans": "'Fira Sans'",
      },
    },
    fontSize: {
      xl: "20px",
      mini: "15px",
      inherit: "inherit",
      xxl: "100px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
