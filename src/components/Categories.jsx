import React, { useState } from 'react'

function Categories() {
	const [active, setActive] = useState(0)
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	return (
		<div className='categories'>
			<ul>
				{categories.map((e, i) => (
					<li
						key={e}
						onClick={() => setActive(i)}
						className={active === i ? 'active' : ''}
					>
						{e}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
