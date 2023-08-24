import plugins from "./postcss.config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        default: "url(./assets/background.jpg)",
      },
    },
  },
  plugins: [plugins],
};
