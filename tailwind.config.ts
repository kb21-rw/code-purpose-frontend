import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "12xl": "125rem",
        "15": "3.75rem",
        "18": "4.375rem",
        "25": "6.25rem",
        "100": "25rem",
      },
      letterSpacing: {
        1.5: "0.156em",
      },
      lineHeight: {
        "7.5": "1.9688rem",
      },
      fontSize: {
        "2.1xl": "1.5625rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
