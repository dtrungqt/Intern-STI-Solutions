import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DownLoadButton from "@/components/button/download-button";
import GameTag from "./game-tag";
import HeartIcon from "../heart-icon";
import postLovedGame from "./../../api-services/post-loved-game";
import checkLoginStatus from "./../../utils/checkLoginStatusFn";
import getLovedGamesData from "./../../utils/getLovedGameFn";
import { authAction } from "@/store/auth";
import isLovedGame from "./../../utils/checkLovedGameFn";

const GameItem = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const data = props.data;
  const tags = props.data.genres.map((genre) => genre.name);
  const gameId = data.id;
  const [lovedGamesIdArr, setLovedGamesIdArr] = useState([]);
  const reloadPageStatus = useSelector((state) => state.reload.reload);

  const addFavoriteGameHandler = postLovedGame.bind(null, gameId);

  useEffect(() => {
    const isLoggedIn = checkLoginStatus();
    dispatch(authAction.setLoginStatus(isLoggedIn));
    const limitNum = 10;
    const pageNum = 1;

    if (isLoggedIn) {
      getLovedGamesData(limitNum, pageNum).then((result) => {
        if (!result.err) {
          const lovedGames = result.data;
          // console.log(lovedGames);

          if (lovedGames && lovedGames.length > 0) {
            const idArr = lovedGames.map((game) => game.id);
            setLovedGamesIdArr(idArr);
            // console.log("done");
          }
        } else {
          console.log(
            `Tim nap loved games trong GameItem component bi loi:${result.data}`
          );
        }
      });
    }
  }, [reloadPageStatus]);
  // console.log(lovedGamesIdArr);

  return (
    <div className="game-item--container relative flex-[1_1_312px] h-[348px] ">
      <Image
        src={data.image_url}
        alt={data.name}
        width={0}
        height={0}
        sizes="100vw"
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
            // favorite={data.isLoved}
            favorite={
              isLogin && isLovedGame(lovedGamesIdArr, data.id)
                ? true
                : data.isLoved
            }
            onAddFavorite={addFavoriteGameHandler}
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
