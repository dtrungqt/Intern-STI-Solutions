import { useDispatch, useSelector } from "react-redux";
import { paginateActions } from "../../store/index";

export default function PageNumber() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPage = useSelector((state) => state.totalPage);

  const goToPreviousPage = () => {
    console.log("PreviousPage");
    dispatch(paginateActions.goToPreviousPage());
  };

  const goToNextPage = () => {
    dispatch(paginateActions.goToNextPage());
    console.log("NextPage");
  };

  let PreviousButton = <div className="w-[12px] h-[20px]"></div>;
  if (currentPage > 1) {
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
  if (currentPage === totalPage) {
    NextButton = <div className="w-[12px] h-[20px]"></div>;
  }

  return (
    <div className="flex items-center gap-4 w-[68px] mt-[18px] mx-auto pb-[56px]">
      {PreviousButton}
      <h6 className="text-blue4 text-base leading-[19px] font-black">
        {currentPage}
      </h6>
      {NextButton}
    </div>
  );
}
