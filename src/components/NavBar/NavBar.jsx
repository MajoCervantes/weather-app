import React from "react"
import { Link } from "react-router-dom"

//Styles
import "./NavBar.styles.css"

const NavBar = () => {
	return (
		<div className='bg-black text-center text-gold text-4xl p-6 nav-bar rounded-lg'>
			<Link to='/'>City Weather Info</Link>
		</div>
	)
}

export default NavBar
