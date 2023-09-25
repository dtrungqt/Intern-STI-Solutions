import Image from "next/image";

import GamesPageLayout from "@/components/gamespage-layout";
import NavLinks from "@/components/allgames/nav-links";
import HeartIcon from "@/components/heart-icon";
import GameTag from "@/components/games/game-tag";
import DownLoadButton from "@/components/button/download-button";
import Button from "@/components/button/button";
import getGameDetail from "../api-services/get-game-detail";
import getAllsGame from "@/api-services/get-all-games";

const link = ["Home", "Bioshock Infinite"];

export default function GameDetailPage(props) {
  const gameData = props.gameDetail;
  const genres = gameData.genres.map((genre) => genre.name);

  const KBToGB = (gameData.file_game_filesize * Math.pow(10, -9)).toFixed(2);
  console.log(KBToGB);
  return (
    <GamesPageLayout imgDetailPage={true}>
      <NavLinks path={link} isDetail={true} />
      <div className="wrapper-homepage overlay">
        <div className="relative max-w-[1312px] w-full h-[415px]">
          <Image
            src={gameData.image_url}
            alt="bioshock backdrop"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-[20px]"
          />
        </div>
        <div className="flex items-start justify-between mt-[33px]">
          <div className="w-[884px]">
            <div className="flex items-center gap-[30px]">
              <h1 className="text-5xl leading-[56px] font-black">
                {gameData.name}
              </h1>
              <HeartIcon
                favorite={gameData.isLoved}
                imgRedHeart="/images/game-detail/heart-red-icon.svg"
                imgTransHeart="/images/game-detail/heart-trans-icon.svg"
              />
            </div>
            <GameTag genre={genres} />
            <p className="font-normal text-base leading-[19px] mt-8">
              {gameData.description}
            </p>
            <Button className="gap-[6px] bg-black text-blue1 text-sm leading-4 rounded-[15px] mt-[19px]">
              Read More <img src="/images/game-detail/arrow-icon.svg" />
            </Button>
          </div>
          <div className="mt-3 mr-10">
            <DownLoadButton />
            <h6 className="text-sm font-normal leading-4 text-end text-grey5 mt-[6px]">
              {KBToGB}GB
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
            {gameData.game_screenshots.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt="screenshot"
                className="rounded-[10px] w-[244px] h-[272px]"
              />
            ))}
          </div>
        </div>
      </div>
    </GamesPageLayout>
  );
}

export async function getStaticProps(context) {
  try {
    // console.log(context);
    const params = context.params;
    const id = params.gameid;
    console.log(`Id la ${id}`);
    const gameData = await getGameDetail(id);
    console.log(gameData);

    return {
      props: {
        gameDetail: gameData,
      },
      revalidate: 600,
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const limitNum = 10;
  const pageNum = 1;
  try {
    const gameData = await getAllsGame(limitNum, pageNum);
    const ids = gameData.map((data) => data.id.toString());

    const pathWithParams = ids.map((id) => {
      return {
        params: {
          gameid: id,
        },
      };
    });
    console.log(pathWithParams);

    return {
      paths: pathWithParams,
      fallback: "blocking",
    };
  } catch (err) {
    console.log(err);
  }
}
