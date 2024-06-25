import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      customBlueRgb: 'rgba(0,79,146,0.85)',
      customLightGrey: '#f8f8f8',
      customBlack: '#0F192D',
      customGrey: '#fafafa',
      customWhite: '#ffffff',
      customBlue: '#004F92',
      customHoverButton: '#252525',
      customDarkGrey: '#F4F4F4',
      customDarkGrey2: '#F6F7F8',
      customDarkGrey3:'#f1f1f5',
      customDarkGrey4:'#fbfbfb',
      textGrey:'#9c9ea2',
      customOrange:'#F5742E'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
