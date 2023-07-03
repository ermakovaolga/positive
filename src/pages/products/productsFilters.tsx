import React from 'react'
import styled from '@emotion/styled'

import ProductsFiltersProperties from './productsFiltersProperties'
import ProductsFiltersSorters from './productsFiltersSorters'
import ProductsFiltersPaging from './productsFiltersPaging'

const StyledFiltersContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 36px 0;
  @media only screen and (max-width: 768px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
`

function ProductsFilters({ total }: { total: number }) {
  return (
    <StyledFiltersContainer>
      {!!total && (
        <>
          <ProductsFiltersSorters />
          <ProductsFiltersProperties />
        </>
      )}
      <ProductsFiltersPaging total={total} />
    </StyledFiltersContainer>
  )
}

export default ProductsFilters
