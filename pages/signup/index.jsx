import AuthenticationLayout from "./../../components/authentication-layout";

const pageData = {
  page: "signup",
  buttonTitle: "START",
  titleData: {
    title: "SIGN UP",
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

export default function SignupPage() {
  return <AuthenticationLayout isSignUp={false} pageData={pageData} />;
}
