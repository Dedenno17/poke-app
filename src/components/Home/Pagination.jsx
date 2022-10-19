import React from "react";

import angleLeft from "../../assets/angle-left-solid.svg";
import angleٌRight from "../../assets/angle-right-solid.svg";

function Pagination(props) {
  return (
    <div
      className={`w-full flex items-center ${
        props.page === 0 ? "justify-end" : "justify-between"
      } py-4`}
    >
      <div
        className={`${
          props.page === 0 ? "hidden" : "flex"
        } p-4 bg-primaryGrey rounded-lg shadow-xl w-[30%] cursor-pointer hover:brightness-90`}
        onClick={props.onPrevPage}
      >
        <img
          src={angleLeft}
          alt="arrow left"
          className="w-[15%] m-auto filter-black"
        />
      </div>
      <div
        className="flex p-4 bg-primaryGrey rounded-lg shadow-xl w-[30%] cursor-pointer hover:brightness-90"
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