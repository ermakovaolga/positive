import React from 'react'
import styled from '@emotion/styled'

import { filterByProperties } from 'src/constants/commonConstants'
import { mainFont, mainTextColor } from 'src/constants/stylesConstants'

const StyledReloadContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex: 1;
  color: ${mainTextColor};
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding: 10px;
`
const StyledRadio = styled.div`
  border-radius: 100px;
  border: 1px solid #e3e3e3;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0.5) 0%, #f5f5f5 100%);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15) inset;
  width: 10px;
  height: 10px;
  margin: 0.7em 0;
`
const StyledPropertiesContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  padding: 5px;
`
const StyledContainer = styled.div`
  margin-right: 24px;
  display: flex;
`
function ProductsFiltersProperties() {
  return (
    <StyledPropertiesContainer>
      {filterByProperties.map((property: string) => {
        return (
          <StyledContainer key={property}>
            <StyledRadio />
            <StyledReloadContainer>{property}</StyledReloadContainer>
          </StyledContainer>
        )
      })}
    </StyledPropertiesContainer>
  )
}

export default ProductsFiltersProperties
