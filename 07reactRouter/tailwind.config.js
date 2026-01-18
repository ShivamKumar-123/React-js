/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* ================= COLORS ================= */
      colors: {
        primary: "#f97316", // orange-500
        secondary: "#ec4899", // pink-500
        dark: "#0f172a", // slate-900
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        fadeInLeft: "fadeInLeft 0.9s ease-out forwards",
        fadeInRight: "fadeInRight 0.9s ease-out forwards",
        fadeInUp: "fadeInUp 0.9s ease-out forwards",
        fadeInDown: "fadeInDown 0.9s ease-out forwards",

        float: "float 3s ease-in-out infinite",
        softPulse: "softPulse 2s ease-in-out infinite",

        scaleIn: "scaleIn 0.6s ease-out forwards",
        gradientMove: "gradientMove 6s ease infinite",
        glow: "glow 2.5s ease-in-out infinite",
      },

      /* ================= KEYFRAMES ================= */
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },

        softPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },

        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },

        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 35px rgba(236, 72, 153, 0.6)",
          },
        },
      },

      /* ================= BACKGROUND SIZE ================= */
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
