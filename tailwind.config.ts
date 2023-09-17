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
        signupPage: "url('/images/signup-page/signup-bg.jpg')",
        signupSuccessPage: "url('/images/login-page/success-bg.jpg')",
        backdropHomePage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        blueBgGradient:
          "linear-gradient(93.29deg, #4776E6 0%, #4776E6 31.25%, #8E54E9 100%);",
        blueBorderGradient:
          "linear-gradient(93.29deg, #4776E6 0%, #FFFFFF 24.48%, #8E54E9 100%)",
        textGradient:
          "linear-gradient(90deg, #0038FF 0%, #F800FF 13.12%, #03ECE9 52.25%, #16BB52 91.38%)",
      },

      colors: {
        black1: "rgba(20,25,29,0.98)",
        black2: "rgba(26,32,36,1)",
        black3: "rgba(26,32,36,0.5)",
        black4: "rgba(47, 57, 64, 1)",
        grey1: "rgba(35,50,60,0.5)",
        grey2: "rgba(52,65,72,1)",
        grey3: "rgba(52,65,72,1)",
        grey4: "rgba(35,50,60,1)",
        blue1: "rgba(80,171,255,1)",
        blue2: "rgba(0,56,255,1)",
        blue3: "rgba(20,58,79,1)",
        blue4: "rgba(2, 253, 253, 1)",
        green1: "rgba(61,231,50,1)",
        red1: "rgba(231, 50, 50, 1)",
        pink1: "rgba(251, 4, 255, 1)",
        white1: "rgba(255, 255, 255, 0.7)",
      },
      boxShadow: {
        successBtn: "0px 0px 10px 0px rgba(151, 240, 145, 0.3)",
        failBtn: "0px 0px 10px 0px rgba(240, 145, 145, 0.3);",
        headerHome: "0px 4px 14px 0px rgba(35, 50, 60, 0.5);",
        cardGame: "4px 4px 4px 0px rgba(35, 50, 60, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
// background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
// background: linear-gradient(90deg, #0038FF 0%, #F800FF 13.12%, #03ECE9 52.25%, #16BB52 91.38%);
