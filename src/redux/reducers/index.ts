import currentFilters from './filersReducers'
import currentProducts from './productsReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  currentProducts,
  currentFilters,
})

export default rootReducer
