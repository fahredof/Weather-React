import {getWeatherByCoordinates} from "./getWeather.js"

function getCoordinates(callback, error) {
  navigator.geolocation.getCurrentPosition(callback, error);
}

export {getCoordinates}
