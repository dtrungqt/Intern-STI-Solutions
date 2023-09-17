import Link from "next/link";

import GameItem from "../game-item";

const genreData = ["Action", "Adventure", "Arcade", "Reality"];

const AllGames = ({ gamesData, genre }) => {
  return (
    <div className="wrapper-homepage wrapper-allgames mt-[30px] pb-7">
      <div className="mr-[13px]">
        <h3 className="wrapper-allgames--title text-lg font-bold leading-[21px]">
          ALL
        </h3>
        <h2 className="text-[32px] font-extrabold leading-[38px] ml-[9px] mt-[6px]">
          GAMES
        </h2>
      </div>

      {/* Genre tag  */}
      {genre.display && (
        <div className="wrapper-homepage flex justify-start items-center gap-[2px]">
          {genreData.map((tag) => {
            if (tag.toLowerCase() === genre.type.toLowerCase()) {
              return (
                <Link
                  key={tag}
                  href={`/allgames/${tag.toLowerCase()}`}
                  className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-pink1 h-[17px]"
                >
                  {tag}
                </Link>
              );
            }
            return (
              <Link
                key={tag}
                href={`/allgames/${tag.toLowerCase()}`}
                className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-black4 h-[17px]"
              >
                {tag}
              </Link>
            );
          })}
        </div>
      )}
      {/* end Genre tag  */}

      {/* Card games  */}
      <div
        className={`grid grid-cols-4 gap-[20px] ${
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
