import React from "react";
import "./DefaultWeather.css"
import Spinner from "../Spinner/Spinner"

const DefaultWeather = (props) => {

  return(
    <div className="def">
    { props.city ?
      <div>
        <p>{props.city}</p>
        <p>{(props.temp - 273.15).toFixed(0)} °C</p>
        <img src={"http://openweathermap.org/img/wn/" + props.image + "@2x.png"} alt=""/>
      </div>
      : <div className="spin"><Spinner/></div>
    }
    </div>
  )
}

export default DefaultWeather;
