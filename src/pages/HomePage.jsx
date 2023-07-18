import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import qs from 'qs'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Card from '../components/Card'
import Load from '../components/Card/Load'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { setCategories, setSort } from '../store/slices/filterSlice'
function HomePage({ search }) {
	const userLoc = useLocation()
	const firstOpen = useRef(false)
	const navigation = useNavigate()
	const dispatch = useDispatch()
	const { sort, categories } = useSelector(state => state.filterSlice)
	const [cardItems, setCardItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [path, setPath] = useState('')
	useEffect(() => {
		if (firstOpen.current) {
			const checkCategory = categories ? { category: categories } : ''
			const link = qs.stringify({
				search,
				sortBy: sort,
				order: 'asc',
				...checkCategory,
			})
			setPath(link)
			navigation('?' + link)
		}
		firstOpen.current = true
	}, [categories, sort, search])

	const getDate = obj => {
		console.log(obj)
		dispatch(setSort(obj.sortBy))
		dispatch(setCategories(Number(obj.category)))
	}

	useEffect(() => {
		const res = userLoc.search.substring(1)
		if (res) {
			getDate(qs.parse(res))
		}
		setLoading(true)
		axios
			.get('https://64a45f55c3b509573b5772f9.mockapi.io/pizza?' + path)
			.then(data => {
				setCardItems(data.data)
				setLoading(false)
			})
			.catch(e => console.log(e))
	}, [path])
	return (
		<div className='container home'>
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
