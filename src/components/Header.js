import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ onMassDelete, onSave, headerTitle }) => {
	const location = useLocation()

	return (
		<header>
			<h4>{headerTitle}</h4>
			{location.pathname === '/add' ? (
				<div className='page-buttons'>
					<button>Cancel</button>
					<Link to='/'>
						<button className='save' onClick={onSave}>
							SAVE
						</button>
					</Link>
				</div>
			) : (
				<div className='page-buttons'>
					<Link to='/add'>
						<button>ADD</button>
					</Link>
					<button
						className='mass-delete'
						id='delete-product-btn'
						onClick={onMassDelete}>
						MASS DELETE
					</button>
				</div>
			)}
		</header>
	)
}

export default Header
