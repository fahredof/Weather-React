import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";

class App extends React.Component {

  state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    let city = event.target.elements.city.value;

    if (city) {
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
        error: "Введите название города"
      });
    }
  }

  render() {
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp = {this.state.temp}
          city = {this.state.city}
          country = {this.state.country}
          sunrise = {this.state.sunrise}
          sunset = {this.state.sunset}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
