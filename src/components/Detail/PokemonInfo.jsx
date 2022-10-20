import React from "react";

const pageInfo = ["About", "Base Stat", "Evolution", "Moves"];

function PokemonInfo() {
  // const [currentPage, setCurrentPage] = useState("about");

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 p-6 bg-primaryWhite shadow-xl flex flex-col justify-between items-center">
      <ul className="w-full flex justify-between items-center bg-green-400">
        {pageInfo.map((item, i) => (
          <li
            key={Math.random() + i + ""}
            className={`py-4 px-1 flex justify-center items-center text-sm font-semibold border-b-2 border-b-primaryBlack`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="w-full h-[70%] bg-yellow-200"></div>
    </div>
  );
}

export default React.memo(PokemonInfo);
