import GameItem from "@/components/games/game-item";

import Slider from "react-slick";
import { settings } from "../../utils/slider-settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsGame = ({ gamesData }) => {
  return (
    // <div className="w-full pl-16 mt-[30px]">
    <div className="wrapper-homepage news-game--container">
      <div className="flex gap-[11px] items-center">
        <h2 className="text-[32px] font-extrabold leading-[38px]">NEW GAMES</h2>
        <div className="w-[36px] h-[19px] flex items-center justify-center rounded-[15px] bg-pink1 text-xs font-semibold leading-[14px]">
          Hot
        </div>
      </div>

      {/* Card games  */}
      {/* <div className="mt-4 flex gap-[21px] overflow-hidden"> */}
      <Slider {...settings} className="mt-4">
        {gamesData.map((data, i) => {
          return <GameItem data={data} key={i} />;
        })}
      </Slider>
      {/* </div> */}
      {/*end Card games  */}
    </div>
  );
};

export default NewsGame;
