import React from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";

export default function HomeComponent() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 pt-10 px-4">
      <h1 className="text-4xl text-primaryBlack font-semibold">Pokedex</h1>
      <PokemonList />
      <Pagination />
    </div>
  );
}
