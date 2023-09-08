import Button from "@/components/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full min-h-[1024px] h-full flex justify-end relative bg-loginPage bg-cover bg-center object-cover">
      <aside className="max-w-[650px] w-full bg-black1">
        <div className="wrapper__login">
          <div className="flex justify-end items-center gap-x-[10px] mt-10">
            <h5 className="text-base font-extrabold leading-[19px] text-grey3">
              HAVEN'T A ACCOUNT?
            </h5>
            <Link
              href="/signup"
              className="text-base font-extrabold leading-[19px] text-white"
            >
              SIGN UP
            </Link>
          </div>

          <div className="wrapper__login--form">
            <h1 className="text-[80px] font-black leading-[94px]">LOG IN</h1>
            <h6 className="text-sm leading-4 mt-3">
              Hi There! Join Us And Enjoy
            </h6>
            <form className="mt-[50px] flex flex-col max-w-[386px] w-full">
              <label
                htmlFor="emailOrPhone"
                className="text-xl font-semibold leading-6"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                className="mt-[10px] bg-grey3 max-w-[386] h-12 rounded-[10px] px-4"
              />
              <label
                htmlFor="password"
                className="text-xl font-semibold leading-6 mt-[19px]"
              >
                Password
              </label>
              <div className=" flex bg-grey3 max-w-[386] h-12 rounded-[10px] mt-[10px]">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-transparent border-inherit rounded-inherit  w-full pl-4"
                />
                <img
                  src="/images/login-page/toggle-icon.svg"
                  alt="toggle-icon"
                  className="mx-[19.5px]"
                />
              </div>
              <Link
                href="/forgot"
                className="self-end text-sm leading-4 text-blue2 mt-[6px]"
              >
                Forgot Password?
              </Link>
              <Button
                link=""
                className="bg-blueBgGradient h-[43px] justify-center text-2xl font-black leading-7 py-[13px] mt-[23px]"
              >
                START
              </Button>
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
          </div>
        </div>
      </aside>
    </div>
  );
}
