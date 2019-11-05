import React from "react";
import "./DefaultWeather.css"

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
let cityDefault = "Ufa";
let data;

const DefaultWeather = (props) => {

  return(
    <div className="def">

      <p>{props.city}</p>
      <p>{props.country}</p>
      <p>{props.temp}</p>
    </div>
  )
}



export default DefaultWeather;
