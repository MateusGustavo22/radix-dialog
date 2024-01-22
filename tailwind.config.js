/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        dialog: "4px 4px 10px 0px rgba(96, 90, 78, 0.25)",
      },
    },
  },
  plugins: [],
};
