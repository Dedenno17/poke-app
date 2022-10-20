import React from "react";
import firstCapitalLetter from "../../helpers/firstCapitalLetter";

function About(props) {
  const queueAbility = (arr) => {
    const abilitiesName = [];
    arr.forEach((item) => {
      abilitiesName.push(firstCapitalLetter(item.ability.name));
    });

    return abilitiesName.join(", ");
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-between items-center text-sm font-semibold">
        <span className="w-[25%] opacity-50">Species</span>
        <span className="w-[70%]">
          {firstCapitalLetter(props.species.name)}
        </span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold">
        <span className="w-[25%] opacity-50">Height</span>
        <span className="w-[70%]">{props.height} cm</span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold">
        <span className="w-[25%] opacity-50">Weight</span>
        <span className="w-[70%]">{props.weight} kg</span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold">
        <span className="w-[25%] opacity-50">Abilities</span>
        <span className="w-[70%]">{queueAbility(props.abilities)}</span>
      </div>
    </div>
  );
}

export default React.memo(About);
