module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bgHero.jpg')",
        'me-reading': "url('/meReading.jpg')",
        'en-flag': "url('/en.jpg')",
        'es-flag': "url('/es.jpg')",
      }
    },
  },
  plugins: [],
}
