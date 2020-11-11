import React from 'react'
import PropTypes from 'prop-types'

const WeatherCard = ({ weather }) => {

	const KELVIN = 273.15
	const { name, main } = weather

	return (
		<div className='card-panel white col s12'>
			<div className='black-text'>
				<h2>El clima de {name} es:</h2>
				<p className='temperatura'>
					{ parseFloat( main.temp - KELVIN, 10 ).toFixed(2) }
					<span>&#x2103;</span>
				</p>
				<p>Max. Temp: 
					{ parseFloat( main.temp_max - KELVIN, 10 ).toFixed(2) }
					<span>&#x2103;</span>
				</p>
				<p>Min. Temp: 
					{ parseFloat( main.temp_min - KELVIN, 10 ).toFixed(2) }
					<span>&#x2103;</span>
				</p>
			</div>
		</div>
	)
}

WeatherCard.propTypes = {
	weather: PropTypes.object.isRequired
}

export { WeatherCard }