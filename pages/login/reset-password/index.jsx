import AuthenticationLayout from "../../../components/authentication-layout";
import InputPassword from "./../../../components/inputs/input-password";
import Button from "./../../../components/button/button";
import InputConfirmPassword from "../../../components/inputs/input-confirm-password";
import useInput from "../../../hooks/use-input";

const pageData = {
  page: "reset",
  titleData: {
    title: "Reset Password",
    description: "Please enter your new password",
  },
};

const passwordInputValidateFn = (value) => {
  if (value.trim() !== "" && value.length > 7) {
    return true;
  }
  return false;
};

export default function ResetPasswordPage() {
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordInputValidateFn);

  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordInputChangeHandler,
    inputBlurHandler: confirmPasswordInputBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput(passwordInputValidateFn);

  let formIsValid = false;
  if (enteredConfirmPasswordIsValid && enteredPasswordIsValid)
    formIsValid = true;

  const formSubmissionHandler = (event) => {
    console.log(`Form is Valid? ${formIsValid}`);
    event.preventDefault();

    if (!formIsValid) {
      //Chưa nhập form thì hiển thị lỗi
      passwordInputBlurHandler();
      confirmPasswordInputBlurHandler();
      return;
    }

    console.log(enteredPassword);
    resetPasswordInput();

    console.log(enteredConfirmPassword);
    resetConfirmPasswordInput();
  };

  return (
    <AuthenticationLayout isSignUp={true} pageData={pageData}>
      <form
        className="mt-[50px] flex flex-col max-w-[386px] w-full"
        onSubmit={formSubmissionHandler}
      >
        <InputPassword
          isResetPage={true}
          onPasswordInputChange={passwordInputChangeHandler}
          onPasswordInputBlur={passwordInputBlurHandler}
          passwordValue={enteredPassword}
          hasError={passwordInputHasError}
        />
        <InputConfirmPassword
          onConfirmPasswordInputChange={confirmPasswordInputChangeHandler}
          onConfirmPasswordInputBlur={confirmPasswordInputBlurHandler}
          confirmPasswordValue={enteredConfirmPassword}
          hasError={confirmPasswordInputHasError}
        />

        <Button
          link=""
          className="bg-blueBgGradient h-[43px] justify-center text-2xl font-black leading-7 py-[13px] mt-[23px]"
          // disabled={!formIsValid}
        >
          START
        </Button>
        {/* {resetPasswordPageHasError && (
          <p className="text-base text-red1 mt-2">Password is not match!</p>
        )} */}
      </form>
    </AuthenticationLayout>
  );
}
