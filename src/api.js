export const getProducts = async () => {
	const response = await fetch(process.env.REACT_APP_BASE_URL)
	const data = await response.json()

	return data
}

export const massDeleteProducts = async (skus) => {
	const url = `${process.env.REACT_APP_BASE_URL}?skus=${skus.join(',')}`
	const response = await fetch(url, {
		method: 'DELETE',
	})
	const data = await response.json()
	if (data.success) {
		console.log('Deleted successfully!')
	} else {
		console.log('Error deleting products')
	}
}

export const createProduct = async (product) => {
	const response = await fetch(process.env.REACT_APP_BASE_URL, {
		method: 'POST',
		body: JSON.stringify(product),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await response.json()

	return data
}
