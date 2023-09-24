import request from "./../utils/request";

export default async function getNewGames(limitNum, pageNum) {
  const res = await request.get("games/newest", {
    params: { limit: limitNum, page: pageNum },
  });

  const result = res.data.rows;

  return result;
}
