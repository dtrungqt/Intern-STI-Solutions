import GamesPageLayout from "./../components/gamespage-layout";
import BackDrop from "./../components/home-page/backdrop";
import NewsGame from "./../components/home-page/news-game";
import PopularGames from "./../components/home-page/popular-games";
import AllGames from "./../components/home-page/allgames";

const allGamesData = [
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game1.jpg",
    favorite: true,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game2.jpg",
    favorite: true,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game3.jpg",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game4.jpg",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game1.jpg",
    favorite: true,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game2.jpg",
    favorite: true,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game3.jpg",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game4.jpg",
    favorite: false,
  },
];

export default function HomePage() {
  return (
    <GamesPageLayout>
      <BackDrop />
      <NewsGame />
      <PopularGames />
      <AllGames gamesData={allGamesData} genre={false} />
    </GamesPageLayout>
  );
}
