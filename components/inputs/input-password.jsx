import { useState } from "react";

export default function InputPassword(props) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleStatusPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  return (
    <label
      htmlFor="password"
      className="text-xl font-semibold leading-6 mt-[19px]"
    >
      {`Password${props.isResetPage ? "*" : ""}`}
      <div className=" flex items-center bg-grey3 max-w-[386] h-12 rounded-[10px] mt-[10px]">
        <input
          type={`${isShowPassword ? "text" : "password"}`}
          id="password"
          name="password"
          className="w-full bg-transparent border-inherit rounded-inherit pl-4"
          onChange={props.onPasswordInputChange}
          onBlur={props.onPasswordInputBlur}
          value={props.passwordValue}
        />
        <img
          // src="/images/login-page/toggle-icon.svg"
          src={`${
            isShowPassword
              ? "/images/login-page/eye-icon.svg"
              : "/images/login-page/toggle-icon.svg"
          }`}
          alt="toggle-icon"
          className="mx-[19.5px] w-[24.75px] h-[24px] cursor-pointer"
          onClick={toggleStatusPassword}
        />
      </div>
      {/* hiển thị thông báo lỗi  */}
      {props.hasError && (
        <p className="text-base text-red1 mt-2">
          Password must be at least 8 characters!
        </p>
      )}
    </label>
  );
}
