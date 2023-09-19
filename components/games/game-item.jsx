import Image from "next/image";
import DownLoadButton from "@/components/button/download-button";
import GameTag from "./game-tag";
import HeartIcon from "../heart-icon";

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
        <GameTag genre={data.tags} />
        <div className="flex gap-5 items-center mt-[5px]">
          <h3 className="text-xl leading-6 font-semibold">{data.title}</h3>
          <HeartIcon
            favorite={data.favorite}
            imgRedHeart="/images/home-page/heart-red-icon.svg"
            imgTransHeart="/images/home-page/heart-trans-icon.svg"
          />
        </div>
        <DownLoadButton className="mt-[8px]" />
      </div>
    </div>
  );
};

export default GameItem;
