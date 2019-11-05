let data;

async function getWeatherByCity (api_key, city) {
  	const response =
  	await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
  	data = await response.json();
  	return data;
}

async function getWeatherByCoordinates (api_key, lat, lon) {
  //TODO
}

export{
  getWeatherByCity,
  getWeatherByCoordinates
}
