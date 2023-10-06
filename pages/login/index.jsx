import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import AuthenticationLayout from "../../components/authentication-layout";
import InputName from "../../components/inputs/input-name";
import Button from "@/components/button/button";
import InputPassword from "../../components/inputs/input-password";
import useInput from "@/hooks/use-input";
import request from "@/utils/axios";
import { authAction } from "@/store/auth";
import isAccessTokenValid from "./../../utils/checkAccessTokenExpiration";

const pageData = {
  page: "login",
  titleData: {
    title: "LOG IN",
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

export default function LoginPage() {
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
    try {
      console.log(`Form is Valid? ${formIsValid}`);
      event.preventDefault();

      if (!formIsValid) {
        //Chưa nhập form thì hiển thị lỗi
        nameInputBlurHandler();
        passwordInputBlurHandler();
        return;
      }

      const loginData = { email: enteredName, password: enteredPassword };
      console.log(loginData);
      const res = await request.post("auth/login-email", loginData);

      const accessToken = res.data.access_token;

      const isLoggin = isAccessTokenValid(accessToken);
      console.log(`trang thai: ${isLoggin}`);

      //lưu Access Token vào local storage
      localStorage.setItem("accessToken", accessToken);

      // const payload = {
      //   ...loginData,
      //   accessToken,
      //   loggedIn: true,
      // };
      // dispatch(authAction.setAuth(payload));
      // console.log(res.data);

      //CLEAR INPUT FIELDS
      resetNameInput();
      resetPasswordInput();
      setErrMessage("");

      router.push("/");
    } catch (err) {
      console.log(err);

      if (!err?.response) {
        setErrMessage("No Server Response!");
      } else {
        const message = err.response.statusText;
        console.log(message);
        setErrMessage(message);
      }
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
        <InputPassword
          onPasswordInputChange={passwordInputChangeHandler}
          onPasswordInputBlur={passwordInputBlurHandler}
          passwordValue={enteredPassword}
          hasError={passwordInputHasError}
        />
        <Link
          href="/login/forgot-password"
          className="self-end text-sm leading-4 text-blue2 mt-[6px]"
        >
          Forgot Password?
        </Link>

        <Button
          link=""
          className="bg-blueBgGradient h-[43px] justify-center text-2xl font-black leading-7 py-[13px] mt-[23px]"
          // disabled={!formIsValid}
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
