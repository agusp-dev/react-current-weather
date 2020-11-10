const API_KEY = '0a6b64b7c202ec74e09d7d4a519fca56'

const getWeatherData = async (city, country) => {
	/**
	//  * api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
	 */
	const url = `https://api.openweathermap.org/data/2.5/weather?q=
		${city},
		${country}&
		appid=${API_KEY}`
	const response = await fetch(url)
	const result = await response.json()
	return result
}

export const weather = {
	getWeatherData
}