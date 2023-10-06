import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageCustom from "@/components/allgames/page-custom";
import getAllGenres from "../../api-services/get-all-genres";
import { genresAction } from "../../store/genres";
import getAllGameByGenre from "../../api-services/get-all-game-by-genre";
import { paginateActions } from "../../store/paginate";
import paginationHandler from "../../utils/paginate";

export default function GameByGenresPage(props) {
  const dispatch = useDispatch();

  dispatch(paginateActions.setCurrentPage());
  dispatch(genresAction.setGenres({ genresData: props.allGenres }));

  //XỬ LÝ ĐÁNH SỐ TRANG
  const gameData = paginationHandler(props.gameData);

  const links = ["Home", "All Games", props.genreName.fullName];

  const genreData = { display: true, type: props.genreName.shortName };

  // useEffect(() => {
  //   links[3] = props.genreName.fullName;
  //   genreData.type = props.genreName.shortName;
  // }, [props.genreName.fullName, props.genreName.shortName]);

  return (
    <PageCustom links={links} allGamesData={gameData} genreData={genreData} />
  );
}

export async function getStaticProps(context) {
  try {
    const genresData = await getAllGenres();
    const transformedGenresData = genresData.map((genre) => {
      return { name: genre.name, icon: genre.icon, id: genre.id };
    });

    //từ genre name tìm id tương ứng của nó
    const params = context.params;
    const genreName = params.genreName;
    // console.log(genreName);
    const genreId = transformedGenresData.find(
      (genre) => genre.name.toLowerCase().replace(/\s/g, "") === genreName
    ).id;

    const genreFullName = transformedGenresData.find(
      (genre) => genre.name.toLowerCase().replace(/\s/g, "") === genreName
    ).name;

    const genre = { shortName: genreName, fullName: genreFullName };
    // console.log(`Id la ${genreId}`);
    const gameData = await getAllGameByGenre(genreId);

    return {
      props: {
        allGenres: transformedGenresData,
        gameData: gameData,
        genreName: genre,
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

export async function getStaticPaths() {
  const genresData = await getAllGenres();
  const genresName = genresData.map((genre) =>
    genre.name.toLowerCase().replace(/\s/g, "")
  );

  const pathWithParams = genresName.map((genre) => {
    return {
      params: {
        genreName: genre,
      },
    };
  });

  return {
    paths: pathWithParams,
    fallback: "blocking",
  };
}
