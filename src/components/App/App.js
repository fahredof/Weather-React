import React from "react";
import "./App.css"
import Header from "../Header/Header";
import DefaultWeather from "../DefaultWeather/DefaultWeather"
import GeolocationWeather from "../GeolocationWeather/GeolocationWeather.js";
import {getWeatherByCity, getWeatherByCoordinates} from "../../functions/getWeather.js";

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
const CITY_DEFAULT = "New York";

class App extends React.Component {

  state = {
      city: undefined,
      country: undefined,
      temp: undefined
  }

  getDefaultWeather = async (event) => {
    event.preventDefault();
    let data = await getWeatherByCity(API_KEY, CITY_DEFAULT);
  	//console.log(data);

    this.setState({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp
    });
  }

  render() {
    return(
    <div className="body">
      <p></p>
      <Header weatherMethod={this.getDefaultWeather}/>
      <DefaultWeather
      city = {this.state.city}
      country = {this.state.country}
      temp = {this.state.temp}
      />
      <div id="details">Window: 5 m/s</div>
      <div id="cityOne">Ufa</div>
      <div id="cityTwo">Tomsk</div>
      <div id="cityThree">Kazan</div>
    </div>
    );
  }
}

export default App;
