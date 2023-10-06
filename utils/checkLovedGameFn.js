//trước khi sử dụng hàm này, nhớ kiểm tra User đã login hay chưa (có thể dùng biến isLogin trong Redux-toolkit để ktra)
const isLovedGame = (lovedGamesArr, gameId) => {
  return lovedGamesArr.includes(gameId);
};

export default isLovedGame;
