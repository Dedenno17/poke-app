import React from "react";

function Moves(props) {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="w-[35%] flex">
        <img
          src={props.sprites.other["dream_world"]["front_default"]}
          className="w-[60%] m-auto"
          alt="pokemon"
        />
      </div>
      <div className="w-[65%] grid grid-cols-3 gap-1 md:gap-3">
        {props.moves.slice(0, 15).map((item, i) => (
          <span
            key={Math.random() + i + ""}
            className="bg-primaryGrey text-[10px] flex justify-center items-center py-1 rounded-full md:text-[14px]"
          >
            {item.move.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Moves);
