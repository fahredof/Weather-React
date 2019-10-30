import React from "react";
import "./App.css"
import Header from "../Header/Header";
import DefaultWeather from "../DefaultWeather/DefaultWeather"

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
const cityDef = "Ufa";

class App extends React.Component {

  state = {
      cityDefault: undefined,
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined,
      isLoad: "false"
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    let city = event.target.elements.city.value;

    if (city) {
      // Api
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      //console.log(data);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города",
      });
    }
  }

  render() {
    return(
    <div className="body">
      <Header/>
      <DefaultWeather/> 
      <div id="details">Window: 5 m/s</div>
      <div id="cityOne">Ufa</div>
      <div id="cityTwo">Tomsk</div>
      <div id="cityThree">Kazan</div>
    </div>
    );
  }
}

export default App;
