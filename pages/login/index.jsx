import CustomLoginPage from "../../components/login-layout";

const pageData = {
  page: "login",
  buttonTitle: "START",
  titleData: {
    title: "LOG IN",
    description: "Hi There! Join Us And Enjoy",
  },
  inputsData: [
    {
      type: "text",
      title: "Email or Phone Number",
      htmlForLabel: "emailOrPhone",
      idInput: "emailOrPhone",
      nameInput: "emailOrPhone",
    },
    {
      type: "password",
      title: "Password",
      htmlForLabel: "password",
      idInput: "password",
      nameInput: "password",
    },
  ],
};

export default function LoginPage() {
  return <CustomLoginPage isSignUp={true} pageData={pageData} />;
}
