import axios from "./../utils/axios";

export default async function getGameDetail(id) {
  const res = await axios.get(`games/detail/${id}`);

  const result = res.data;

  return result;
}
