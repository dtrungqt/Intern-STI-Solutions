import getLovedGames from "../api-services/get-loved-games";

const getLovedGamesData = async (limitNum, pageNum) => {
  try {
    const res = await getLovedGames(limitNum, pageNum);
    return {
      err: false,
      data: res,
    };
  } catch (err) {
    console.log(err);
    return {
      err: true,
      data: err.message,
    };
  }
};

export default getLovedGamesData;
