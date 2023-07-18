import React, { useCallback, useContext, useState } from 'react'
import './Search.scss'
import icon from '../../assets/img/search.svg'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'
function Search() {
	const [value, setValue] = useState('')
	const { setSearch } = useContext(SearchContext)
	const checkTime = useCallback(
		debounce(value => {
			setSearch(value)
		}, 250),
		[]
	)
	const change = e => {
		setValue(e.target.value)
		checkTime(e.target.value)
	}
	return (
		<label className='search'>
			<input
				value={value}
				onChange={change}
				type='text'
				placeholder='Пошук...'
				className='search__input'
			/>
			<button className='search__btn'>
				<img src={icon} alt='search' />
			</button>
		</label>
	)
}

export default Search
