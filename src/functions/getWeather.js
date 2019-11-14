

async function getWeatherByCity (api_key, city) {
  const response =
	await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
	let dataByCity = await response.json();
	return dataByCity;
}

async function getWeatherByCoordinates (api_key, latitude, longitude) {
  const response =
  await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`);
  let dataByCoor = await response.json();
  return dataByCoor;
}

export {
  getWeatherByCity,
  getWeatherByCoordinates
}
