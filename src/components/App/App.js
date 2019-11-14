import React from "react"
import "./App.css"
import Header from "../Header/Header"
import DefaultWeather from "../DefaultWeather/DefaultWeather"
import DetailWeather from "../DetailWeather/DetailWeather"
import {getWeatherByCity, getWeatherByCoordinates} from "../../functions/getWeather.js"
import {getCoordinates} from "../../functions/getCoordinates.js"

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
const CITY_DEFAULT = "New York";

class App extends React.Component {

  state = {};

  getEmptyState = () => ({
      city: undefined,
      temp: undefined,
      image: undefined,
      wind: undefined,
      overcast: undefined,
      pressure: undefined,
      humidity: undefined,
      coordinatesLat: undefined,
      coordinatesLon: undefined
  })

  setData = (data) =>
    this.setState({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      image: data.weather[0].icon,

      wind: data.wind.speed,
      overcast: data.weather[0].description,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      coordinatesLat: data.coord.lat,
      coordinatesLon: data.coord.lon
    });

  getDefaultWeather = async () => {
    let data = await getWeatherByCity(API_KEY, CITY_DEFAULT);
    this.setData(data);
    console.log(data);
  }

  showCoordinate = async (position) => {
  	let latCor = position.coords.latitude;
  	let lonCor = position.coords.longitude;
    let data = await getWeatherByCoordinates(API_KEY, latCor, lonCor);
    console.log(data);
    this.setData(data);
  }

  getWeatherByCoor = () => {
    this.setState(this.getEmptyState());
    getCoordinates(this.showCoordinate, this.getDefaultWeather);
  }

  componentDidMount() {
    this.setState(this.getEmptyState());
    this.getWeatherByCoor();
  }

  render() {
    return(
    <div className="body">
      <Header updateGeolocation={this.getWeatherByCoor}/>
      <DefaultWeather
      city = {this.state.city}
      temp = {this.state.temp}
      image = {this.state.image}
      />
      <DetailWeather
      wind = {this.state.wind}
      overcast = {this.state.overcast}
      pressure = {this.state.pressure}
      humidity = {this.state.humidity}
      coordinatesLat = {this.state.coordinatesLat}
      coordinatesLon = {this.state.coordinatesLon}
      />

      <div id="cityOne">Ufa</div>
      <div id="cityTwo">Tomsk</div>
      <div id="cityThree">Kazan</div>
    </div>
    );
  }
}

export default App;
