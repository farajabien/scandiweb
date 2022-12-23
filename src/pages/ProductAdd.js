import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../api'
import Header from '../components/Header'

import './Products.css'

function ProductAdd() {
	const [product, setProduct] = useState({})
	const navigate = useNavigate()

	useEffect(() => {
		setProduct({})
	}, [])

	const handleSave = () => {
		if (product.dimensions) {
			const productToAdd = {
				...product,
				dimensions: `${product.dimensions.height}X${product.dimensions.width}X${product.dimensions.length}`,
			}
			createProduct(productToAdd).then(() => {
				navigate('/')
			})
		} else {
			createProduct(product).then(() => {
				navigate('/')
			})
		}
	}

	const handleTypeChange = (event) => {
		setProduct({ ...product, type: event.target.value })
	}
	return (
		<div>
			<Header onSave={handleSave} headerTitle='Product Add' />
			<form id='product_form'>
				<label>
					Sku:
					<input
						id='sku'
						type='number'
						value={product.sku}
						onChange={(event) =>
							setProduct({ ...product, sku: event.target.value })
						}
					/>
				</label>
				<label>
					Name:
					<input
						id='name'
						type='text'
						value={product.name}
						onChange={(event) =>
							setProduct({ ...product, name: event.target.value })
						}
					/>
				</label>
				<label>
					Price:
					<input
						id='name'
						type='number'
						value={product.price}
						onChange={(event) =>
							setProduct({ ...product, price: event.target.value })
						}
					/>
				</label>

				<label>
					Type:
					<select id='productType' onChange={handleTypeChange}>
						<option value=''></option>
						<option value='dvd'>DVD</option>
						<option value='book'>Book</option>
						<option value='furniture'>Furniture</option>
					</select>
				</label>
				{product.type === 'dvd' && (
					<label>
						Size:
						<input
							id='size'
							type='number'
							value={product.size}
							onChange={(event) =>
								setProduct({ ...product, size: event.target.value })
							}
						/>
						<strong>Please, provide size in MB</strong>
					</label>
				)}
				{product.type === 'book' && (
					<label>
						Weight :
						<input
							id='book'
							type='number'
							value={product.size}
							onChange={(event) =>
								setProduct({ ...product, weight: event.target.value })
							}
						/>
						<strong>Please, provide weight in KG</strong>
					</label>
				)}
				{product.type === 'furniture' && (
					<>
						<label>
							Height :
							<input
								id='height'
								type='number'
								value={product.dimensions?.height || ''}
								onChange={(event) =>
									setProduct({
										...product,
										dimensions: {
											...product.dimensions,
											height: event.target.value,
										},
									})
								}
							/>
						</label>

						<label>Width :</label>
						<input
							id='height'
							type='number'
							value={product.dimensions?.width || ''}
							onChange={(event) =>
								setProduct({
									...product,
									dimensions: {
										...product.dimensions,
										width: event.target.value,
									},
								})
							}
						/>

						<label>
							Length :
							<input
								type='number'
								value={product.dimensions?.length || ''}
								onChange={(event) =>
									setProduct({
										...product,
										dimensions: {
											...product.dimensions,
											length: event.target.value,
										},
									})
								}
							/>
						</label>
						<strong>Please, provide dimensions</strong>
					</>
				)}
			</form>
		</div>
	)
}

export default ProductAdd
