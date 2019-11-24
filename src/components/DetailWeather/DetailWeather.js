import React from "react"
import "./DetailWeather.css"
import Spisok from "../Spisok/Spisok";

const DetailWeather = () => {
  const elements = () => {
    return (
      <div>
        <Spisok />
      </div>
    );
  }

  return (
    <div className="details">
      {elements}
    </div>
  );
}

export default DetailWeather;
