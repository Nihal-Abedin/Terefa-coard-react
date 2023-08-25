import plugins from "./postcss.config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        default:
          "linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3)), url('../src/assets/background.jpg')",
      },
      transformOrigin: {
        dragable: "translate(0,0)",
      },
    },
  },
  plugins: [plugins],
};
