import React from "react";

function SkeletonLoadingHead() {
  return (
    <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-8 animate-pulse">
      <div className="w-[60%]">
        <span className="w-full block p-4 mb-2 bg-primaryGrey"></span>
        <div className="w-full flex items-center">
          <span className="py-3 px-7 mr-2 bg-primaryGrey rounded-full shadow-sm"></span>
        </div>
      </div>
      <div className="w-[40%] flex justify-end">
        <span className="bg-primaryGrey block w-[35%] p-3"></span>
      </div>
    </div>
  );
}

export default React.memo(SkeletonLoadingHead);
