import request from "./../utils/request";

export default async function getAllGames(limitNum, pageNum) {
  const res = await request.get("games", {
    params: { limit: limitNum, page: pageNum },
  });

  const result = res.data.rows;

  return result;
}
