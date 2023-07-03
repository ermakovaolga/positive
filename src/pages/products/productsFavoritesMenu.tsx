import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { Product } from 'src/types/productTypes'
import { routing } from 'src/boot/routing'
import { mainFont, mainTextColor, secondaryColor, secondaryTextColor } from 'src/constants/stylesConstants'

const StyledAllFavoriteContainer = styled.div`
  display: grid;
  position: absolute;
  right: 0;
  top: 30px;
  background: ${secondaryColor};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
  width: 200px;
  z-index: 999;
`
const StyledAllFavoriteText = styled.div`
  color: ${mainTextColor};
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0;
  &:hover {
    color: ${secondaryTextColor};
  }
`
function ProductsFavoritesMenu({ allFavorites }: { allFavorites: Product[] }) {
  return (
    <StyledAllFavoriteContainer>
      {allFavorites?.map((favItem) => (
        <Link key={favItem.id} to={routing.product.generatePath({ id: String(favItem.id) })}>
          <StyledAllFavoriteText>{favItem.title}</StyledAllFavoriteText>
        </Link>
      ))}
    </StyledAllFavoriteContainer>
  )
}

export default ProductsFavoritesMenu
