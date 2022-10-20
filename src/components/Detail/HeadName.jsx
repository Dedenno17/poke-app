import React from "react";
import firstCapitalLetter from "../../helpers/firstCapitalLetter";
import orderNumber from "../../helpers/orderNumber";

function HeadName(props) {
  return (
    <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-8">
      <div className="w-[60%]">
        <h1 className="text-3xl text-primaryWhite font-bold mb-2">
          {firstCapitalLetter(props.name)}
        </h1>
        <div className="w-full flex items-center">
          {props.types.map((item, i) => (
            <span
              key={Math.random() + i + ""}
              className="py-1 px-4 mr-2 bg-primaryWhite/20 rounded-full text-xs shadow-sm text-primaryWhite"
            >
              {firstCapitalLetter(item.type.name)}
            </span>
          ))}
        </div>
      </div>
      <div className="w-[40%] flex justify-end">
        <p className="text-primaryWhite font-semibold text-lg">
          {orderNumber(props.order)}
        </p>
      </div>
    </div>
  );
}

export default React.memo(HeadName);
