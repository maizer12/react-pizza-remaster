import React from 'react'
import './Search.scss'
import icon from '../../assets/img/search.svg'
function Search({ setSearch, search }) {
	return (
		<label className='search'>
			<input
				value={search}
				onChange={e => setSearch(e.target.value)}
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
