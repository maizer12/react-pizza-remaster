import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Card from '../components/Card'
import Load from '../components/Card/Load'
import axios from 'axios'
import { useEffect, useState } from 'react'
function HomePage() {
	const [cardItems, setCardItems] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		axios('https://64a45f55c3b509573b5772f9.mockapi.io/pizza').then(data => {
			setCardItems(data.data)
			setLoading(false)
		})
	}, [])
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{loading
					? [...new Array(6)].map((e, i) => <Load key={i} />)
					: cardItems.map(e => <Card key={e.id} {...e} />)}
			</div>
		</div>
	)
}

export default HomePage
