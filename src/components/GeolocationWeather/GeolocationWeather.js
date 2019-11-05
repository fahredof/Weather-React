import React from "react";

const GeolocationWeather = () => {

  const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
  let data;

  async function getGeolocationWeather(latitude, longitude) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  	data = await response.json();
  	console.log(data);
  }

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(showCoordinate);
  }

  function showCoordinate(position) {
    let latCor = position.coords.latitude;
    let lonCor = position.coords.longitude;
    getGeolocationWeather(latCor, lonCor);
  }
  getCoordinates();
  return(
    <div>
      <p>SLSLSLSLLS</p>
    </div>
)}

export default GeolocationWeather;
