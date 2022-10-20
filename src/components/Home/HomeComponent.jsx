import React, { useState, useEffect } from "react";

import Pagination from "./Pagination";
import PokemonList from "./PokemonList";

export default function HomeComponent() {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const nextPage = () => {
    setIsLoading(true);
    setPage((prevState) => prevState + 20);
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    }

    setIsLoading(true);
    setPage((prevState) => prevState - 20);
  };

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + page
        );
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setPokemonList(data.results);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        alert(err.message);
      }
    };

    setTimeout(() => {
      getPokemonList();
    }, 2000);
  }, [page]);

  return (
    <div className="absolute top-0 left-0 right-0 pt-10 px-4 md:px-8">
      <h1 className="text-4xl text-primaryBlack font-semibold">Pokedex</h1>
      <PokemonList
        page={page}
        pokemonList={pokemonList}
        isLoading={isLoading}
      />
      <Pagination page={page} onNextPage={nextPage} onPrevPage={prevPage} />
    </div>
  );
}
