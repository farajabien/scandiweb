import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

import ProductAdd from './pages/ProductAdd'
import ProductList from './pages/ProductList'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<ProductList />} />
					<Route path='/add' element={<ProductAdd />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
