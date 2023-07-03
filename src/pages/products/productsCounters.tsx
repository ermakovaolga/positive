import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { greenTextColor, mainFont, mainTextColor } from 'src/constants/stylesConstants'
import { Product } from 'src/types/productTypes'
import favoritesIcon from 'src/theme/icons/star_black.svg'

import ProductsFavoritesMenu from './productsFavoritesMenu'

const StyledProductsCounter = styled.div`
  color: ${mainTextColor};
  font-size: 16px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  flex: 1;
`
const StyledProductsCounterValue = styled.div`
  margin: 0 10px;
  color: ${greenTextColor};
`
const StyledCounterHolder = styled.div`
  display: flex;
  height: 20px;
  position: relative;
`
const StyledFavoriteCounterContainer = styled.div`
  cursor: pointer;
  color: ${mainTextColor};
  display: flex;
  font-size: 16px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`
const StyledFavoriteCounterIcon = styled.img`
  margin-left: 6px;
  filter: invert(92%) sepia(19%) saturate(3126%) hue-rotate(0deg) brightness(105%) contrast(105%);
`
function ProductsCounters({ allProductsLength, allFavorites }: { allProductsLength: number; allFavorites: Product[] }) {
  const [isShowFavorites, setIsShowFavorites] = useState<boolean>(false)
  const openFavofitesHandler = () => {
    setIsShowFavorites(!isShowFavorites)
  }
  const count = allFavorites?.length

  useEffect(() => {
    if (count === 0) {
      setIsShowFavorites(false)
    }
  }, [count])
  return (
    <StyledCounterHolder>
      <StyledProductsCounter>
        Найдено <StyledProductsCounterValue>{allProductsLength}</StyledProductsCounterValue>
      </StyledProductsCounter>
      <StyledFavoriteCounterContainer>
        <div>{count === 0 ? '' : count}</div>
        {!!count && <StyledFavoriteCounterIcon src={favoritesIcon} onClick={openFavofitesHandler} />}
      </StyledFavoriteCounterContainer>
      {!!isShowFavorites && <ProductsFavoritesMenu allFavorites={allFavorites} />}
    </StyledCounterHolder>
  )
}

export default ProductsCounters
