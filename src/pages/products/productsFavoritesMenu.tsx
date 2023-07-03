import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { mainFont, mainTextColor, secondaryColor, secondaryTextColor } from 'src/constants/stylesConstants'
import { Product } from 'src/types/productTypes'
import { routing } from 'src/boot/routing'

import deleteIcon from 'src/theme/icons/cross.svg'
import { useAction } from 'src/hooks/useActions'
import { setFavorites } from 'src/redux/product/productActionDispatchers'

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
const StyledRow = styled.div`
  display: flex;
`
const StyledRowLink = styled(Link)`
  flex: 1;
  text-decoration: none;
`

const StyledRowDeleteIcon = styled.img`
  height: 10px;
  margin: 14px 0;
  cursor: pointer;
`
function ProductsFavoritesMenu({ allFavorites }: { allFavorites: Product[] }) {
  const setFavoritesItems = useAction(setFavorites)

  const onRemoveClickHandler = (product: Product) => {
    setFavoritesItems(
      allFavorites.filter(function (item) {
        return item !== product
      }),
    )
  }

  return (
    <StyledAllFavoriteContainer>
      {allFavorites?.map((favItem) => (
        <StyledRow key={favItem.id}>
          <StyledRowLink to={routing.product.generatePath({ id: String(favItem.id) })}>
            <StyledAllFavoriteText>{favItem.title}</StyledAllFavoriteText>
          </StyledRowLink>
          <StyledRowDeleteIcon src={deleteIcon} onClick={() => onRemoveClickHandler(favItem)} />
        </StyledRow>
      ))}
    </StyledAllFavoriteContainer>
  )
}

export default ProductsFavoritesMenu
