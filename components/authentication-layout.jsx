import Button from "@/components/button/button";
import Link from "next/link";

import useInput from "@/hooks/use-input";
import { Fragment, useState, useEffect } from "react";
// isSignUp: true-false

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

const confirmPasswordInputValidateFn = (value) => {
  if (value.trim() !== "" && value.length > 7) {
    return true;
  }
  return false;
};

export default function AuthenticationLayout({ isSignUp, pageData, children }) {
  let titleStyle = "text-[80px] leading-[94px]";
  if (pageData.page === "forgot" || pageData.page === "reset") {
    titleStyle = "text-[60px] leading-[70px]";
  }

  // const confirmPasswordInputValidateFn = (value) => {
  //   if (enteredPassword === enteredConfirmPassword) {
  //     return true;
  //   }
  //   return false;
  // };

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

  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordInputChangeHandler,
    inputBlurHandler: confirmPasswordInputBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput(confirmPasswordInputValidateFn);

  const [passwordNotMatch, setPasswordNotMatch] = useState(true);
  const resetPasswordPageHasError =
    passwordNotMatch && pageData.page === "reset";

  //VALIDATE FORM
  let formIsValid = false;
  if (pageData.page === "reset") {
    if (
      enteredNameIsValid &&
      enteredPasswordIsValid &&
      enteredConfirmPasswordIsValid
    )
      formIsValid = true;
  } else if (pageData.page === "forgot") {
    if (enteredNameIsValid && enteredPasswordIsValid) formIsValid = true;
  } else {
    formIsValid = enteredNameIsValid;
  }

  // console.log(formIsValid);

  //TRƯỜNG HỢP SUBMIT FORM
  /////////////////////////////////////
  const forgotSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return; //sử dụng để phòng trường hợp người dùng can thiệp vào code để enable nút submit

    console.log(enteredName);
    resetNameInput();
  };

  const loginSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    console.log(enteredName);
    resetNameInput();

    console.log(enteredPassword);
    resetPasswordInput();
  };

  const resetSubmissionHandler = (event) => {
    console.log("Validddddddddddd");
    event.preventDefault();
    if (!formIsValid) return;

    //Đối với trang ResetPassword, kiểm tra phần Nhập lại MK có trùng với phần Nhập MK không
    if (enteredPassword === enteredConfirmPassword) {
      console.log(enteredName);
      console.log(enteredConfirmPassword);
      setPasswordNotMatch(false);
    } else return;

    console.log(enteredName);
    resetNameInput();

    console.log(enteredPassword);
    resetPasswordInput();

    console.log(enteredConfirmPassword);
    resetConfirmPasswordInput();
  };

  //kết thúc TRƯỜNG HỢP SUBMIT FORM
  /////////////////////////////////////

  const [formSubmissionHandler, setFormSubmissionHandler] = useState("");

  // useEffect(() => {
  //   if (pageData.page === "login") {
  //     setFormSubmissionHandler(loginSubmissionHandler);
  //   } else if (pageData.page === "forgot") {
  //     setFormSubmissionHandler(forgotSubmissionHandler);
  //   } else {
  //     setFormSubmissionHandler(resetSubmissionHandler);
  //   }
  // }, [pageData.page]);

  //inputForm
  // const inputForm = pageData.inputsData.map((item, index) => {
  //   let marginTopSize = "";
  //   let inputComponent = (
  //     <Fragment>
  //       <input
  //         type={item.type}
  //         id={item.idInput}
  //         name={item.nameInput}
  //         className="w-full mt-[10px] bg-grey3 max-w-[386] h-12 rounded-[10px] px-4"
  //         onChange={nameInputChangeHandler}
  //         onBlur={nameInputBlurHandler}
  //         value={enteredName}
  //       />
  //       {/* hiển thị thông báo lỗi  */}
  //       {nameInputHasError && (
  //         <p className="text-base text-red1 mt-2">Name must not be empty!</p>
  //       )}
  //     </Fragment>
  //   );

  // if (item.type === "password") {
  //   marginTopSize = "mt-[19px]";

  //   inputComponent = (
  //     <Fragment>
  //       <div className=" flex items-center bg-grey3 max-w-[386] h-12 rounded-[10px] mt-[10px]">
  //         <input
  //           type={item.type}
  //           id={item.idInput}
  //           name={item.nameInput}
  //           className="w-full bg-transparent border-inherit rounded-inherit pl-4"
  //           onChange={passwordInputChangeHandler}
  //           onBlur={passwordInputBlurHandler}
  //           value={enteredPassword}
  //         />
  //         <img
  //           src="/images/login-page/toggle-icon.svg"
  //           alt="toggle-icon"
  //           className="mx-[19.5px] w-[24.75px] h-[24px]"
  //         />
  //       </div>
  //       {/* hiển thị thông báo lỗi  */}
  //       {passwordInputHasError && (
  //         <p className="text-base text-red1 mt-2">
  //           Password must be at least 8 characters!
  //         </p>
  //       )}
  //     </Fragment>
  //   );
  // }

  // if (item.title === "Confirm Password*") {
  //   marginTopSize = "mt-[19px]";

  //   inputComponent = (
  //     <Fragment>
  //       <div className=" flex items-center bg-grey3 max-w-[386] h-12 rounded-[10px] mt-[10px]">
  //         <input
  //           type={item.type}
  //           id={item.idInput}
  //           name={item.nameInput}
  //           className="w-full bg-transparent border-inherit rounded-inherit pl-4"
  //           onChange={confirmPasswordInputChangeHandler}
  //           onBlur={confirmPasswordInputBlurHandler}
  //           value={enteredConfirmPassword}
  //         />
  //         <img
  //           src="/images/login-page/toggle-icon.svg"
  //           alt="toggle-icon"
  //           className="mx-[19.5px] w-[24.75px] h-[24px]"
  //         />
  //       </div>
  //       {/* hiển thị thông báo lỗi  */}
  //       {confirmPasswordInputHasError && (
  //         <p className="text-base text-red1 mt-2">
  //           Password must be at least 8 characters!
  //         </p>
  //       )}
  //     </Fragment>
  //   );
  // }

  //   return (
  //     // <div key={index}>
  //     <label
  //       key={index}
  //       htmlFor={item.htmlForLabel}
  //       className={`text-xl font-semibold leading-6 ${marginTopSize}`}
  //     >
  //       {item.title}
  //       {inputComponent}
  //     </label>
  //     // </div>
  //   );
  // });
  //end inputForm

  return (
    <div
      className={`${
        isSignUp ? "bg-loginPage" : "bg-signupPage"
      } w-full min-h-[1024px] h-full flex justify-end relative bg-cover bg-center object-cover`}
    >
      <aside className="max-w-[650px] w-full bg-black1">
        <div className="wrapper__login">
          <div className="flex justify-end items-center gap-x-[10px] mt-10">
            <h5 className="text-base font-extrabold leading-[19px] text-grey3">
              {isSignUp ? "HAVEN'T A ACCOUNT?" : "HAVE A ACCOUNT?"}
            </h5>
            <Link
              href={isSignUp ? "/signup" : "/login"}
              className="text-base font-extrabold leading-[19px] text-white"
            >
              {isSignUp ? "SIGN UP" : "LOG IN"}
            </Link>
          </div>

          <div className="wrapper__login--form">
            <h1 className={`${titleStyle} font-black`}>
              {pageData.titleData.title}
            </h1>
            <h6 className="text-sm leading-4 mt-3">
              {pageData.titleData.description}
            </h6>
            {children}
            {/* <form
              className="mt-[50px] flex flex-col max-w-[386px] w-full"
              // onSubmit={formSubmissionHandler}
            >
              {inputForm}
              {pageData.page === "login" && (
                <Link
                  href="/login/forgot-password"
                  className="self-end text-sm leading-4 text-blue2 mt-[6px]"
                >
                  Forgot Password?
                </Link>
              )}
              <Button
                link=""
                className="bg-blueBgGradient h-[43px] justify-center text-2xl font-black leading-7 py-[13px] mt-[23px]"
                disabled={!formIsValid}
              >
                {pageData.buttonTitle}
              </Button>
              {pageData.page === "forgot" && (
                <Button
                  link="/login"
                  className="text-base leading-[18.75px] text-blue1 rounded-xl h-[43px] mt-[6px]"
                  disabled={!formIsValid}
                >
                  Back to Log in
                </Button>
              )}
              {resetPasswordPageHasError && (
                <p className="text-base text-red1 mt-2">
                  Password is not match!
                </p>
              )}
            </form> */}

            <div className="wrapper__login--link w-[268px] mt-[23px]">
              <h5 className="text-base leading-[18.75px]">
                Or continue with open account
              </h5>
              <div className="flex gap-5 mt-6">
                <Button className="btn-link" link="">
                  <img
                    src="/images/login-page/google-icon.svg"
                    className="mr-[7px]"
                  />
                  GOOGLE
                </Button>
                <Button className="btn-link px-[18px]" link="">
                  <img
                    src="/images/login-page/facebook-icon.svg"
                    className="mr-[7px]"
                  />
                  FACEBOOK
                </Button>
              </div>
            </div>
            {!isSignUp && (
              <h6 className="mt-6 text-sm leading-4 text-grey3 ">
                By registering you agree with our{" "}
                <span className="text-blue3">Terms & Conditions</span>
              </h6>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
