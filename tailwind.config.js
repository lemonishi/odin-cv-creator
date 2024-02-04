/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        a4: "210mm",
      },
      height: {
        a4: "297mm",
      },
      gridTemplateRows: {
        cvpreview: "50mm minmax(250mm, auto)",
      },
      gridTemplateColumns: {
        cvpreview: "60mm 1fr",
      },
    },
  },
  plugins: [],
};
