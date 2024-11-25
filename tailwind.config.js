/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F91",
        "primary-hover": "#E05A7A",
        lavanda: "#CBAACB",
        "azul-pastel": "#A0E7E5",
        menta: "#B4F8C8",
        caramelo: "#FFDAC1",
        creme: "#FFF7AE",
        chocolate: "#8C564B",
        "preto-pastel": "#4A4A4A",
        "sidebar-background": "#4A4A4A",
        noteslist: "#f5f5f4",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--primary": theme("colors.primary"),
          "--rosa-glace": theme("colors.rosa-glace"),
          "--menta": theme("colors.menta"),
          "--preto-pastel": theme("colors.preto-pastel"),
          "--lavanda": theme("colors.lavanda"),
          "--creme": theme("colors.creme"),
          "--azul-pastel": theme("colors.azul-pastel"),
          "--bg-paper": "rgba(240, 231, 219)",
          "--bg-noteslist": theme("colors.noteslist"),
          // Adicione mais variáveis conforme necessário
        },
      });
    },
  ],
};
