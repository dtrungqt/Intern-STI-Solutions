import PageCustom from "@/components/allgames/page-custom";

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

const links = ["Home", "All Games", "Adventure"];

const genreData = { display: true, type: "adventure" };

export default function AdventureGamesPage() {
  return (
    <PageCustom
      links={links}
      allGamesData={allGamesData}
      genreData={genreData}
    />
  );
}
