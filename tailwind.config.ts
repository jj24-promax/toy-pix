import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: {
          50: "#ecfdf8",
          100: "#d0f7ea",
          500: "#14b896",
          700: "#0d7a66",
        },
        skyplay: {
          400: "#38bdf8",
          600: "#0284c7",
        },
        bubblegum: {
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
        },
        sun: {
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
        },
        lilac: {
          400: "#c084fc",
          500: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-fredoka)", "var(--font-nunito)", "cursive"],
      },
      boxShadow: {
        float: "0 10px 40px -10px rgba(20, 184, 150, 0.35)",
        "float-pink": "0 12px 40px -8px rgba(236, 72, 153, 0.4)",
        "float-sun": "0 12px 36px -8px rgba(234, 179, 8, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "70%": { opacity: "1", transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "bounce-in": "bounce-in 0.55s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
