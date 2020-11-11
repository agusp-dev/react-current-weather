import React, { Fragment, useState } from 'react'
import { Header, Form, WeatherCard, Error } from './components'
import { weather } from './services'

function App() {

	const [searchData, saveSearchData] = useState({
		city: '',
		country: ''
	})

	const [weatherData, setWeatherData] = useState({})
	const [error, showError] = useState('')

	const onHandleSearchClick = async () => {
		const { city, country } = searchData
		const data = await weather.getWeatherData(city, country)
		checkWeatherData(data)
	}

	const checkWeatherData = data => {
		if (data && data.cod === 200) {
			showError('')
			return setWeatherData(data)
		}
		showError(data.message)
	}

  return (
    <Fragment>
			<Header title='Current Weather'/>
			<div className='contenedor-form'>
				<div className='container'>
					<div className='row'>
						<div className='col m6 s12'>
							{error && (
								<Error message={ error }/>
							)}
							<Form 
								searchData={ searchData }
								saveSearchData={ saveSearchData }
								startSearch={ onHandleSearchClick }
								showError={ showError }/>
						</div>
						<div className='col m6 s12'>
							{weatherData && Object.keys(weatherData).length > 0 && (
								<WeatherCard weather={ weatherData }/>
							)}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
  );
}

export default App;
