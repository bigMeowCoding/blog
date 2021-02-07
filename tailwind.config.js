// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "head-icon": "url('/images/headIcon.png')",
        "icon-email": "url('/images/icons/email.svg')",
        "icon-github": "url('/images/icons/github.svg')",
        "icon-wechat": "url('/images/icons/wechat.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
