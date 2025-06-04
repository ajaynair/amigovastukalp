/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}", // Scan all relevant files in the project root and subdirectories
  ],
  theme: {
    extend: {
      colors: {
        cyan: { // Keep custom cyan shades if used directly, or let Tailwind handle it
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        }
      }
    },
  },
  plugins: [],
}
