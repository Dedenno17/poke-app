import React, { useEffect, useState } from "react";
import choosenColorType from "../../helpers/choosenColorType";

import pokeball from "../../assets/pokeball.png";
import dotPattern from "../../assets/dot-pattern.png";
import HeadName from "./HeadName";
import SkeletonLoadingHead from "./SkeletonLoadingHead";
import PokemonInfo from "./PokemonInfo";
import SkeletonLoadingInfo from "./SkeletonLoadingInfo";

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
      } catch (err) {
        setIsLoading(false);
        alert(err.message);
      }
    };

    getPokemonData();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
      <div className="w-[50%] h-full flex -translate-y-32 opacity-40">
        <img src={dotPattern} alt="dot pattern" className="w-[30%] m-auto" />
      </div>
      <div className="w-[50%] h-full -translate-y-14 translate-x-8 opacity-40">
        <img src={pokeball} alt="pokeball" className="w-full" />
      </div>
      {pokemonData && !isLoading && (
        <HeadName
          name={pokemonData.name}
          types={pokemonData.types}
          order={pokemonData.order}
        />
      )}
      {pokemonData && !isLoading && <PokemonInfo pokemonData={pokemonData} />}
      {pokemonData && isLoading && <SkeletonLoadingHead />}
      {pokemonData && isLoading && <SkeletonLoadingInfo />}
      {pokemonData && !isLoading && (
        <img
          src={pokemonData.sprites.other.home["front_default"]}
          alt="pokemon"
          className="absolute w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[75%] md:-translate-y-[83%] lg:w-[55%] lg:-translate-x-[90%] lg:-translate-y-[45%]"
        />
      )}
    </div>
  );
}

export default React.memo(DetailComponent);
