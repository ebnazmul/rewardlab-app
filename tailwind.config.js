/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.js","./screens/**/*.{js,jsx,ts,tsx}", "./utils/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}