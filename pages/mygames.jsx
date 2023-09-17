import GamesPageLayout from "@/components/gamespage-layout";
import NavLinks from "@/components/allgames/nav-links";
import Image from "next/image";

const links = ["Home", "My Games"];

const gamesData = [
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game1.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game2.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game3.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game4.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game5.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game6.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game7.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game8.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game9.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game10.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game11.jpg",
  },
  {
    title: "Red Dead II: Redemption ",
    img: "/images/tag-category-page/game12.jpg",
  },
];

export default function MyGamesPage() {
  return (
    <GamesPageLayout>
      <NavLinks path={links} larger={true} />
      <div className="max-w-[1266px] w-full bg-black2 mx-auto mt-4 pb-[36px]">
        <h2 className="text-[32px] font-extrabold leading-[38px]">My Games</h2>

        <div className="grid grid-cols-4 gap-x-[70px] gap-y-[60px] mt-[46px]">
          {gamesData.map((game, i) => {
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="rounded-[10px] border-[7px] border-black">
                  <Image
                    src={game.img}
                    alt={game.title}
                    width={264}
                    height={162}
                    className="rounded-[10px]  border border-solid border-pink2"
                  />
                </div>
                <div className="flex gap-5 items-center mt-3">
                  <h3 className="text-xl leading-6 font-semibold">
                    {game.title}
                  </h3>
                  <img
                    src="/images/home-page/heart-red-icon.svg"
                    alt="red heart icon"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button className="max-w-[598px] w-full h-[32px] rounded-[20px] bg-black5 flex items-center justify-center gap-[16px] text-blue1 text-sm leading-4 font-medium mt-[40px] mx-auto">
          More
          <img
            src="/images/tag-category-page/arrow-icon.svg"
            alt="arrow icon"
          />
        </button>
      </div>
    </GamesPageLayout>
  );
}
