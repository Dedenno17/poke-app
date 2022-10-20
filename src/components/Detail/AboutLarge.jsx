import React from "react";
import firstCapitalLetter from "../../helpers/firstCapitalLetter";

function AboutLarge(props) {
  const queueAbility = (arr) => {
    const abilitiesName = [];
    arr.forEach((item) => {
      abilitiesName.push(firstCapitalLetter(item.ability.name));
    });

    return abilitiesName.join(", ");
  };
  return (
    <div className="w-full h-[23%] flex flex-col justify-between items-center bg-primaryWhite rounded-3xl shadow-xl py-3 px-5">
      <div className="w-full flex justify-between items-center text-sm font-semibold md:text-lg">
        <span className="w-[25%] opacity-50">Species</span>
        <span className="w-[70%]">
          {firstCapitalLetter(props.species.name)}
        </span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold md:text-lg">
        <span className="w-[25%] opacity-50">Height</span>
        <span className="w-[70%]">{props.height} cm</span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold md:text-lg">
        <span className="w-[25%] opacity-50">Weight</span>
        <span className="w-[70%]">{props.weight} kg</span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold md:text-lg">
        <span className="w-[25%] opacity-50">Abilities</span>
        <span className="w-[70%]">{queueAbility(props.abilities)}</span>
      </div>
    </div>
  );
}

export default React.memo(AboutLarge);
