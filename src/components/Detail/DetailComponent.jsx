import React, { useEffect, useState } from "react";

import pokeball from "../../assets/pokeball.png";
import dotPattern from "../../assets/dot-pattern.png";

function DetailComponent(props) {
  const [pokemonData, setPokemonData] = useState(undefined);
  const [colorType, setColorType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + props.name
        );
        if (!res.ok) {
          throw new Error("Failed to Fetch!");
        }
        const data = await res.json();
        setPokemonData(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        alert(err.message);
      }
    };

    getPokemonData();
  }, [props.name]);

  useEffect(() => {
    if (!pokemonData) {
      return;
    }

    switch (pokemonData.types[0].type.name) {
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
  }, [pokemonData]);

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  return (
    <div
      className="w-full min-h-[100vh] flex justify-between items-center"
      style={{ backgroundColor: colorType }}
    >
      <div className="w-[50%] h-full flex -translate-y-32 opacity-60">
        <img src={dotPattern} alt="dot pattern" className="w-[30%] m-auto" />
      </div>
      <div className="w-[50%] h-full -translate-y-14 translate-x-8 opacity-60">
        <img src={pokeball} alt="pokeball" className="w-full" />
      </div>
      {/* <h1>{props.name}</h1> */}
    </div>
  );
}

export default React.memo(DetailComponent);
