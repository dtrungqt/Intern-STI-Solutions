import GameItem from "@/components/games/game-item";
import { useState } from "react";

const newGamesData = [
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game1.jpg",
    favorite: true,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game2.jpg",
    favorite: true,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game3.jpg",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game4.jpg",
    favorite: false,
  },
  {
    tags: ["Action", "Adventure"],
    title: "Red Dead II: Redemption",
    img: "/images/games/game4.jpg",
    favorite: false,
  },
];

const NewsGame = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState();
  const [startScrollLeft, setStartScrollLeft] = useState();

  const dragStartHandle = (e) => {
    setIsDragging(true);
    //thêm class để vô hiệu hoá việc chọn văn bản khi kéo thẻ (dragging the card)
    carousel.classList.add("dragging");

    //Ghi lại vị trí con trỏ và cuộn ban đầu của carousel (băng chuyền)
    setStartX(e.pageX);
    setStartScrollLeft(carousel.scrollLeft);
  };
  // const draggingHandle;
  // const dragStopHandle;

  return (
    // <div className="w-full pl-16 mt-[30px]">
    <div className="wrapper-homepage">
      <div className="flex gap-[11px] items-center">
        <h2 className="text-[32px] font-extrabold leading-[38px]">NEW GAMES</h2>
        <div className="w-[36px] h-[19px] flex items-center justify-center rounded-[15px] bg-pink1 text-xs font-semibold leading-[14px]">
          Hot
        </div>
      </div>

      {/* Card games  */}
      <div
        className="mt-4 flex gap-[21px] overflow-hidden"
        id="carousel"
        // onMouseDown={dragStartHandle}
        // onMouseMove={draggingHandle}
        // onMouseUp={dragStopHandle}
      >
        {newGamesData.map((data, i) => {
          return <GameItem data={data} key={i} />;
        })}
      </div>
      {/*end Card games  */}
    </div>
  );
};

export default NewsGame;
