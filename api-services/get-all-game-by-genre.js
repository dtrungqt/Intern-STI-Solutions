import axios from "./../utils/axios";

export default async function getAllGameByGenre(id) {
  const limitResult = 10;
  const pageNum = 1;

  const res = await axios.get(`games/genre/${id}`, {
    params: { limit: limitResult, page: pageNum },
  });
  //   const res = await axios.get(`games/genre/${id}?limit=10&page=1`);

  const result = res.data.rows;

  return result;
}
