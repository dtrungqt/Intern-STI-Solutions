import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { paginateActions } from "../../store/paginate";
import { genresAction } from "./../../store/genres";

import PageCustom from "@/components/allgames/page-custom";
import getAllsGame from "@/api-services/get-all-games";
import getAllGenres from "../../api-services/get-all-genres";
import paginationHandler from "../../utils/paginate";

const links = ["Home", "All Games"];

const genreData = { display: true, type: "none" };

export default function AllGamesPage(props) {
  // console.log(props.allGenres);
  const dispatch = useDispatch();
  dispatch(genresAction.setGenres({ genresData: props.allGenres }));

  //XỬ LÝ ĐÁNH SỐ TRANG
  const gameData = paginationHandler(props.allGamesData);

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
