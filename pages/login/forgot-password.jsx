import { useState } from "react";

import AuthenticationLayout from "../../components/authentication-layout";
import Button from "./../../components/button/button";
import InputName from "./../../components/inputs/input-name";
import useInput from "../../hooks/use-input";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { emailAction } from "./../../store/email";
import request from "../../utils/axios";

const pageData = {
  page: "forgot",
  buttonTitle: "NEXT",
  titleData: {
    title: "Forgot Password ?",
    description:
      "Please enter the email or phone number you use to sign in Kinect Portal",
  },
};

const nameInputValidateFn = (value) => {
  if (value.trim() !== "") {
    return true;
  }
  return false;
};

export default function ForgotPasswordPage() {
  const [errMessage, setErrMessage] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(nameInputValidateFn);

  let formIsValid = enteredNameIsValid;

  const formSubmissionHandler = async (event) => {
    try {
      event.preventDefault();

      if (!formIsValid) {
        //Chưa nhập form thì hiển thị lỗi
        nameInputBlurHandler();
        return;
      }

      // console.log(enteredName);
      dispatch(emailAction.setEmail({ name: enteredName }));

      const email = { email: enteredName };

      await request.post("auth/forgot-password", email);

      resetNameInput();
      setErrMessage("");
      //chuyển hướng sang trang Reset Password
      router.push("/login/reset-password");
    } catch (err) {
      const message = err.response.data.message;
      console.log(message);
      setErrMessage(message);
    }
  };

  return (
    <AuthenticationLayout isSignUp={true} pageData={pageData}>
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

        <Button
          link=""
          className="bg-blueBgGradient h-[43px] justify-center text-2xl font-black leading-7 py-[13px] mt-[23px]"
          // disabled={!formIsValid}
        >
          {pageData.buttonTitle}
        </Button>

        <Button
          link="/login"
          className="text-base leading-[18.75px] text-blue1 rounded-xl h-[43px] mt-[6px]"
        >
          Back to Log in
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
