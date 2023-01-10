import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = ({ onMassDelete, onSave, headerTitle }) => {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<header>
			<h4>{headerTitle}</h4>
			{location.pathname === '/add' ? (
				<div className='page-buttons'>
					<button
						type='submit'
						className='cancel-btn'
						onClick={(e) => {
							e.preventDefault()
							navigate('/')
						}}>
						Cancel
					</button>
					<Link to='/'>
						<button className='save-btn' onClick={onSave}>
							SAVE
						</button>
					</Link>
				</div>
			) : (
				<div className='page-buttons'>
					<Link to='/add'>
						<button className='add-btn'>ADD</button>
					</Link>
					<button
						className='mass-delete-btn'
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
