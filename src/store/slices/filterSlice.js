import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: 132,
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTest: (state, action) => {
			state.test += 1
		},
	},
})

export const { setTest } = filterSlice.actions
export default filterSlice.reducer
