module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: 'class',
  darkMode: 'light',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/backgrounds/31.png')",
      },
    },
  },
  plugins: [],
};
