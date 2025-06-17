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
        "92vh": "92vh",
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
      keyframes: {
        "slide-infinite": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fly-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -1500px, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(0, 25px, 0)",
          },
          "75%": {
            transform: "translate3d(0, -10px, 0)",
          },
          "90%": {
            transform: "translate3d(0, 5px, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
