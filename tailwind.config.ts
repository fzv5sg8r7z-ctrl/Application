import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080808",
          deep: "#050505",
          soft: "#0f0f10",
          muted: "#1a1a1c",
        },
        flame: {
          DEFAULT: "#ff5a1f",
          bright: "#ff7a3d",
          glow: "#ffae6a",
        },
        ember: {
          DEFAULT: "#b91c1c",
          dark: "#7f1313",
        },
        bone: {
          DEFAULT: "#f5f0e8",
          dim: "#cdc7bd",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        "5xl": "2.75rem",
      },
      backgroundImage: {
        "flame-gradient":
          "radial-gradient(120% 80% at 50% 0%, #ff7a3d 0%, #ff5a1f 35%, #b91c1c 65%, #080808 100%)",
        "flame-soft":
          "linear-gradient(135deg, rgba(255,90,31,0.18) 0%, rgba(185,28,28,0.05) 60%, rgba(8,8,8,0) 100%)",
        "noise":
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(255, 90, 31, 0.55)",
        card: "0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
