import React from "react";

function MovesLarge(props) {
  return (
    <div className="w-full h-[23%] flex justify-between items-center p-5 bg-primaryWhite rounded-3xl shadow-xl">
      <div className="w-[35%] flex">
        <img
          src={props.sprites.other["dream_world"]["front_default"]}
          className="w-[60%] m-auto"
          alt="pokemon"
        />
      </div>
      <div className="w-[65%] grid grid-cols-3 gap-1">
        {props.moves.slice(0, 15).map((item, i) => (
          <span
            key={Math.random() + i + ""}
            className="bg-primaryGrey text-[10px] flex justify-center items-center py-1 rounded-full"
          >
            {item.move.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default React.memo(MovesLarge);
