/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  theme: {
    colors: {
      lavander: "#eeefff",
      "corn-flower": "#7597de",
      "blue-violet": "#695bae",
      "russian-violet": "#2b1055",
      "dark-purple": "#1c0522",
    },
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(25%)" },
        },
      },
    },
  },
  plugins: [],

  safelist: [{ pattern: /^(.*?)/ }],
};
