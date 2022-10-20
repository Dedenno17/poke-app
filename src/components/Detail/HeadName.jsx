import React from "react";

function HeadName(props) {
  return (
    <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-8">
      <div className="w-1/2">
        <h1 className="text-3xl text-primaryWhite font-bold mb-2">
          {props.name.toUpperCase()}
        </h1>
        <div className="w-full flex items-center">
          {props.types.map((item, i) => (
            <span
              key={Math.random() + i + ""}
              className="py-1 px-4 mr-2 bg-primaryWhite/20 rounded-full text-xs shadow-sm text-primaryWhite"
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <p className="text-primaryWhite font-semibold text-lg">{`#${props.order}`}</p>
      </div>
    </div>
  );
}

export default React.memo(HeadName);
