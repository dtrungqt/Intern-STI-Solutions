import GamesPageLayout from "./../components/gamespage-layout";
import BackDrop from "./../components/home-page/backdrop";
import NewsGame from "./../components/home-page/news-game";
import PopularGames from "./../components/home-page/popular-games";
import AllGames from "./../components/home-page/allgames";

import getNewGames from "@/api-services/get-new-games";
import getAllsGame from "@/api-services/get-all-games";
import useAxiosPrivate from "./../hooks/useAxiosPrivate";

export default function HomePage(props) {
  return (
    <GamesPageLayout>
      <BackDrop gamesData={props.backdropData} />
      <NewsGame gamesData={props.newGamesData} />
      {/* API endpoint của Popular games trả về 1 mảng rỗng, vì vậy ta dùng tạm dữ liệu trả về của New games  */}
      <PopularGames gamesData={props.popularGamesData} />
      <AllGames gamesData={props.allGamesData} genre={false} />
    </GamesPageLayout>
  );
}

export async function getStaticProps() {
  const limitNum = 10;
  const pageNum = 1;

  try {
    const newGamesResult = await getNewGames(limitNum, pageNum);
    const allGamesResult = await getAllsGame(limitNum, pageNum);

    if (!allGamesResult || allGamesResult.length === 0) {
      return {
        notFound: true,
      };
    }

    // Vì backend trả về chỉ 2 đối tượng dữ liệu nên ta nối chúng để tạo 1 mảng có 8 đối tượng dữ liệu
    return {
      props: {
        backdropData: [...newGamesResult],
        newGamesData: [...newGamesResult, ...newGamesResult, ...newGamesResult],
        popularGamesData: [
          ...newGamesResult,
          ...newGamesResult,
          ...newGamesResult,
        ],
        allGamesData: [
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
    // return {
    //   notFound: true,
    // };
    // return {
    //   props: {
    //     backdropData: [],
    //     newGamesData: [],
    //     popularGamesData: [],
    //     allGamesData: [],
    //   },
    //   revalidate: 600,
    // };
  }
}
