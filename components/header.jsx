import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-black3 flex justify-between items-center shadow-headerHome pl-[33px] pr-[65px]">
      <div className="flex items-center gap-[33px]">
        <img
          src="/images/home-page/menu-rounded-icon.svg"
          alt="menu icon"
          className="shrink-0"
        />
        <Link href="/">
          <img
            src="/images/home-page/kinect-icon.svg"
            alt="logo icon"
            className="shrink-0"
          />
        </Link>
      </div>
      <div className="flex w-[600px] gap-[42px] justify-between">
        <div className="flex-1 flex items-center justify-between h-[40px] rounded-[20px] border pl-[19px] pr-[12px]">
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
        <div className="flex items-center gap-4 max-w-[165px]">
          <div className="flex gap-[6px]">
            <h6 className="text-base font-normal leading-[19px]">
              Cody Fisher
            </h6>
            <img
              src="/images/home-page/arrow-icon.svg"
              alt="arrow icon"
              className="shrink-0"
              // width={11}
              // height={7}
            />
          </div>
          <Image
            src="/images/home-page/avata.png"
            width={48}
            height={48}
            alt="avata icon"
            className="shrink-0"
          />
        </div>
      </div>
    </header>
  );
}
