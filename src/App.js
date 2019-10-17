import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import GeolocationWeather from "./components/geoWeather/geolocationWeather.js";


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
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row firstRow">
              <div className="col-sm-3 weatherHere">Погода Здесь</div>
              <div className="col-sm-6 updateGeo">Обновить геолокацию</div>
            </div>
            <div className="row secondRow">
              <div className="col-sm-5 weatherHere">
              <Form weatherMethod={this.defaultWeather} />
              </div>
              <div className="col-sm-5 updateGeo"><GeolocationWeather /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
