import React from "react";
import "./DefaultWeather.css"
import Spinner from "../Spinner/Spinner"

const DefaultWeather = (props) => {

  return(
    <div className="def" id="def">
    { props.city ?
      <div className="default">
        <p className="city">{props.city}</p>
        <p className="temp">{(props.temp - 273.15).toFixed(0)} °C</p>
        <div className="image">
        <img src={"http://openweathermap.org/img/wn/" + props.image + "@2x.png"} alt=""/>
        </div>
      </div>
      : <Spinner/>
    }
    </div>
  )
}

export default DefaultWeather;
