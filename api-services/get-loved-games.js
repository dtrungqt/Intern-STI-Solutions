import useAxiosPrivate from "./../hooks/useAxiosPrivate";

const axiosPrivate = useAxiosPrivate();

export default async function getLovedGames(limitNum, pageNum) {
  const res = await axiosPrivate.get("games/loved", {
    params: { limit: limitNum, page: pageNum },
  });

  const result = res.data.rows;

  return result;
}
