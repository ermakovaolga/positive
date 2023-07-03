import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import { getErrorMessage } from 'src/utils/errors'
import { fetchAllProducts, setFavorites } from 'src/redux/product/productActionDispatchers'
import { getAllFavorites, getAllProducts, getLoading, getProductsByParams } from 'src/redux/product/productSelectors'
import { PageContainer } from 'src/containers/baseLayout'
import { Product } from 'src/types/productTypes'
import { RequestError } from 'src/api/httpClient'
import useSnackbarNotifications from 'src/hooks/useSnackbarNotifications'

import ProductInfo from './productInfo'
import ProductsCounters from './productsCounters'
import ProductsFilters from './productsFilters'
import Loader from './loader'
import { useAction } from 'src/hooks/useActions'

const StyledProductsContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  display: grid;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

function ProductsList() {
  const { onDisplayErrorNotification } = useSnackbarNotifications()
  const onErrorHandler = useCallback(
    (error: RequestError) => {
      onDisplayErrorNotification(getErrorMessage(error))
    },
    [onDisplayErrorNotification],
  )
  const onFetchProducts = useAction(fetchAllProducts)

  const allProducts = useSelector(getAllProducts)
  const filteredProducts = useSelector(getProductsByParams)
  const allFavorites = useSelector(getAllFavorites)
  const loading = useSelector(getLoading)

  const setFavoritesItems = useAction(setFavorites)

  useEffect(
    () => {
      const updatedFavorites: Product[] = []
      allFavorites?.forEach((favorite) => {
        const newItem = allProducts.find((i) => i.id === favorite.id)
        if (newItem) {
          updatedFavorites.push(newItem)
        }
      })
      setFavoritesItems(updatedFavorites)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allProducts, setFavoritesItems],
  )

  useEffect(() => {
    onFetchProducts(onErrorHandler)
  }, [onErrorHandler, onFetchProducts])

  const total = allProducts?.length || 0
  return (
    <PageContainer>
      {!!loading && <Loader />}
      <ProductsCounters allProductsLength={total} allFavorites={allFavorites} />
      <ProductsFilters total={total} />
      <StyledProductsContainer>
        {filteredProducts?.map((item: Product) => (
          <ProductInfo product={item} key={item.id} allFavorites={allFavorites} />
        ))}
      </StyledProductsContainer>
    </PageContainer>
  )
}

export default ProductsList
