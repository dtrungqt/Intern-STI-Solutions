export default function HeartIcon(props) {
  const isFavorite = props.favorite;
  const redHeart = props.imgRedHeart;
  const transHeart = props.imgTransHeart;

  if (isFavorite) {
    return <img src={redHeart} alt="red heart icon" />;
  }

  return <img src={transHeart} alt="trans heart icon" />;
}
