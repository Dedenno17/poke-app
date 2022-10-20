import React from "react";

function BaseStat(props) {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-between items-center text-sm font-semibold pr-2">
        <span className="w-[20%] opacity-50">HP</span>
        <span className="w-[10%]">{props.stats[0]["base_stat"]}</span>
        <span className="w-[65%] h-[20%]">
          <span
            className={`w-[${props.stats[0]["base_stat"]}%] h-full block rounded-full bg-red-400 `}
          ></span>
        </span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold pr-2">
        <span className="w-[20%] opacity-50">Attack</span>
        <span className="w-[10%]">{props.stats[1]["base_stat"]}</span>
        <span className="w-[65%] h-[20%]">
          <span
            className={`w-[${props.stats[1]["base_stat"]}%] h-full block rounded-full bg-green-500 `}
          ></span>
        </span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold pr-2">
        <span className="w-[20%] opacity-50">Defense</span>
        <span className="w-[10%]">{props.stats[2]["base_stat"]}</span>
        <span className="w-[65%] h-[20%]">
          <span
            className={`w-[${props.stats[2]["base_stat"]}%] h-full block rounded-full bg-red-400 `}
          ></span>
        </span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold pr-2">
        <span className="w-[20%] opacity-50">Sp.Atk</span>
        <span className="w-[10%]">{props.stats[3]["base_stat"]}</span>
        <span className="w-[65%] h-[20%]">
          <span
            className={`w-[${props.stats[3]["base_stat"]}%] h-full block rounded-full bg-green-500`}
          ></span>
        </span>
      </div>
      <div className="w-full flex justify-between items-center text-sm font-semibold pr-2">
        <span className="w-[20%] opacity-50">Sp.Def</span>
        <span className="w-[10%]">{props.stats[4]["base_stat"]}</span>
        <span className="w-[65%] h-[20%]">
          <span
            className={`w-[${props.stats[4]["base_stat"]}%] h-full block rounded-full bg-green-500`}
          ></span>
        </span>
      </div>
    </div>
  );
}

export default React.memo(BaseStat);
