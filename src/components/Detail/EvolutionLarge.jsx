import React, { useState, useEffect } from "react";
import firstCapitalLetter from "../../helpers/firstCapitalLetter";

function EvolutionLarge(props) {
  const [evolutionPokemon, setEvolutionPokemon] = useState([]);
  const [evolutionData, setEvolutionData] = useState(undefined);

  useEffect(() => {
    const getEvolutionPokemonData = async (name) => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon-form/" + name
        );
        if (!res.ok) {
          throw new Error("failed to fetch");
        }
        const data = await res.json();
        setEvolutionPokemon(data);
      } catch (err) {
        alert(err.message);
      }
    };

    if (evolutionData) {
      getEvolutionPokemonData(
        evolutionData.chain["evolves_to"][0].species.name
      );
    }
  }, [evolutionData]);

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
    <div className="w-full h-[23%] flex justify-between items-center py-3 px-5 bg-primaryWhite rounded-3xl shadow-xl">
      {evolutionPokemon.length !== 0 && (
        <>
          <div className="w-1/2 text-3xl font-bold text-primaryBlack flex md:text-4xl">
            <h3 className="m-auto">
              {firstCapitalLetter(evolutionPokemon.name)}
            </h3>
          </div>
          <div className="w-1/2 flex">
            <img
              src={evolutionPokemon.sprites["front_default"]}
              alt="evolution"
              className="w-full m-auto md:w-[80%]"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(EvolutionLarge);
