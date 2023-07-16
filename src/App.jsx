import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

export const SearchContext = createContext()

function App() {
	const [search, setSearch] = useState('')
	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			<div className='wrapper'>
				<Header search={search} setSearch={setSearch} />
				<div className='content'>
					<Routes>
						<Route path='/' element={<HomePage search={search} />} />
						<Route path='/cart' element={<CartPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</SearchContext.Provider>
	)
}

export default App
