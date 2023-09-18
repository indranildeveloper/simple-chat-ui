/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fca5a5",
          secondary: "#22d3ee",
          accent: "#c149ad",
          neutral: "#021431",
          "base-100": "#ffffff",
          info: "#93e6fb",
          success: "#80ced1",
          warning: "#efd8bd",
          error: "#e58b8b",
        },
      },
    ],
  },
};
