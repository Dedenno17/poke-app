import React, { useState, useEffect } from "react";
import firstCapitalLetter from "../../helpers/firstCapitalLetter";

function Evolution(props) {
  const [evolutionPokemon, setEvolutionPokemon] = useState(undefined);
  // const levelUpPokemon =
  //   props.evolutionData.chain["evolves_to"][0].species.name;

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

    if (props.evolutionData) {
      if (props.evolutionData.chain["evolves_to"].length === 0) {
        setEvolutionPokemon(undefined);
        return;
      }
      getEvolutionPokemonData(
        props.evolutionData.chain["evolves_to"][0].species.name
      );
    }
  }, [props.evolutionData]);

  return (
    <div className="w-full h-full flex justify-between items-center">
      {evolutionPokemon && (
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
      {!evolutionPokemon && <p className="text-4xl font-bold">No Evolution</p>}
    </div>
  );
}

export default React.memo(Evolution);
