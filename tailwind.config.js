/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#111000",
        SubMain: "red",
        transparents: "rgba(0,0,0,0.68)",
        Transparent: "rgba(0,0,0,0.1)",
        dry: "#151313",
        start: "#FFB000",
        Text: "#333333",
        border: "#4b5563",
        dryGray: "#E0D5D5",
        dark: "#353232",
        glass: "rgba(255, 255, 255, 0.1)"
      },
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit")
  ],
}
