import React from "react";

import pokeball from "../../assets/pokeball.png";

function PokemonCard(props) {
  return (
    <div className="w-full h-32 bg-primaryGrey rounded-lg shadow-xl relative overflow-hidden">
      <img
        src={pokeball}
        alt="pokeball"
        className="absolute w-24 h-24 -bottom-4 -right-4 opacity-50"
      />
      <div className="absolute w-full h-full top-0 left-0 p-3">
        <div className="w-[60%] h-full">
          <h1 className="text-md text-primaryWhite font-bold mb-2">
            {props.name.toUpperCase()}
          </h1>
          {props.types.map((item, i) => (
            <span
              key={Math.random() + i + ""}
              className="flex items-center justify-center w-[60%] py-1 px-2 rounded-full bg-primaryBlack text-primaryWhite text-[10px] mb-1"
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <img
        src={props.sprites["front_default"]}
        alt="pokemon"
        className="absolute w-[60%] bottom-0 right-0 z-20"
      />
    </div>
  );
}

export default PokemonCard;
