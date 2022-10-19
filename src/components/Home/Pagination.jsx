import React from "react";

import angleLeft from "../../assets/angle-left-solid.svg";
import angleٌRight from "../../assets/angle-right-solid.svg";

export default function Pagination() {
  return (
    <div className="w-full flex items-center justify-around py-4">
      <div className="flex p-4 bg-primaryGrey rounded-lg shadow-xl w-[30%] cursor-pointer hover:brightness-90">
        <img
          src={angleLeft}
          alt="arrow left"
          className="w-[15%] m-auto filter-black"
        />
      </div>
      <div className="flex p-4 bg-primaryGrey rounded-lg shadow-xl w-[30%] cursor-pointer hover:brightness-90">
        <img
          src={angleٌRight}
          alt="arrow left"
          className="w-[15%] m-auto filter-black"
        />
      </div>
    </div>
  );
}
