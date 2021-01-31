// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "info-bg": "url('/images/info-bg.jpg')",
        "head-icon": "url('/images/headIcon.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
