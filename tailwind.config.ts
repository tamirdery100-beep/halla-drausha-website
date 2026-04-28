import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          deep: "#002B49",
          "deep-2": "#00375E",
          cyan: "#00A3E0",
          "cyan-soft": "#7DD3FC",
          canvas: "#F8FAFC",
          ink: "#0B1220",
          muted: "#475569",
          line: "#E2E8F0",
          success: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-assistant)", "system-ui", "sans-serif"],
        display: ["var(--font-frank)", "Georgia", "serif"],
      },
      fontSize: {
        // fluid scale
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1.0625rem", { lineHeight: "1.7" }],
        "eyebrow": ["0.8125rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      backgroundImage: {
        "grid-deep":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        "radial-spotlight":
          "radial-gradient(60% 60% at 50% 0%, rgba(0,163,224,0.18) 0%, rgba(0,43,73,0) 70%)",
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        "ring-cyan": "0 0 0 1px rgba(0,163,224,0.35), 0 8px 24px rgba(0,163,224,0.12)",
        "depth": "0 30px 60px -20px rgba(0,43,73,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "drift-y": "drift-y 6s ease-in-out infinite",
        "shimmer": "shimmer 2.4s linear infinite",
        "marquee": "marquee 38s linear infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
