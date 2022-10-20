import React, { useState, useEffect } from "react";

import About from "./About";
import BaseStat from "./BaseStat";
import Evolution from "./Evolution";
import Moves from "./Moves";

const pageInfo = ["About", "Base Stat", "Evolution", "Moves"];

function PokemonInfo(props) {
  const [currentPage, setCurrentPage] = useState("about");
  const [evolutionData, setEvolutionData] = useState(undefined);

  useEffect(() => {
    const getEvolutionData = async (id) => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/evolution-chain/" + id
        );
        if (!res.ok) {
          throw new Error("failed to fetch");
        }
        const data = await res.json();
        setEvolutionData(data);
      } catch (err) {
        alert(err.message);
      }
    };

    if (props.pokemonData) {
      getEvolutionData(props.pokemonData.id);
    }
  }, [props.pokemonData]);

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-[45%] p-6 bg-primaryWhite shadow-xl flex flex-col justify-between items-center">
      <ul className="w-full h-[25%] flex justify-between items-center bg-green-400">
        {pageInfo.map((item, i) => (
          <li
            key={Math.random() + i + ""}
            onClick={() => setCurrentPage(item.toLowerCase())}
            className={`py-4 px-1 h-full flex justify-center items-center text-sm font-semibold ${
              currentPage === item.toLocaleLowerCase()
                ? "border-b-primaryBlack border-b-2"
                : ""
            } `}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="w-full h-[70%] py-3 bg-yellow-200">
        {currentPage === "about" && (
          <About
            species={props.pokemonData.species}
            height={props.pokemonData.height}
            weight={props.pokemonData.weight}
            abilities={props.pokemonData.abilities}
          />
        )}
        {currentPage === "base stat" && (
          <BaseStat stats={props.pokemonData.stats} />
        )}
        {currentPage === "evolution" && evolutionData && (
          <Evolution evolutionData={evolutionData} />
        )}
        {currentPage === "moves" && (
          <Moves
            moves={props.pokemonData.moves}
            sprites={props.pokemonData.sprites}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(PokemonInfo);
