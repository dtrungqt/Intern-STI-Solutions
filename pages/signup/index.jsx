import { useRouter } from "next/router";
import { useState } from "react";

import AuthenticationLayout from "./../../components/authentication-layout";
import InputName from "./../../components/inputs/input-name";
import InputPassword from "./../../components/inputs/input-password";
import Button from "./../../components/button/button";
import useInput from "./../../hooks/use-input";
import request from "./../../utils/axios";

const pageData = {
  page: "signup",
  titleData: {
    title: "SIGN UP",
    description: "Hi There! Join Us And Enjoy",
  },
};

const nameInputValidateFn = (value) => {
  if (value.trim() !== "") {
    return true;
  }
  return false;
};

const passwordInputValidateFn = (value) => {
  if (value.trim() !== "" && value.length > 7) {
    return true;
  }
  return false;
};

export default function SignupPage() {
  const router = useRouter();
  const [errMessage, setErrMessage] = useState("");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(nameInputValidateFn);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordInputValidateFn);

  let formIsValid = false;
  if (enteredNameIsValid && enteredPasswordIsValid) formIsValid = true;

  const formSubmissionHandler = async (event) => {
    // console.log(`Form is Valid? ${formIsValid}`);
    try {
      event.preventDefault();

      if (!formIsValid) {
        //Chưa nhập form thì hiển thị lỗi
        nameInputBlurHandler();
        passwordInputBlurHandler();
        return;
      }
      const newUser = {
        email: enteredName,
        password: enteredPassword,
      };
      console.log(newUser);
      const res = await request.post("auth/signup", newUser);

      // console.log(res);

      //reset form
      resetNameInput();
      resetPasswordInput();
      setErrMessage("");

      //redirect
      router.push("/signup/success");
    } catch (err) {
      // console.log(err);
      const message = err.response.data.message;
      console.log(message);
      setErrMessage(message);
      // router.push("/signup/fail");
    }
  };

  return (
    <AuthenticationLayout isSignUp={false} pageData={pageData}>
      <form
        className="mt-[50px] flex flex-col max-w-[386px] w-full"
        onSubmit={formSubmissionHandler}
      >
        <InputName
          onNameInputChange={nameInputChangeHandler}
          onNameInputBlur={nameInputBlurHandler}
          nameValue={enteredName}
          hasError={nameInputHasError}
        />
        <InputPassword
          onPasswordInputChange={passwordInputChangeHandler}
          onPasswordInputBlur={passwordInputBlurHandler}
          passwordValue={enteredPassword}
          hasError={passwordInputHasError}
        />
        <Button
          link=""
          className="bg-blueBgGradient h-[43px] justify-center text-2xl font-black leading-7 py-[13px] mt-[23px]"
        >
          START
        </Button>
        {!!errMessage && (
          <h6 className="text-base text-red1 font-semibold mt-2">
            {errMessage}
          </h6>
        )}
      </form>
    </AuthenticationLayout>
  );
}
