import React from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../components/Detail/DetailComponent";

function Detail() {
  const { name } = useParams();

  console.log(name);

  return (
    <div className="max-w-[1033px] mx-auto">
      <DetailComponent name={name} />
    </div>
  );
}

export default Detail;
