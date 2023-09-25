import request from "./../utils/request";

export default async function getGameDetail(id) {
  const res = await request.get(`games/detail/${id}`);

  const result = res.data;

  return result;
}
