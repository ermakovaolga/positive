import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import {
  greenTextColor,
  mainFont,
  mainTextColor,
  secondaryColor,
  secondaryTextColor,
  thirdColor,
} from 'src/constants/stylesConstants'
import { Product } from 'src/types/productTypes'
import { routing } from 'src/boot/routing'
import { setFavorites } from 'src/redux/product/productActionDispatchers'
import { useAction } from 'src/hooks/useActions'

import favoritesIcon from 'src/theme/icons/star_black.svg'
import likedIcon from 'src/theme/icons/star.svg'
import simpleIcon from 'src/theme/icons/compare.svg'

const StyledProductContainer = styled.div`
  display: grid;
  border: 1px solid ${thirdColor};
  padding: 28px 17px;
`
const StyledProductTitle = styled.div`
  color: ${mainTextColor};
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`
const StyledProductBrand = styled.div`
  color: ${secondaryTextColor};
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  line-height: 20px;
`
const StyledProductImage = styled.img`
  height: 100%;
  margin-right: 10px;
`
const StyledProductImageContainer = styled.div`
  height: 10em;
  flex: 1;
  margin-bottom: 30px;
`
const StyledProductPrice = styled.div`
  color: ${greenTextColor};
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`
const StyledViewDetailsBtn = styled.div`
  margin: 13px 20px;
  border-radius: 100px;
  background: ${secondaryColor};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  padding: 10px;
  color: ${mainTextColor};
  text-align: center;
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  }
`
const StyledFavoriteIconSelected = styled.img`
  cursor: pointer;
  &:hover {
    filter: invert(92%) sepia(19%) saturate(3126%) hue-rotate(0deg) brightness(105%) contrast(105%);
  }
`
const StyledIconSelected = styled.img`
  cursor: pointer;
  filter: invert(92%) sepia(19%) saturate(3126%) hue-rotate(0deg) brightness(105%) contrast(105%);
`
const StyledProductImagesContainer = styled.div`
  display: flex;
`
const StyledProductIconsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
`
const StyledProductSimpleIcon = styled.img`
  margin-bottom: 17px;
`
function ProductInfo({ product, allFavorites }: { product: Product; allFavorites: Product[] }) {
  const setFavoritesItems = useAction(setFavorites)

  const onFavoriteClickHandler = () => {
    if (allFavorites?.includes(product)) {
      setFavoritesItems(
        allFavorites.filter(function (item) {
          return item !== product
        }),
      )
    } else {
      setFavoritesItems(allFavorites ? [...allFavorites, product] : [product])
    }
  }
  return (
    <StyledProductContainer>
      <StyledProductImagesContainer>
        <StyledProductImageContainer>
          <StyledProductImage src={product.images[0]} />
        </StyledProductImageContainer>
        <StyledProductIconsContainer>
          <StyledProductSimpleIcon src={simpleIcon} />
          {(!allFavorites || allFavorites?.findIndex((itm) => itm.id === product.id) < 0) && (
            <StyledFavoriteIconSelected src={likedIcon} onClick={onFavoriteClickHandler} />
          )}
          {allFavorites?.findIndex((itm) => itm.id === product.id) >= 0 && (
            <StyledIconSelected src={favoritesIcon} onClick={onFavoriteClickHandler} />
          )}
        </StyledProductIconsContainer>
      </StyledProductImagesContainer>
      <StyledProductTitle>{product.title}</StyledProductTitle>
      <StyledProductBrand>{product.brand}</StyledProductBrand>
      <StyledProductPrice>{product.price} руб.</StyledProductPrice>
      <Link to={routing.product.generatePath({ id: String(product.id) })}>
        <StyledViewDetailsBtn>Подробнее</StyledViewDetailsBtn>
      </Link>
    </StyledProductContainer>
  )
}

export default ProductInfo
