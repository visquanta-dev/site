import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(300%)', opacity: '0' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(300%)', opacity: '0' },
        },
      },
      animation: {
        'slide-right': 'slide-right 2s linear infinite',
        'slide-down': 'slide-down 2s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
