import Link from "next/link";
import { useSelector } from "react-redux";

import GameItem from "../games/game-item";
import Button from "../button/button";

const AllGames = ({ gamesData, genre }) => {
  // console.log(gamesData);
  const genreData = useSelector((state) => state.setGenres.genres);

  return (
    <div className="wrapper-homepage wrapper-allgames mt-[30px] pb-7">
      <div className="flex items-end justify-between">
        <div className="mr-[13px]">
          <h3 className="wrapper-allgames--title text-lg font-bold leading-[21px]">
            ALL
          </h3>
          <h2 className="text-[32px] font-extrabold leading-[38px] ml-[9px] mt-[6px]">
            GAMES
          </h2>
        </div>
        {!genre && (
          <Button
            link="/allgames"
            className="gap-[6px] bg-black text-blue4 text-sm leading-4 rounded-[15px] mt-[19px]"
          >
            View All
            <img
              src="/images/home-page/arrow-next-icon.svg"
              alt="arrow-next-icon"
            />
          </Button>
        )}
      </div>

      {/* Genre tag  */}
      {genre.display && (
        <div className="wrapper-homepage flex justify-start items-center gap-[2px]">
          {genreData.map((tag) => {
            if (
              tag.name.toLowerCase().replace(/\s/g, "") ===
              genre.type.toLowerCase().replace(/\s/g, "")
            ) {
              return (
                <Link
                  key={tag.id}
                  href={`/allgames/${tag.name.toLowerCase()}`}
                  className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-pink1 h-[17px]"
                >
                  {tag.name}
                </Link>
              );
            }
            return (
              <Link
                key={tag.id}
                href={`/allgames/${tag.name.toLowerCase().replace(/\s/g, "")}`} //loại bỏ khoảng trắng
                className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-black4 h-[17px]"
              >
                {tag.name}
              </Link>
            );
          })}
        </div>
      )}
      {/* end Genre tag  */}

      {/* Card games  */}
      <div
        className={`grid grid-cols-4 grid-rows-2 gap-[20px] ${
          genre.display ? "mt-[10px]" : "mt-4"
        }`}
      >
        {gamesData.map((data, i) => {
          return <GameItem data={data} key={i} />;
        })}
      </div>
      {/*end Card games  */}
    </div>
  );
};
export default AllGames;
