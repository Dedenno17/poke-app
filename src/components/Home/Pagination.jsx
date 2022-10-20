import React from "react";

import angleLeft from "../../assets/angle-left-solid.svg";
import angleٌRight from "../../assets/angle-right-solid.svg";

function Pagination(props) {
  return (
    <div
      className={`w-full flex items-center ${
        props.page === 0 ? "justify-end" : "justify-between"
      } pt-4 pb-4 lg:justify-end lg:pt-0 lg:pb-8 xl:pt-4`}
    >
      <div
        className={`${
          props.page === 0 ? "hidden" : "flex"
        } p-4 bg-primaryGrey rounded-lg shadow-xl w-[30%] cursor-pointer hover:brightness-90 md:w-[20%] lg:w-[10%] lg:mr-8`}
        onClick={props.onPrevPage}
      >
        <img
          src={angleLeft}
          alt="arrow left"
          className="w-[15%] m-auto filter-black"
        />
      </div>
      <div
        className="flex p-4 bg-primaryGrey rounded-lg shadow-xl w-[30%] cursor-pointer hover:brightness-90  md:w-[20%] lg:w-[10%]"
        onClick={props.onNextPage}
      >
        <img
          src={angleٌRight}
          alt="arrow left"
          className="w-[15%] m-auto filter-black"
        />
      </div>
    </div>
  );
}

export default React.memo(Pagination);
