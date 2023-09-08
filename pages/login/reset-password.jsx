import CustomLoginPage from "../../components/login-layout";

const pageData = {
  page: "reset",
  buttonTitle: "START",
  titleData: {
    title: "Reset Password",
    description: "Please enter your new password",
  },
  inputsData: [
    {
      type: "password",
      title: "Password*",
      htmlForLabel: "password",
      idInput: "password",
      nameInput: "password",
    },
    {
      type: "password",
      title: "Confirm Password*",
      htmlForLabel: "confirmedPassword",
      idInput: "confirmedPassword",
      nameInput: "confirmedPassword",
    },
  ],
};

export default function ResetPasswordPage() {
  return <CustomLoginPage isSignUp={true} pageData={pageData} />;
}
