import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import SkeletonLoading from "./SkeletonLoading";

function PokemonList(props) {
  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    const getPokemonData = async (name) => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setPokemonsData((prevState) => {
          if (prevState.some((item) => item.order === data.order)) {
            return prevState;
          }
          return [...prevState, data];
        });
      } catch (err) {
        alert(err.message);
      }
    };

    if (pokemonsData.length === 0) {
      props.pokemonList.forEach((item) => getPokemonData(item.name));
    }

    if (pokemonsData.length !== 0) {
      setPokemonsData([]);
      props.pokemonList.forEach((item) => getPokemonData(item.name));
    }

    // eslint-disable-next-line
  }, [props.pokemonList]);

  return (
    <div className="w-full min-h-[100vh] grid grid-cols-2 gap-4 pt-10 pb-8">
      {props.pokemonList.length !== 0 &&
        !props.isLoading &&
        pokemonsData.length !== 0 &&
        pokemonsData.map((item, i) => (
          <PokemonCard
            key={Math.random() + i + ""}
            name={item.name}
            types={item.types}
            sprites={item.sprites}
          />
        ))}
      {props.isLoading &&
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => <SkeletonLoading key={Math.random() + item + ""} />)}
    </div>
  );
}

export default React.memo(PokemonList);
