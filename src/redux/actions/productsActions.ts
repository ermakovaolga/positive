import { Product } from 'src/types/productTypes'

const setProducts = (products: Product[]) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  }
}
const setLoading = (loading: boolean) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  }
}
const setFavorites = (favorites: Product[]) => {
  return {
    type: 'SET_FAVORITES',
    payload: favorites,
  }
}
export default {
  setProducts,
  setFavorites,
  setLoading,
}
