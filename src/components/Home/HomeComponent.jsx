import React, { useState } from "react";

import Pagination from "./Pagination";
import PokemonList from "./PokemonList";

export default function HomeComponent() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((prevState) => prevState + 20);
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    }

    setPage((prevState) => prevState - 20);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 pt-10 px-4">
      <h1 className="text-4xl text-primaryBlack font-semibold">Pokedex</h1>
      <PokemonList page={page} />
      <Pagination page={page} onNextPage={nextPage} onPrevPage={prevPage} />
    </div>
  );
}
