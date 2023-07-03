import { Dispatch } from '@reduxjs/toolkit'

import { PageParams, Product } from 'src/types/productTypes'
import allActions from 'src/redux/actions'

import api from '../../api'
import { RequestError } from '../../api/httpClient'

export const fetchAllProducts = (onError: (error: RequestError) => void) => (dispatch: Dispatch) => {
  dispatch(allActions.produtsActions.setLoading(true))
  api.products
    .getProductsList()
    .then(({ products }) => dispatch(allActions.produtsActions.setProducts(products)))
    .catch((error: RequestError) => {
      onError?.(error)
    })
    .finally(() => dispatch(allActions.produtsActions.setLoading(false)))
}

export const setProducts = (products: Product[]) => (dispatch: Dispatch) => {
  dispatch(allActions.produtsActions.setProducts(products))
}

export const setFavorites = (products: Product[]) => (dispatch: Dispatch) => {
  dispatch(allActions.produtsActions.setFavorites(products))
}

export const setParams = (params: PageParams) => (dispatch: Dispatch) => {
  dispatch(allActions.filtersActions.setPageParams(params))
}

export const setSort = (sort: string) => (dispatch: Dispatch) => {
  dispatch(allActions.filtersActions.setSort(sort))
}
