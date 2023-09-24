import PageCustom from "@/components/allgames/page-custom";
import getAllsGame from "@/api-services/get-all-games";
import { useState } from "react";

/*
const allGamesData = [
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game1.jpg",
    favorite: true,
  }
];
*/

const links = ["Home", "All Games"];

const genreData = { display: true, type: "none" };

export default function AllGamesPage(props) {
  const [pageNumber, setPageNumber] = useState(1);

  const pageLimit = 8;
  const totalPages = Math.ceil(props.allGamesData.length / pageLimit);

  let gameData = [];
  if (pageNumber === 1) {
    gameData = props.allGamesData.slice(0, pageLimit);
  } else if (pageNumber === totalPages) {
    gameData = props.allGamesData.slice((pageNumber - 1) * pageLimit);
  } else {
    gameData = props.allGamesData.slice(
      (pageNumber - 1) * pageLimit,
      (pageNumber - 1) * pageLimit + pageLimit
    );
  }

  return (
    <PageCustom
      links={links}
      allGamesData={gameData}
      genreData={genreData}
      limit={totalPages}
    />
  );
}

export async function getStaticProps() {
  const limitNum = 10;
  const pageNum = 1;
  try {
    const allGamesResult = await getAllsGame(limitNum, pageNum);

    if (!allGamesResult || allGamesResult.length === 0) {
      return {
        notFound: true,
      };
    }

    // Vì backend trả về chỉ 2 đối tượng dữ liệu nên ta nối chúng để tạo 1 mảng có 8 đối tượng dữ liệu
    return {
      props: {
        allGamesData: [
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
          ...allGamesResult,
        ],
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
