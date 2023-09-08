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
        loginPage: "url('/images/login-page/login-bg.jpg')",
        blueBgGradient:
          "linear-gradient(93.29deg, #4776E6 0%, #4776E6 31.25%, #8E54E9 100%);",
        blueBorderGradient:
          "linear-gradient(93.29deg, #4776E6 0%, #FFFFFF 24.48%, #8E54E9 100%)",
      },
      colors: {
        black1: "rgba(20,25,29,0.98)",
        grey1: "rgba(35,50,60,0.5)",
        grey2: "rgba(52,65,72,1)",
        grey3: "#344148",
        blue1: "rgba(80,171,255,1)",
        blue2: "#0038FF",
        blue3: "#143A4F",
      },
    },
  },
  plugins: [],
};
export default config;
