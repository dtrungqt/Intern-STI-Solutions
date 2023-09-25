import Image from "next/image";

import DownLoadButton from "@/components/button/download-button";
import GameTag from "./game-tag";
import HeartIcon from "../heart-icon";
import Link from "next/link";

const GameItem = (props) => {
  const data = props.data;
  const tags = props.data.genres.map((genre) => genre.name);

  return (
    <div className="game-item--container relative flex-[1_1_312px] h-[348px] ">
      <Image
        src={data.image_url}
        alt={data.name}
        layout="fill"
        objectFit="cover"
        priority
        className="game-item--container__img absolute top-0 left-0 rounded-[10px]"
      />

      <div className="absolute left-[19px] bottom-[18px] z-10">
        <GameTag genre={tags} />
        <div className="flex gap-5 items-center mt-[5px]">
          <Link
            href={`/${data.id}`}
            className="text-xl leading-6 font-semibold"
          >
            {data.name}
          </Link>
          <HeartIcon
            favorite={data.isLoved}
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
