import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

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
    <div className="w-full grid grid-cols-2 gap-4 pt-10 pb-8">
      {props.pokemonList &&
        pokemonsData.length !== 0 &&
        pokemonsData.map((item, i) => (
          <PokemonCard
            key={Math.random() + i + ""}
            name={item.name}
            types={item.types}
            sprites={item.sprites}
          />
        ))}
    </div>
  );
}

export default React.memo(PokemonList);
