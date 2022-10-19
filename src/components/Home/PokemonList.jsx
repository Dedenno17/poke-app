import React from "react";

export default function PokemonList() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 pt-10 pb-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={Math.random() + item + ""}
          className="w-full h-32 bg-primaryGrey rounded-lg shadow-xl"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
