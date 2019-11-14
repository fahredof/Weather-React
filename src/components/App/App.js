import React from "react";
import "./App.css"
import Header from "../Header/Header";
import DefaultWeather from "../DefaultWeather/DefaultWeather"
import GeolocationWeather from "../GeolocationWeather/GeolocationWeather.js";
import {getWeatherByCity, getWeatherByCoordinates} from "../../functions/getWeather.js";
import {getCoordinates} from "../../functions/getCoordinates.js";

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
const CITY_DEFAULT = "New York";

class App extends React.Component {

  state = {
      city: undefined,
      country: undefined,
      temp: undefined
  }

  setData = (data) =>
    this.setState({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp
    });

  getDefaultWeather = async () => {
    let data = await getWeatherByCity(API_KEY, CITY_DEFAULT);
    this.setData(data);
  }

  showCoordinate = async (position) => {
  	let latCor = position.coords.latitude;
  	let lonCor = position.coords.longitude;
    let data = await getWeatherByCoordinates(API_KEY, latCor, lonCor);
    this.setData(data);
  }

  getWeatherByCoor = (event) => {
    event.preventDefault();
    getCoordinates(this.showCoordinate, this.getDefaultWeather);
  }


  render() {
    return(
    <div className="body">
      <Header updateGeolocation={this.getWeatherByCoor}/>
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
