import { useState } from "react";

export default function InputConfirmPassword(props) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleStatusPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };
  return (
    <label
      htmlFor="confirmedPassword"
      className="text-xl font-semibold leading-6 mt-[19px]"
    >
      Confirm Password*
      <div className=" flex items-center bg-grey3 max-w-[386] h-12 rounded-[10px] mt-[10px]">
        <input
          type={`${isShowPassword ? "text" : "password"}`}
          id="confirmedPassword"
          name="confirmedPassword"
          className="w-full bg-transparent border-inherit rounded-inherit pl-4"
          onChange={props.onConfirmPasswordInputChange}
          onBlur={props.onConfirmPasswordInputBlur}
          value={props.confirmPasswordValue}
        />
        <img
          src={`${
            isShowPassword
              ? "/images/login-page/eye-icon.svg"
              : "/images/login-page/toggle-icon.svg"
          }`}
          alt="toggle-icon"
          className="mx-[19.5px] w-[24.75px] h-[24px]"
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
