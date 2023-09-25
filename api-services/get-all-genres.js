import request from "./../utils/request";

export default async function getAllGenres() {
  const res = await request.get("games/genre");

  const result = res.data;

  return result;
}
