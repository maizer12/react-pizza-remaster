import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../store/slices/filterSlice'

function Categories() {
	const open = useSelector(state => state.filterSlice.categories)
	const dispatch = useDispatch()
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	const change = i => {
		dispatch(setCategories(i))
	}
	return (
		<div className='categories'>
			<ul>
				{categories.map((e, i) => (
					<li
						key={e}
						onClick={() => change(i)}
						className={open === i ? 'active' : ''}
					>
						{e}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
