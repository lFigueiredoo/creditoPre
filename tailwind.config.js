/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url('/assets/fundo.png')",
        fundo2: "url('/assets/fundo2.png')",
      },
      boxShadow: {
        custom: "0 2px 5px #f5f5f5",
      },
    },
  },
  plugins: [],
};
