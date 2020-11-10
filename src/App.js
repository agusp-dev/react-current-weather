import React, { Fragment, useState, useEffect } from 'react'
import { Header, Form } from './components'
import { weather } from './services'

function App() {

	const [searchData, saveSearchData] = useState({
		city: '',
		country: ''
	})

	// const [search, startSearch] = useState(false)
	// useEffect(() => {
	// 	console.log('searching...', searchData)
	// }, [search])

	const onHandleSearchClick = async () => {
		const { city, country } = searchData
		const data = await weather.getWeatherData(city, country)
		console.log(data)
	}

  return (
    <Fragment>
			<Header title='Current Weather'/>

			<div className='contenedor-form'>
				<div className='container'>
					<div className='row'>
						<div className='col m6 s12'>
							<Form 
								searchData={ searchData }
								saveSearchData={ saveSearchData }
								startSearch={ onHandleSearchClick }/>
						</div>
						<div className='col m6 s12'>
							2
						</div>
					</div>
				</div>
			</div>
		</Fragment>
  );
}

export default App;
