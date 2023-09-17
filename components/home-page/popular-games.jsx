import Image from "next/image";
import DownLoadButton from "../download-button";

const gamesData = [
  {
    tags: ["Action", "Adventure"],
    title: "The Last of Us",
    img: "/images/games/game4.jpg",
    desc: "Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated prosthesis",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game5.jpg",
    desc: "Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated prosthesis",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game6.jpg",
    desc: "Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated prosthesis",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game7.jpg",
    desc: "Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated prosthesis",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game7.jpg",
    desc: "Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated prosthesis",
    favorite: false,
  },
];

const PopularGames = () => {
  return (
    // <div className="w-full pl-16 mt-[30px]">
    <div className="wrapper-homepage">
      <h2 className="text-[32px] font-extrabold leading-[38px]">
        POPULAR GAMES
      </h2>

      {/* Card games  */}
      <div className="mt-4 flex gap-[26px] overflow-hidden">
        {gamesData.map((data, i) => {
          return (
            <div
              key={i}
              className="popular-container flex justify-between items-center gap-[21px] shrink-0 rounded-[10px] shadow-cardGame"
            >
              <Image
                src={data.img}
                alt={data.title}
                width={244}
                height={272}
                className="popular-container--img rounded-[10px]"
              />

              <div className="popular-container--card max-w-[225px] w-full">
                <ul className="flex justify-start items-center gap-[2px]">
                  {data.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-black4 h-[17px]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-5 items-center mt-[5px]">
                  <h3 className="text-xl leading-6 font-semibold">
                    {data.title}
                  </h3>
                  {data.favorite && (
                    <img
                      src="/images/home-page/heart-red-icon.svg"
                      alt="red heart icon"
                    />
                  )}
                  {!data.favorite && (
                    <img
                      src="/images/home-page/heart-trans-icon.svg"
                      alt="trans heart icon"
                    />
                  )}
                </div>
                <p className="text-[10px] leading-3 mt-2">{data.desc}</p>
                <DownLoadButton className="mt-[8px]" />
              </div>
            </div>
          );
        })}
      </div>
      {/*end Card games  */}
    </div>
  );
};

export default PopularGames;
