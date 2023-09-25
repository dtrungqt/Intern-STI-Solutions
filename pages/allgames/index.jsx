import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginateActions } from "../../store/index";

import PageCustom from "@/components/allgames/page-custom";
import getAllsGame from "@/api-services/get-all-games";
import getAllGenres from "../../api-services/get-all-genres";

const links = ["Home", "All Games"];

const genreData = { display: true, type: "none" };

export default function AllGamesPage(props) {
  const dispatch = useDispatch();
  const pageLimit = 8;
  const pageNumber = useSelector((state) => state.currentPage);

  const totalPage = Math.ceil(props.allGamesData.length / pageLimit);
  useEffect(() => {
    dispatch(paginateActions.setTotalPage({ totalPage }));
  }, [totalPage]);

  let gameData = [];
  if (pageNumber === 1) {
    gameData = props.allGamesData.slice(0, pageLimit);
  } else if (pageNumber === totalPage) {
    gameData = props.allGamesData.slice((pageNumber - 1) * pageLimit);
  } else {
    gameData = props.allGamesData.slice(
      (pageNumber - 1) * pageLimit,
      (pageNumber - 1) * pageLimit + pageLimit
    );
  }

  return (
    <PageCustom links={links} allGamesData={gameData} genreData={genreData} />
  );
}

export async function getStaticProps() {
  const limitNum = 10;
  const pageNum = 1;
  try {
    const allGamesResult = await getAllsGame(limitNum, pageNum);
    const genresData = await getAllGenres();
    const transformedGenresData = genresData.map((genre) => {
      return { name: genre.name, icon: genre.icon, id: genre.id };
    });

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
        allGenres: transformedGenresData,
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
