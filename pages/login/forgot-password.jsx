import CustomLoginPage from "../../components/login-layout";

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
  return <CustomLoginPage isSignUp={true} pageData={pageData} />;
}
