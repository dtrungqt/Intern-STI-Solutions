import Button from "@/components/button";
import Link from "next/link";
// isSignUp: true-false

export default function AuthenticationLayout({ isSignUp, pageData }) {
  let titleStyle = "text-[80px] leading-[94px]";
  if (pageData.page === "forgot" || pageData.page === "reset") {
    titleStyle = "text-[60px] leading-[70px]";
  }

  //inputForm
  const inputForm = pageData.inputsData.map((item, index) => {
    let marginTopSize = "";
    let inputComponent = (
      <input
        type={item.type}
        id={item.idInput}
        name={item.nameInput}
        className="w-full mt-[10px] bg-grey3 max-w-[386] h-12 rounded-[10px] px-4"
      />
    );

    if (item.type === "password") {
      marginTopSize = "mt-[19px]";

      inputComponent = (
        <div className=" flex items-center bg-grey3 max-w-[386] h-12 rounded-[10px] mt-[10px]">
          <input
            type={item.type}
            id={item.idInput}
            name={item.nameInput}
            className="w-full bg-transparent border-inherit rounded-inherit pl-4"
          />
          <img
            src="/images/login-page/toggle-icon.svg"
            alt="toggle-icon"
            className="mx-[19.5px] w-[24.75px] h-[24px]"
          />
        </div>
      );
    }

    return (
      // <div key={index}>
      <label
        key={index}
        htmlFor={item.htmlForLabel}
        className={`text-xl font-semibold leading-6 ${marginTopSize}`}
      >
        {item.title}
        {inputComponent}
      </label>
      // </div>
    );
  });
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
            <form className="mt-[50px] flex flex-col max-w-[386px] w-full">
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
              >
                {pageData.buttonTitle}
              </Button>
              {pageData.page === "forgot" && (
                <Button
                  link="/login"
                  className="text-base leading-[18.75px] text-blue1 rounded-xl h-[43px] mt-[6px]"
                >
                  Back to Log in
                </Button>
              )}
            </form>

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
