import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ onMassDelete, onSave, headerTitle }) => {
	const location = useLocation()

	return (
		<header>
			<h4>{headerTitle}</h4>
			{location.pathname === '/add' ? (
				<div className='page-buttons'>
					<Link to='/'>
						<button onClick={onSave}>Save</button>
					</Link>
					<button>Cancel</button>
				</div>
			) : (
				<div className='page-buttons'>
					<button onClick={onMassDelete}>Mass Delete</button>
					<Link to='/add'>
						<button>Add</button>
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
