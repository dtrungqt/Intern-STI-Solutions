import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { paginateActions } from "../store/paginate";

const paginationHandler = (data) => {
  const dispatch = useDispatch();
  //XỬ LÝ ĐÁNH SỐ TRANG
  const pageLimit = 8;
  const pageNumber = useSelector((state) => state.paginate.currentPage);

  const totalPage = Math.ceil(data.length / pageLimit);
  useEffect(() => {
    dispatch(paginateActions.setTotalPage({ totalPage }));
  }, [totalPage]);
  //   console.log(totalPage);
  let gameData = [];
  if (pageNumber === 1) {
    gameData = data.slice(0, pageLimit);
  } else if (pageNumber === totalPage) {
    gameData = data.slice((pageNumber - 1) * pageLimit);
  } else {
    gameData = data.slice(
      (pageNumber - 1) * pageLimit,
      (pageNumber - 1) * pageLimit + pageLimit
    );
  }
  //kết thúc XỬ LÝ ĐÁNH SỐ TRANG
  return gameData;
};

export default paginationHandler;
