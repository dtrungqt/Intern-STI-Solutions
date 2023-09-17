import Link from "next/link";

export default function PopupLogout(props) {
  return (
    <div
      className={`absolute top-[63px] left-0 bg-black5 w-[165px] h-[96px] rounded-[0px_0px_15px_15px] ${
        props.popupStatus ? "block" : "hidden"
      }`}
    >
      <div className="w-full px-[14px] pt-3">
        <div className="flex items-center justify-between w-full py-1 px-[7.5px]">
          <img
            src="/images/home-page/controller-icon.svg"
            alt="controller-icon"
          />
          <Link href="/mygames" className="text-base leading-[19px]">
            My Games
          </Link>
        </div>
        <button className="w-full h-[20px] bg-transparent border border-solid border-white rounded-[14px] text-xs leading-[14px] mt-[13px]">
          Log out
        </button>
      </div>
    </div>
  );
}
