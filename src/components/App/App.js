import React, {useEffect} from "react"
import "./App.css"
import Header from "../Header/Header"
import DefaultWeather from "../DefaultWeather/DefaultWeather"
import DetailWeather from "../DetailWeather/DetailWeather"
import FavoritesCities from "../FavoritesCities/FavoritesCities"
import {getWeatherByCity, getWeatherByCoordinates} from "../../functions/getWeather.js"
import {getCoordinates} from "../../functions/getCoordinates.js"

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
const CITY_DEFAULT = "New York";

class App extends React.Component {

  state = {
    cities: [{},{},{}],
    mainCity: {}
  };

  parseData = (data) => ({
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
  })

  addCity = (id, data) =>{
    const newState = {...this.state};
    newState.cities[id - 1] = this.parseData(data);
    this.setState(newState);
  }

  deleteCity = (id) => {
    const newState = {...this.state};
    newState.cities[id - 1] = {};
    this.setState(newState);
  }

  addMainCity = (data) => {
    this.setState({
      ...this.state,
      mainCity: this.parseData(data)
    });
  }

  getDefaultWeather = async () => {
    let data = await getWeatherByCity(API_KEY, CITY_DEFAULT);
    this.addMainCity(data);
  }

  getWeather = async (id, cityName) => {
    let data = await getWeatherByCity(API_KEY, cityName);
    this.addCity(id, data);
  }

  showCoordinate = async (position) => {
  	let latCor = position.coords.latitude;
  	let lonCor = position.coords.longitude;
    let data = await getWeatherByCoordinates(API_KEY, latCor, lonCor);
    this.addMainCity(data);
  }

  getWeatherByCoor = () => {
    getCoordinates(this.showCoordinate, this.getDefaultWeather);
  }

  componentDidMount() {
    this.getWeatherByCoor();
  }
// New code with Redux





  render() {
    return(
    <div className="body">
      <Header updateGeolocation={this.getWeatherByCoor}/>
      <DefaultWeather
      city = {this.state.mainCity.city}
      temp = {this.state.mainCity.temp}
      image = {this.state.mainCity.image}
      />
      <DetailWeather
        wind = {this.state.mainCity.wind}
        overcast = {this.state.mainCity.overcast}
        pressure = {this.state.mainCity.pressure}
        humidity = {this.state.mainCity.humidity}
        coordinatesLat = {this.state.mainCity.coordinatesLat}
        coordinatesLon = {this.state.mainCity.coordinatesLon}
      />
      {this.state.cities.map((city, id) => (<FavoritesCities
        id={id + 1}
        key={id}
        cityData={this.state.cities[id]}
        getWeather={this.getWeather}
        deleteCity={this.deleteCity}
      />
      ))}
    </div>
    );
  }
}

export default App;
