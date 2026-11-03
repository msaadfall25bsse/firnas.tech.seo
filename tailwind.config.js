/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F07825",
          "orange-secondary": "#FF8C42",
          dark: "#171717",
          gray: "#6B7280",
          light: "#F8F8F8",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};

