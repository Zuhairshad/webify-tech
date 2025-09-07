
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1220",
        card: "#101828",
        "muted": "#94A3B8",
        "accent": {
          1: "#818CF8",
          2: "#38BDF8",
          3: "#22D3EE"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      },
      backdropBlur: {
        xs: "2px"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      }
    },
  },
  plugins: [],
}
