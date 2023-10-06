import useAxiosPrivate from "./../hooks/useAxiosPrivate";

const axiosPrivate = useAxiosPrivate();

const postLovedGame = async (id) => {
  try {
    const gameId = {
      game_id: id,
    };

    const res = await axiosPrivate.post("games/love", gameId);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default postLovedGame;
