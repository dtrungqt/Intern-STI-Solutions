import axios from "../utils/axios";

export default async function getAllGames(limitNum, pageNum) {
  const res = await axios.get("games", {
    params: { limit: limitNum, page: pageNum },
  });

  const result = res.data.rows;

  return result;
}
