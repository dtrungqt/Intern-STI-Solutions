import { useState } from "react";

export default function PageNumber({ limit }) {
  const [pageNumber, setPageNumber] = useState(1);

  const goToPreviousPage = () => {
    setPageNumber((prevState) => {
      if (prevState === 1) {
        return 1;
      }
      return prevState - 1;
    });
  };

  const goToNextPage = () => {
    setPageNumber((prevState) => {
      if (prevState === limit) {
        return limit;
      }
      return prevState + 1;
    });
  };

  let PreviousButton = <div className="w-[12px] h-[20px]"></div>;
  if (pageNumber > 1) {
    PreviousButton = (
      <img
        src="/images/home-page/arrow-left-icon.svg"
        alt="arrow left icon"
        className="cursor-pointer"
        onClick={goToPreviousPage}
      />
    );
  }

  let NextButton = (
    <img
      src="/images/home-page/arrow-right-icon.svg"
      alt="arrow right icon"
      className="cursor-pointer"
      onClick={goToNextPage}
    />
  );
  if (pageNumber === limit) {
    NextButton = <div className="w-[12px] h-[20px]"></div>;
  }

  return (
    <div className="flex items-center gap-4 w-[68px] mt-[18px] mx-auto pb-[56px]">
      {PreviousButton}
      <h6 className="text-blue4 text-base leading-[19px] font-black">
        {pageNumber}
      </h6>
      {NextButton}
    </div>
  );
}
