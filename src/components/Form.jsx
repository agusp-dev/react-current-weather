import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ searchData, saveSearchData, startSearch }) => {

	const [error, showError] = useState(false)
	const { city, country } = searchData

	const handleSearch = e => {
		saveSearchData({
			...searchData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

		//check data
		if (city.trim().length === 0 || 
			country.trim().length === 0) return showError(true)
		
		//data ok
		showError(false)
		startSearch()
	}

	return (
		<form onSubmit={ e => handleSubmit(e) }>
			{error && (
				<p className='red darken-4 error'>Please, complete all fields!</p>
			)}
			<div className='input-field col s12'>
				<input 
					type='text'
					name='city'
					id='city'
					value={ city }
					onChange={ handleSearch }/>
				<label htmlFor='city'>City</label>
			</div>
			<div className='input-field col s12'>
				<select 
					name='country'
					id='country'
					value={ country }
					onChange={ handleSearch }
				>
					<option value=''>-- Select Country --</option>
					<option value="US">Estados Unidos</option>
					<option value="MX">México</option>
					<option value="AR">Argentina</option>
					<option value="CO">Colombia</option>
					<option value="CR">Costa Rica</option>
					<option value="ES">España</option>
					<option value="PE">Perú</option>
				</select>
				<label htmlFor='country'>Country</label>
			</div>
			<div className='input-field col s12'>
				<input 
					className='waves-effect waves-light btn-large btn-block yellow accent-4'
					type='submit'
					value='Search'/>
			</div>
		</form>
	)
}

Form.propTypes = {
	searchData: PropTypes.object.isRequired,
	saveSearchData: PropTypes.func.isRequired,
	startSearch: PropTypes.func.isRequired
}

export { Form }