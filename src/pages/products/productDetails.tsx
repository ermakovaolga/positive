import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import { PageContainer } from 'src/containers/baseLayout'
import { Product, ProductsState } from 'src/types/productTypes'
import {
  favoriteColor,
  greenTextColor,
  mainFont,
  mainTextColor,
  secondaryTextColor,
  thirdColor,
} from 'src/constants/stylesConstants'

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
  margin: 0 10px;
`
const StyledProductImageContainer = styled.div`
  height: 5em;
  display: flex;
  max-width: 100$;
  margin-bottom: 30px;
  justify-content: start;
  overflow-x: auto;
`
const StyledProductPrice = styled.div`
  color: ${greenTextColor};
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`
const StyledProductDescription = styled.div`
  color: ${secondaryTextColor};
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  line-height: 20px;
  margin: 20px 0;
`
const StyledProductDiscount = styled.div`
  color: ${mainTextColor};
  font-size: 12px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  padding: 0 8px;
  border-radius: 5px;
  background-color: ${thirdColor};
  margin: 0 8px;
`

const StyledProductImagesContainer = styled.div`
  display: grid;
  width: 100%;
`
const StyledPriceContainer = styled.div`
  display: flex;
  flex: 1;
`
const StyledActiveProductImageContainer = styled.div`
  margin: 10px;
  height: 20em;
  max-width: 100%;
`

const StyledActiveProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`
const StyledTag = styled.div`
  color: ${secondaryTextColor};
  font-size: 13px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 0 8px;
  border-radius: 5px;
  background-color: ${favoriteColor};
`
const StyledProductTitleContainer = styled.div`
  display: grid;
  flex: 1;
`
const StyledProductCategoryContainer = styled.div`
  display: grid;
  text-align: right;
`

const StyledProductMainInfoContainer = styled.div`
  display: flex;
`
function ProductDetails() {
  const path = window.location.pathname
  const requestId = path.substring(1, path.length)
  const allProducts = useSelector((state: ProductsState) => state.currentProducts?.products)

  const product: Product | undefined = allProducts?.find((item) => item.id.toString() === requestId)

  const [activeImage, setActiveImage] = useState<string>(product?.images?.[0] || '')

  const onImageClickHandler = (src: string) => {
    setActiveImage(src)
  }
  return (
    <PageContainer>
      <StyledProductContainer>
        <StyledProductImagesContainer>
          <StyledActiveProductImageContainer>
            <StyledActiveProductImage src={activeImage} key={activeImage} />
          </StyledActiveProductImageContainer>
          <StyledProductImageContainer>
            {product?.images.map((image) => (
              <StyledProductImage
                src={image}
                key={image}
                onClick={() => onImageClickHandler(image)}
                style={{
                  border: activeImage === image ? `2px solid ${favoriteColor}` : '',
                  borderImageOutset: activeImage === image ? '2px' : '',
                }}
              />
            ))}
          </StyledProductImageContainer>
        </StyledProductImagesContainer>
        <StyledProductMainInfoContainer>
          <StyledProductTitleContainer>
            <StyledProductTitle>{product?.title}</StyledProductTitle>
            <StyledProductBrand>{product?.brand}</StyledProductBrand>
          </StyledProductTitleContainer>

          <StyledProductCategoryContainer>
            <StyledProductTitle>Оценка: {product?.rating}</StyledProductTitle>
            <StyledTag>{product?.category}</StyledTag>
          </StyledProductCategoryContainer>
        </StyledProductMainInfoContainer>
        <StyledProductDescription>{product?.description}</StyledProductDescription>
        <StyledProductMainInfoContainer>
          <StyledPriceContainer>
            <StyledProductPrice>{product?.price} руб. </StyledProductPrice>
            <StyledProductDiscount>Скидка {product?.discountPercentage}%</StyledProductDiscount>
          </StyledPriceContainer>
          <StyledProductBrand>Количество: {product?.stock}</StyledProductBrand>
        </StyledProductMainInfoContainer>
      </StyledProductContainer>
    </PageContainer>
  )
}

export default ProductDetails
