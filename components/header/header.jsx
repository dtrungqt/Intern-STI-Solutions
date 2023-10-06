import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Menu from "@/components/header/menu";
import PopupLogout from "./popup-logout";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState();

  const axiosPrivate = useAxiosPrivate();

  const showMenuHandle = () => {
    setShowMenu((prevState) => !prevState);
  };

  const showPopupHandle = () => {
    setShowPopup((prevState) => !prevState);
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const info = await axiosPrivate.get("users/profile", {
          signal: controller.signal,
        });
        isMounted && setUserData(info.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  // console.log(userData);

  return (
    <header className="fixed top-0 w-full h-[80px] bg-black3 flex justify-between items-center shadow-headerHome pl-[33px] pr-[65px] z-20">
      <div className="flex items-center gap-[33px]">
        <img
          src="/images/home-page/menu-rounded-icon.svg"
          alt="menu icon"
          className={`cursor-pointer shrink-0 ${
            !showMenu ? "block" : "hidden"
          }`}
          onClick={showMenuHandle}
        />

        <Menu menuHandler={showMenuHandle} menuStatus={showMenu} />

        <Link href="/">
          <img
            src="/images/home-page/kinect-icon.svg"
            alt="logo icon"
            className="shrink-0"
          />
        </Link>
      </div>
      <div className="flex gap-[42px] justify-between">
        <div className="flex-1 flex items-center justify-between w-[391px] h-[40px] rounded-[20px] border pl-[19px] pr-[12px]">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-base leading-[19px] flex-1 pr-2"
          />
          <img
            src="/images/home-page/find-icon.svg"
            alt="find icon"
            className="shrink-0"
            // width={18.5}
            // height={18.5}
          />
        </div>

        {/* Protected Routes  */}
        {userData?.email && (
          <div className="relative flex items-center gap-4 min-w-[165px]">
            <div className="flex gap-[6px]">
              <h6 className="text-base font-normal leading-[19px] whitespace-nowrap min-w-[84px] max-w-[180px] overflow-hidden text-ellipsis">
                {userData.email}
              </h6>
              <img
                src="/images/home-page/arrow-icon.svg"
                alt="arrow icon"
                className="shrink-0 cursor-pointer"
                onClick={showPopupHandle}
              />
            </div>
            <Image
              src="/images/home-page/avata.png"
              width={48}
              height={48}
              alt="avata icon"
              className="shrink-0"
            />

            <PopupLogout popupStatus={showPopup} />
          </div>
        )}
      </div>
    </header>
  );
}
