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
    },
  },
  corePlugins: {
    preflight: false,
  },
};
