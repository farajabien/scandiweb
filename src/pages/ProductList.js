import React, { useEffect, useState } from 'react'
import { getProducts, massDeleteProducts } from '../api'
import Header from '../components/Header'

function ProductList() {
	const [products, setProducts] = useState([])
	const [selectedSkus, setSelectedSkus] = useState([])

	useEffect(() => {
		getProducts()
			.then((data) => {
				setProducts(data)
				console.log(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	const handleMassDelete = () => {
		massDeleteProducts(selectedSkus).then(() => {
			getProducts()
				.then((data) => {
					setProducts(data)
				})
				.catch((error) => {
					console.error(error)
				})
		})
		console.log(`Deleting products with IDs: ${selectedSkus}`)
	}

	return (
		<div>
			<Header onMassDelete={handleMassDelete} headerTitle='Product List' />

			<div className='product-list-container'>
				{products.length === 0 ? (
					<p>No products</p>
				) : (
					products.map((product) => (
						<div className='product-list-item' key={product.sku}>
							<input
								type='checkbox'
								className='delete-checkbox'
								onChange={(e) => {
									if (e.target.checked) {
										setSelectedSkus((prev) => [...prev, product.sku])
									}
								}}
							/>

							<div className='product-list-item-info'>
								<p>{product.sku}</p>
								<p>{product.name}</p>
								<p>{product.price} $</p>
								{product.type === 'dvd' && <p>Size: {product.size} MB</p>}
								{product.type === 'book' && <p>Weight: {product.weight} KG</p>}
								{product.type === 'furniture' && (
									<p>Dimension: {product.dimensions}</p>
								)}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default ProductList
