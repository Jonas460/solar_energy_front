/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  purge: ["./components//*.{js,ts,jsx,tsx}", "./pages//*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {}
    }
  },
  plugins: [require("tailwindcss-animate")]
}
