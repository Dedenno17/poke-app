import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import choosenColorType from "../../helpers/choosenColorType";
import pokeball from "../../assets/pokeball.png";

function PokemonCard(props) {
  const [colorType, setColorType] = useState("");

  useEffect(() => {
    setColorType(choosenColorType(props.types[0].type.name));
  }, [props.types]);

  return (
    <Link to={`/${props.name}`}>
      <div
        className="w-full h-32 rounded-lg shadow-xl relative overflow-hidden transition-all active:scale-110 cursor-pointer lg:hover:scale-110 xl:h-full"
        style={{ backgroundColor: colorType }}
      >
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
                className="flex items-center justify-center w-[60%] py-1 px-2 rounded-full text-primaryWhite text-[10px] mb-1 bg-primaryBlack/20"
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <img
          src={props.sprites["front_default"]}
          alt="pokemon"
          className="absolute w-[60%] bottom-0 right-0 z-20 xl:w-[85%]"
        />
      </div>
    </Link>
  );
}

export default React.memo(PokemonCard);
