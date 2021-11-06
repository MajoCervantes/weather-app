import React from "react"
import { Link } from "react-router-dom"

const CityWeather = ({ name, temp, icon }) => {
	//Cambiar temperatura en kelvin a celsius
	const tempNumber = parseFloat(temp)
	const tempToCelsius = Math.round(
		tempNumber - 273.15
	)

	return (
		<>
			<div className='w-4/5 bg-black text-gold md:w-3/12 m-auto mt-10 p-4 flex flex-col'>
				<div className='flex justify-end'>
					<img
						src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
						alt={icon}></img>
				</div>
				<div className='flex flex-col items-start'>
					<p className='text-6xl font-bold'>
						{tempToCelsius}°
					</p>
					<h1>{name}</h1>
				</div>
			</div>
			<div className='m-auto text-center mt-5'>
				<Link
					className='p-2 ml-2 bg-grey text-white hover:bg-gold hover:text-black rounded-lg'
					to={`/info/${name}`}>
					More
				</Link>
			</div>
		</>
	)
}

export default CityWeather
