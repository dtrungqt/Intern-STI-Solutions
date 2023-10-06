import axios from "../utils/axios";

export default async function getNewGames(limitNum, pageNum) {
  const res = await axios.get("games/newest", {
    params: { limit: limitNum, page: pageNum },
  });

  const result = res.data.rows;

  return result;
}
