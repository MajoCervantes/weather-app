import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

//Styles
import "./AllCityInfo.styles.css"

//Components
import Loader from "../../components/Loader/Loader"

const AllCityInfo = () => {
	const { name } = useParams()
	const [weatherData, setWeatherData] =
		useState(null)
	const [loader, setLoader] = useState(false)

	useEffect(() => {
		const handleDataApi = async () => {
			const key = `e1c652e014cb934943f2771b6f55628e`
			setLoader(true)
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`
			)
			const result = await response.json()
			setWeatherData(result)
			setLoader(false)
		}
		handleDataApi()
	}, [name])

	return (
		<>
			{weatherData &&
			weatherData.weather[0].description.includes(
				"clear sky"
			) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://www.uniradioserver.com/media/news_thumbs/201803/20180310111346_61.jpeg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"clouds"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://upload.wikimedia.org/wikipedia/commons/5/50/Cielo_Nublado.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"rain"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://st.depositphotos.com/1006753/5080/i/600/depositphotos_50807889-stock-photo-city-view-through-a-window.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"drizzle"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://st.depositphotos.com/1006753/5080/i/600/depositphotos_50807889-stock-photo-city-view-through-a-window.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"sleet"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://image.shutterstock.com/image-photo/winter-background-snow-frost-free-260nw-1166024464.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"snow"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://image.shutterstock.com/image-photo/winter-background-snow-frost-free-260nw-1166024464.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"thunderstorm"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://services.meteored.com/img/article/destellos-azules-hallazgo-en-las-nubes-288651-2_1024.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://upload.wikimedia.org/wikipedia/commons/2/27/Una_ma%C3%B1ana_de_neblina_los_frios_pueden_llegar_hasta_los_10_C%C2%B0.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			)}
			{weatherData && !loader ? (
				<>
					<div className='w-4/5 flex-wrap md:flex-nowrap allCity-container md:w-1/2 m-auto text-white flex justify-between items-center font-bold mt-40 p-4'>
						<img
							className=' w-1/5'
							src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
							alt={weatherData.name}></img>
						<h1>
							Capital: <br /> {weatherData.name}
						</h1>
						<p>
							Sky: <br />
							{weatherData.weather[0].description}
						</p>

						<p>
							Humidity: <br />
							{weatherData.main.humidity}%
						</p>
						<p>
							Wind Speed: <br />
							{weatherData.wind.speed}
							km/h
						</p>
					</div>
					<div className='text-center mt-10'>
						<Link
							className='p-2 ml-2 bg-grey text-white hover:bg-gold hover:text-black rounded-lg'
							to='/'>
							Home
						</Link>
					</div>
				</>
			) : (
				<Loader />
			)}
		</>
	)
}

export default AllCityInfo
