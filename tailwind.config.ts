import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#F3C726",
        secondary: "#3B1FD3",
      },

      spacing: {
        "12xl": "125rem",
        "15": "3.75rem",
        "18": "4.375rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "100": "25rem",
        "100vh": "100vh",
      },
      letterSpacing: {
        1.5: "0.156em",
      },
      lineHeight: {
        "7.5": "1.9688rem",
        "11": "2.75rem",
      },
      fontSize: {
        "2.1xl": "1.5625rem",
        "7.5xl ": "4.375rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
