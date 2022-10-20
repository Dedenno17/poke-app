import React, { useEffect, useState } from "react";
import choosenColorType from "../../helpers/choosenColorType";

import pokeball from "../../assets/pokeball.png";
import dotPattern from "../../assets/dot-pattern.png";
import HeadName from "./HeadName";

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

    setColorType(choosenColorType(pokemonData.types[0].type.name));
  }, [pokemonData]);

  return (
    <div
      className="w-full min-h-[100vh] flex justify-between items-center relative"
      style={{ backgroundColor: colorType }}
    >
      <div className="w-[50%] h-full flex -translate-y-32 opacity-60">
        <img src={dotPattern} alt="dot pattern" className="w-[30%] m-auto" />
      </div>
      <div className="w-[50%] h-full -translate-y-14 translate-x-8 opacity-60">
        <img src={pokeball} alt="pokeball" className="w-full" />
      </div>
      {pokemonData && !isLoading && (
        <HeadName
          name={pokemonData.name}
          types={pokemonData.types}
          order={pokemonData.order}
        />
      )}
    </div>
  );
}

export default React.memo(DetailComponent);
