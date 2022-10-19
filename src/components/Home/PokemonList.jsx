import React, { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  //   const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
        );
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setPokemonList(data.results);
      } catch (err) {
        alert(err.message);
      }
    };

    getPokemonList();
  }, []);

  //   useEffect(() => {
  //     const getPokemonData = async (name) => {
  //       try {
  //         const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  //         if (!res.ok) {
  //           throw new Error("Something went wrong!");
  //         }
  //         const data = await res.json();
  //         setPokemonsData((prevState) => {
  //           return [...prevState, data];
  //         });
  //       } catch (err) {
  //         alert(err.message);
  //       }
  //     };

  //     // if (pokemonsData.length === 0) {
  //     //   pokemonList.forEach((item) => getPokemonData(item.name));
  //     // }
  //   }, [pokemonList, pokemonsData]);

  return (
    <div className="w-full grid grid-cols-2 gap-4 pt-10 pb-8">
      {pokemonList &&
        pokemonList.map((item, i) => (
          <div
            key={Math.random() + item + ""}
            className="w-full h-32 bg-primaryGrey rounded-lg shadow-xl"
          >
            {/* <h1>{i + 1}</h1>
            <p>{item.order}</p>
            <img src={item.sprites["front_default"]} alt="pokemon" /> */}
            <h1>{item.name}</h1>
            <p>{item.url}</p>
            <p>{i + 1}</p>
          </div>
        ))}
    </div>
  );
}
