import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as useReduxDispatch } from 'react-redux'

import rootReducer from 'src/redux/reducers'

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDispatch = () => useReduxDispatch<AppDispatch>()
