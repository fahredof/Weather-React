import React from "react";
import "./DefaultWeather.css"

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";

const DefaultWeather = () => {

  const api_url = await
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${API_KEY}&units=metric`);
  const data = await api_url.json();

  return(
    <div className="def">
      <p>a</p>
      <p>b</p>
      <p>c</p>
    </div>
)}

export default DefaultWeather;
