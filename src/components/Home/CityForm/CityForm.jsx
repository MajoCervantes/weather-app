import React from "react"

const CityForm = ({
	handleCityName,
	handleDataApi,
	cityName,
}) => {
	return (
		<div className='m-auto text-center mt-10'>
			<form
				action=''
				onSubmit={(e) => handleDataApi(e)}>
				<input
					className='p-2 outline-none'
					type='text'
					value={cityName}
					onChange={({ target }) =>
						handleCityName(target)
					}
				/>
				<button className='p-2 ml-2 bg-black text-white hover:bg-gold hover:text-black rounded-lg'>
					Search
				</button>
			</form>
		</div>
	)
}

export default CityForm
