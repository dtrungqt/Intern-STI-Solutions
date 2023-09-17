import Image from "next/image";
import DownLoadButton from "@/components/download-button";

const GameItem = (props) => {
  const data = props.data;

  return (
    <div className="relative flex-[1_0_312px] h-[348px]">
      <Image
        src={data.img}
        alt={data.title}
        width={312}
        height={348}
        className="absolute top-0 left-0 rounded-[10px]"
      />

      <div className="absolute left-[19px] bottom-[18px]">
        <ul className="flex justify-start items-center gap-[2px]">
          {data.tags.map((tag) => (
            <li
              key={tag}
              className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-black4 h-[17px]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-5 items-center mt-[5px]">
          <h3 className="text-xl leading-6 font-semibold">{data.title}</h3>
          {data.favorite && (
            <img
              src="/images/home-page/heart-red-icon.svg"
              alt="red heart icon"
            />
          )}
          {!data.favorite && (
            <img
              src="/images/home-page/heart-trans-icon.svg"
              alt="trans heart icon"
            />
          )}
        </div>
        <DownLoadButton className="mt-[8px]" />
      </div>
    </div>
  );
};

export default GameItem;
