import Image from "next/image";

import GamesPageLayout from "@/components/gamespage-layout";
import NavLinks from "@/components/allgames/nav-links";
import HeartIcon from "@/components/heart-icon";
import GameTag from "@/components/games/game-tag";
import DownLoadButton from "@/components/button/download-button";
import Button from "@/components/button/button";

const link = ["Home", "Bioshock Infinite"];
const gameData = {
  backdrop: "/images/game-detail/bioshock-backdrop.jpg",
  name: "BIOSHOCK INFINITE",
  genre: ["Action", "Adventure", "Art"],
  favorite: false,
  capacity: "3.56GB",
  desc: "Columbia, the city 'in the clouds', the symbol of America's prosperity, is gone. Players take on the role of former Pinkerton agent Booker DeWitt, sent to this city to rescue Elizabeth, a young woman who has been imprisoned here since childhood. DeWitt must learn to battle enemies in high-speed Sky-Line battles, engaging in combat both indoors and in the clouds, with dozens of new weapons and abilities.",
  screenshots: [
    "/images/game-detail/screenshot1.jpg",
    "/images/game-detail/screenshot2.jpg",
    "/images/game-detail/screenshot3.jpg",
    "/images/game-detail/screenshot4.jpg",
    "/images/game-detail/screenshot4.jpg",
  ],
};

export default function GameDetailPage() {
  return (
    <GamesPageLayout imgDetailPage={true}>
      <NavLinks path={link} isDetail={true} />
      <div className="wrapper-homepage">
        <Image
          src={gameData.backdrop}
          alt="bioshock backdrop"
          width={1312}
          height={415}
          className="rounded-[20px]"
        />
        <div className="flex items-start justify-between mt-[33px]">
          <div className="w-[884px]">
            <div className="flex items-center gap-[30px]">
              <h1 className="text-5xl leading-[56px] font-black">
                {gameData.name}
              </h1>
              <HeartIcon
                favorite={gameData.favorite}
                imgRedHeart="/images/game-detail/heart-red-icon.svg"
                imgTransHeart="/images/game-detail/heart-trans-icon.svg"
              />
            </div>
            <GameTag genre={gameData.genre} />
            <p className="font-normal text-base leading-[19px] mt-8">
              {gameData.desc}
            </p>
            <Button className="gap-[6px] bg-black text-blue1 text-sm leading-4 rounded-[15px] mt-[19px]">
              Read More <img src="/images/game-detail/arrow-icon.svg" />
            </Button>
          </div>
          <div className="mt-3 mr-10">
            <DownLoadButton />
            <h6 className="text-sm font-normal leading-4 text-end text-grey5 mt-[6px]">
              {gameData.capacity}
            </h6>
          </div>
        </div>
        <div className="mt-[60px] pb-[89px]">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-[32px] leading-[37.5px]">
              SCREENSHOTS
            </h2>
            <div className="flex items-center gap-[14px]">
              <img
                src="/images/game-detail/arrow-left-icon.svg"
                alt="arrow-left-icon"
              />
              <img
                src="/images/game-detail/arrow-right-icon.svg"
                alt="arrow-right-icon"
              />
            </div>
          </div>
          <div className="flex items-center gap-[20px] overflow-hidden mt-[26px]">
            {gameData.screenshots.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt="screenshot"
                className="rounded-[10px]"
              />
            ))}
          </div>
        </div>
      </div>
    </GamesPageLayout>
  );
}
