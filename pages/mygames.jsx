import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import withAuth from "../utils/withAuth";
import GamesPageLayout from "@/components/gamespage-layout";
import NavLinks from "@/components/allgames/nav-links";
import Image from "next/image";
import HeartIcon from "./../components/heart-icon";
import postLovedGame from "./../api-services/post-loved-game";
import getLovedGames from "../api-services/get-loved-games";
import getLovedGamesData from "../utils/getLovedGameFn";

const links = ["Home", "My Games"];

const MyGamesPage = () => {
  const [gamesData, setGamesData] = useState();
  const [error, setError] = useState();
  const reloadPageNow = useSelector((state) => state.reload.reload);

  useEffect(() => {
    const limitNum = 10;
    const pageNum = 1;

    getLovedGamesData(limitNum, pageNum).then((result) => {
      if (!result.err) {
        setGamesData(result.data);
      } else {
        setError(result.data);
      }
    });
  }, [reloadPageNow]);

  const pageLimit = 12;

  const addFavoriteGameHandler = postLovedGame;

  return (
    <GamesPageLayout>
      <NavLinks path={links} larger={true} />
      <div className="max-w-[1266px] w-full bg-black2 mx-auto mt-4 pb-[36px]">
        <h2 className="text-[32px] font-extrabold leading-[38px]">My Games</h2>

        <div className="grid grid-cols-4 gap-x-[70px] gap-y-[60px] mt-[46px]">
          {gamesData?.map((game, i) => {
            const gameId = game.id;
            // const addFavoriteGameHandler = postLovedGame.bind(null, gameId);
            // const addFavoriteGameHandler = usePostLovedGame.bind(null, gameId);

            return (
              <div key={i} className="flex flex-col items-center">
                <div className="rounded-[10px] border-[7px] border-black">
                  <Image
                    src={game.image_url}
                    alt={game.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className="rounded-[10px] w-[264px] h-[162px] border border-solid border-pink2"
                  />
                </div>
                <div className="flex gap-5 items-center mt-3">
                  <h3 className="text-xl leading-6 font-semibold">
                    {game.name}
                  </h3>
                  <HeartIcon
                    favorite={game.isLoved}
                    onAddFavorite={addFavoriteGameHandler.bind(null, gameId)}
                    imgRedHeart="/images/home-page/heart-red-icon.svg"
                    imgTransHeart="/images/home-page/heart-trans-icon.svg"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {gamesData?.length === 0 && (
          <div className="text-2xl">No favorite games</div>
        )}
        {error && <div className="text-2xl text-red-600">{error}</div>}
        {gamesData?.length > pageLimit && (
          <button className="max-w-[598px] w-full h-[32px] rounded-[20px] bg-black5 flex items-center justify-center gap-[16px] text-blue1 text-sm leading-4 font-medium mt-[40px] mx-auto">
            More
            <img
              src="/images/tag-category-page/arrow-icon.svg"
              alt="arrow icon"
            />
          </button>
        )}
      </div>
    </GamesPageLayout>
  );
};

export default withAuth(MyGamesPage);
