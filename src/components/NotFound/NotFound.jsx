import React from "react"

const NotFound = () => {
	const reload = () => {
		window.location.replace("")
	}
	return (
		<>
			<div className='text-center mt-40 bg-black p-4 w-2/5 m-auto'>
				<h1 className='text-4xl text-red'>
					City Not Found
				</h1>
			</div>
			<div className='text-center mt-7'>
				<button
					className='p-2 mt-7 ml-2 bg-grey text-white hover:bg-gold hover:text-black rounded-lg'
					onClick={() => reload()}>
					Back
				</button>
			</div>
		</>
	)
}

export default NotFound
