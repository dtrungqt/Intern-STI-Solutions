import Link from "next/link";
import Image from "next/image";

import GameTag from "../games/game-tag";
import DownLoadButton from "../button/download-button";
import HeartIcon from "./../heart-icon";

import Slider from "react-slick";
import { settings } from "../../utils/slider-settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularGames = ({ gamesData }) => {
  return (
    // <div className="w-full pl-16 mt-[30px]">
    <div className="wrapper-homepage">
      <h2 className="text-[32px] font-extrabold leading-[38px]">
        POPULAR GAMES
      </h2>

      {/* Card games  */}
      <div className="mt-4 flex gap-[26px] overflow-hidden">
        {/* <Slider {...settings} className="mt-4"> */}
        {gamesData.map((data, i) => {
          const tags = data.genres.map((genre) => genre.name);
          return (
            <div
              key={i}
              className="popular-container flex justify-between items-center gap-[21px] shrink-0 rounded-[10px] shadow-cardGame"
            >
              <div className="w-[244px] h-[272px] relative">
                <Image
                  src={data.image_url}
                  alt={data.name}
                  layout="fill"
                  // objectFit="cover"
                  priority
                  // width={244}
                  // height={272}
                  className="popular-container--img rounded-[10px]"
                />
              </div>

              <div className="popular-container--card max-w-[225px] w-full">
                <ul className="flex justify-start items-center gap-[2px]">
                  <GameTag genre={tags} />
                  {/* {data.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-black4 h-[17px]"
                    >
                      {tag}
                    </li>
                  ))} */}
                </ul>
                <div className="flex gap-5 items-center mt-[5px]">
                  <Link
                    href={data.name.toLocaleLowerCase().replace(/\s/g, "")}
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
                <p className="text-[10px] leading-3 mt-2">{data.desc}</p>
                <DownLoadButton className="mt-[8px]" />
              </div>
            </div>
          );
        })}
        {/* </Slider> */}
      </div>
      {/*end Card games  */}
    </div>
  );
};

export default PopularGames;
