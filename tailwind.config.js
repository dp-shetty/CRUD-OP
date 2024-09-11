/** @type {import('tailwindcss').Config} */
export default {
  content: [`./src/**/*.{html,js,jsx,tsx}`],
  theme: {
    extend: {
      screens: {
        mob: { min: "320px", max: "480px" },
        "tab-p": { min: "481px", max: "768px" },
        "tab-l": { min: "769px", max: "1024px" },
        lap: { min: "1025px", max: "1200px" },
        "lap-lg": { min: "1201px", max: "1566px" },
        desktop: { min: "1567px", max: "1920px" },
      },
    },
  },
  plugins: [],
};
