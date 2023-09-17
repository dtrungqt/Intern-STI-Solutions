import Button from "@/components/button";
import Image from "next/image";
import DownLoadButton from "./../download-button";

const backdropData = {
  tags: ["Action", "Adventure", "Art"],
  img: "/images/home-page/backdrop.jpg",
  title: "BioShock Infinite",
  desc: "Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated arterial trauma, following unsuccessful endovascular repair; aorto-bi-iliac prosthesis ",
};

export default function BackDrop() {
  return (
    <div className="wrapper-backdrop relative pt-[80px]">
      <Image
        src={backdropData.img}
        alt={backdropData.title}
        width={1312}
        height={415}
        className="wrapper-backdrop--img rounded-[20px]"
      />
      <div className="max-w-[461px] absolute top-[224px] left-[28px] z-10">
        <ul className="flex justify-start items-center gap-[2px]">
          {backdropData.tags.map((tag) => (
            <li
              key={tag}
              className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-black4 h-[17px]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h2 className="mt-[6px] text-4xl leading-[42px] font-semibold">
          {backdropData.title}
        </h2>
        <p className="mt-[11px] text-xs leading-[14px]">{backdropData.desc}</p>
        <div className="w-[300px] flex gap-[5px] mt-[11px]">
          {/* <Button className="bg-blueBgGradient text-base leading-[19px]">
            <span className="mr-[6px]">Download</span>
            <img
              src="/images/home-page/arrow-down-icon.svg"
              alt="arrow-icon"
              // width={11}
              // height={8}
            />
          </Button> */}
          <DownLoadButton />
          <Button className="border-gradient text-base leading-[19px]">
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute left-1/2 translate-x-[-50%] bottom-[17px] flex gap-[6px] z-10">
        <img
          src="/images/home-page/rectangle-active-icon.svg"
          alt="rectangle icon"
        />
        <img src="/images/home-page/rectangle-icon.svg" alt="rectangle icon" />
        <img src="/images/home-page/rectangle-icon.svg" alt="rectangle icon" />
      </div>
    </div>
  );
}
