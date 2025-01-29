/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans your project for class usage in these files
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
      },
    },
  },
  plugins: [],
};
