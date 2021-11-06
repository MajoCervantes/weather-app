import React, { useState } from "react"

//Components
import CityForm from "../../components/Home/CityForm/CityForm"
import CityWeather from "../../components/Home/CityWeather/CityWeather"
import Loader from "../../components/Loader/Loader"
import NotFound from "../../components/NotFound/NotFound"

const Home = () => {
	const [weatherData, setWeatherData] =
		useState(null)
	const [cityName, setCityName] = useState("")
	const [loader, setLoader] = useState(false)
	const [view, setView] = useState(false)

	const handleCityName = ({ value }) => {
		setCityName(value)
	}

	const handleDataApi = async (e) => {
		e.preventDefault()
		const key = `e1c652e014cb934943f2771b6f55628e`
		setLoader(true)
		setView(false)

		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
			)
			const result = await response.json()
			setWeatherData(result)
			setLoader(false)
			setCityName("")
			setView(true)
			console.log(result)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			{weatherData?.message ? (
				<NotFound />
			) : !view ? (
				<CityForm
					handleCityName={handleCityName}
					handleDataApi={handleDataApi}
					cityName={cityName}
				/>
			) : weatherData && view ? (
				<CityWeather
					name={weatherData.name}
					icon={weatherData.weather[0].icon}
					temp={weatherData.main.temp}
				/>
			) : null}
			{/* {!view && (
				<CityForm
					handleCityName={handleCityName}
					handleDataApi={handleDataApi}
					cityName={cityName}
				/>
			)}
			{weatherData && view && (
				<CityWeather
					name={weatherData.name}
					icon={weatherData.weather[0].icon}
					temp={weatherData.main.temp}
				/>
			)} */}
			{loader && <Loader />}
		</>
	)
}

export default Home
