import React from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../components/Detail/DetailComponent";

function Detail() {
  const { name } = useParams();

  return (
    <div className="w-full">
      <DetailComponent name={name} />
    </div>
  );
}

export default Detail;
