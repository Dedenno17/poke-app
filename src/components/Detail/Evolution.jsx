import React, { useState, useEffect } from "react";
import firstCapitalLetter from "../../helpers/firstCapitalLetter";

function Evolution(props) {
  const [evolutionPokemon, setEvolutionPokemon] = useState([]);
  const levelUpPokemon =
    props.evolutionData.chain["evolves_to"][0].species.name;

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

    getEvolutionPokemonData(levelUpPokemon);
  }, [levelUpPokemon]);

  return (
    <div className="w-full h-full flex justify-between items-center">
      {evolutionPokemon.length !== 0 && (
        <>
          <div className="w-1/2 text-3xl font-bold text-primaryBlack flex">
            <h3 className="m-auto">
              {firstCapitalLetter(evolutionPokemon.name)}
            </h3>
          </div>
          <div className="w-1/2 flex">
            <img
              src={evolutionPokemon.sprites["front_default"]}
              alt="evolution"
              className="w-full m-auto"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(Evolution);
