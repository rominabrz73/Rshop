/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "var(--background)",
        contentWrapper: "var(--content-wrapper)",
      },
      colors: {
        textColor: "var(--text-color)",
        textColor: "var(--text-color)",
        textColorLight: "--text-color-light",
        primary: "--primary",
        Secendery: "--secendery",
      },
    },
  },
  plugins: [],
};

