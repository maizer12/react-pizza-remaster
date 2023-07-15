import React from 'react'
import ContentLoader from 'react-content-loader'

const Load = props => (
	<ContentLoader
		speed={2}
		width={280}
		height={466}
		viewBox='0 0 280 466'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='136' cy='134' r='127' />
		<rect x='4' y='277' rx='11' ry='11' width='278' height='31' />
		<rect x='0' y='323' rx='10' ry='10' width='278' height='88' />
		<rect x='8' y='429' rx='0' ry='0' width='121' height='25' />
		<rect x='151' y='421' rx='10' ry='10' width='123' height='37' />
		<circle cx='146' cy='144' r='127' />
	</ContentLoader>
)

export default Load
