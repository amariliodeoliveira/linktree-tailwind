/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  theme: {
    colors: {
      'lavander': '#eeefff',
      'corn-flower': '#7597de',
      'blue-violet': '#695bae',
      'russian-violet': '#2b1055',
      'dark-purple': '#1c0522',
    },

    extend: {
      backgroundImage: {
        'bg': 'linear-gradient(-60deg, #1c0522 50%, #2b1055 50%)',
      },

      keyframes: {
        'slide': {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(25%)' },
        },
      },

      animation: {
        'slide-normal': 'slide 3s ease-in-out infinite alternate',
        'slide-fast': 'slide 4s ease-in-out infinite alternate-reverse',
        'slide-fastest': 'slide 5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],

  safelist: [{ pattern: /^(.*?)/ }],
};
