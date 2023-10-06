import { useState } from "react";
import { useDispatch } from "react-redux";
import { reloadPageAction } from "@/store/reload";

export default function HeartIcon(props) {
  // const [reloadPage, setReloadPage] = useState(false);
  const dispatch = useDispatch();
  const {
    favorite: isFavorite,
    imgRedHeart: redHeart,
    imgTransHeart: transHeart,
    onAddFavorite,
  } = props;

  const addFavoriteAndReloadPage = () => {
    onAddFavorite().then(() => {
      dispatch(reloadPageAction.reloadPageNow());
    });
  };
  // console.log(reloadPage);

  return (
    <img
      src={isFavorite ? redHeart : transHeart}
      alt={isFavorite ? "red heart icon" : "trans heart icon"}
      onClick={addFavoriteAndReloadPage}
      className="cursor-pointer"
    />
  );
}
