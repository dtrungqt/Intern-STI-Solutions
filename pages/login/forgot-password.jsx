import AuthenticationLayout from "../../components/authentication-layout";

const pageData = {
  page: "forgot",
  buttonTitle: "NEXT",
  titleData: {
    title: "Forgot Password ?",
    description:
      "Please enter the email or phone number you use to sign in Kinect Portal",
  },
  inputsData: [
    {
      type: "text",
      title: "Email or Phone Number",
      htmlForLabel: "emailOrPhone",
      idInput: "emailOrPhone",
      nameInput: "emailOrPhone",
    },
  ],
};

export default function ForgotPasswordPage() {
  return <AuthenticationLayout isSignUp={true} pageData={pageData} />;
}
