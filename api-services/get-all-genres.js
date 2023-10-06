import axios from "./../utils/axios";

export default async function getAllGenres() {
  const res = await axios.get("games/genre");

  const result = res.data;

  return result;
}
