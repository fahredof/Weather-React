import React from "react"
import "./DetailWeather.css"
import Spinner from "../Spinner/Spinner"

const DetailWeather = (props) => {
  return(
    <div className="details">
    { props.wind ?
      <div>
      <p>Wind {props.wind} m/s</p>
      <p>Overcast {props.overcast}</p>
      <p>Pressure {props.pressure} hpa</p>
      <p>Humidity {props.humidity} %</p>
      <p>Coordinates [{props.coordinatesLat},{props.coordinatesLon}]</p>
      </div>
      : <Spinner/>
    }
    </div>
  )
}

export default DetailWeather;
