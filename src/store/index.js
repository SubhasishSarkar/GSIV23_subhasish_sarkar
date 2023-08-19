import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slice/searchSlice'

const store = configureStore({
    reducer: searchReducer,
})

export default store
