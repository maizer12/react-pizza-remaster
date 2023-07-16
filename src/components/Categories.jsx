function Categories({ open, change }) {
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
