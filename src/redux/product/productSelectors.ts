import { pageLimit } from 'src/constants/commonConstants'
import { PageParams, Product, FiltersState, ProductsState } from 'src/types/productTypes'

export const getProductsState = (state: ProductsState) => state.currentProducts

export const getFiltersState = (state: FiltersState) => state.currentFilters

export const getAllProducts = (state: ProductsState): Product[] => getProductsState(state).products

const initParams = { start: 0, end: pageLimit, sort: {} }

export const getPageParams = (state: FiltersState): PageParams => getFiltersState(state)?.params || initParams

export const getProductsByParams = (state: ProductsState & FiltersState): Product[] => {
  const { start, end, sort } = getFiltersState(state)?.params || initParams
  const cloneProducts = getProductsState(state).products ? [...getProductsState(state).products] : []
  const sortedProducts = cloneProducts?.sort((item1: Product, item2: Product) =>
    sort.direction === 'ASC' ? item1?.[sort.value] - item2?.[sort.value] : item2?.[sort.value] - item1?.[sort.value],
  )
  return sortedProducts.filter((item, index) => {
    if (index < end && index >= start) {
      return item
    }
  })
}

export const getAllFavorites = (state: ProductsState): Product[] => getProductsState(state).favorites

export const getLoading = (state: ProductsState): boolean => getProductsState(state).loading
