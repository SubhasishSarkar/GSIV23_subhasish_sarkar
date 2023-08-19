import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchQuery: '',
}

export const searchSlice = createSlice({
    name: 'searchQuery',
    initialState,
    reducers: {
        searcheMovie: (state, action) => {
            state.searchQuery = action.payload
        },
    },
})

export const { searcheMovie } = searchSlice.actions

export default searchSlice.reducer
