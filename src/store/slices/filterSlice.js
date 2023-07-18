import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	sort: { name: 'популярности', link: 'rating' },
	categories: 0,
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSort: (state, action) => {
			state.sort = action.payload
		},
		setCategories: (state, action) => {
			state.categories = action.payload
		},
	},
})

export const { setSort, setCategories } = filterSlice.actions
export default filterSlice.reducer
