const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        saira: "'Saira Condensed', sans-serif;",
        anton: "'Anton', sans-serif;",
        antonio: "'Antonio', sans-serif;",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": { transform: "rotate(3deg)" },
        },

        smoke: {
          "0%, 100%": {
            transform: "translateY(-15%)",
          },
          "50%": { transform: "translateY(0)" },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(-2%)",
          },
          "50%": { transform: "translateY(0)" },
        },
      },

      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
        smoke: "smoke 5s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
