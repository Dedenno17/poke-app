import React from "react";

function SkeletonLoadingInfo() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-[45%] p-6 bg-primaryWhite shadow-xl flex flex-col justify-between items-center rounded-t-3xl">
      <ul className="w-full h-[25%] flex justify-between items-center animate-pulse">
        {[1, 2, 3, 4].map((item) => (
          <li
            key={Math.random() + item + ""}
            className="py-4 w-[20%] px-3 h-full bg-primaryGrey"
          ></li>
        ))}
      </ul>
      <div className="w-full h-full flex flex-col justify-between items-center py-5 animate-pulse">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item + ""}
            className="w-full h-[15%] flex justify-between items-center text-sm font-semibold"
          >
            <span className="w-[25%] h-full opacity-50 bg-primaryGrey"></span>
            <span className="w-[70%] h-full bg-primaryGrey"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(SkeletonLoadingInfo);
