import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        welcomePage: "url('/images/welcome_background.jpg')",
        blueBagGradient:
          "linear-gradient(93.29deg, #4776E6 0%, #4776E6 31.25%, #8E54E9 100%);",
        blueBorderGradient:
          "linear-gradient(93.29deg, #4776E6 0%, #FFFFFF 24.48%, #8E54E9 100%)",
      },
      colors: {
        lightGrey: "rgba(35,50,60,0.5)",
        lightBlue: "rgba(80, 171, 255, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
