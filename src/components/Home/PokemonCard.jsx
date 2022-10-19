import React, { useEffect, useState } from "react";

import pokeball from "../../assets/pokeball.png";

function PokemonCard(props) {
  const [colorType, setColorType] = useState("");

  useEffect(() => {
    switch (props.types[0].type.name) {
      case "bug":
        setColorType("#27cb50");
        break;
      case "grass":
        setColorType("#27cb50");
        break;
      case "steel":
        setColorType("#27cb50");
        break;
      case "dark":
        setColorType("#906791");
        break;
      case "poison":
        setColorType("#906791");
        break;
      case "ghost":
        setColorType("#906791");
        break;
      case "dragon":
        setColorType("#62cad9");
        break;
      case "ice":
        setColorType("#62cad9");
        break;
      case "water":
        setColorType("#62cad9");
        break;
      case "flying":
        setColorType("#62cad9");
        break;
      case "electric":
        setColorType("#FFB200");
        break;
      case "fairy":
        setColorType("#fd4b5a");
        break;
      case "fire":
        setColorType("#fd4b5a");
        break;
      case "psychic":
        setColorType("#fd4b5a");
        break;
      case "ground":
        setColorType("#8b3e22");
        break;
      case "rock":
        setColorType("#8b3e22");
        break;
      case "fighting":
        setColorType("#ef6239");
        break;
      case "normal":
        setColorType("#8b3e22");
        break;
      default:
        setColorType("#dcdee0");
    }
  }, [props.types]);

  return (
    <div
      className="w-full h-32 rounded-lg shadow-xl relative overflow-hidden transition-all active:scale-110"
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
        className="absolute w-[60%] bottom-0 right-0 z-20"
      />
    </div>
  );
}

export default React.memo(PokemonCard);
