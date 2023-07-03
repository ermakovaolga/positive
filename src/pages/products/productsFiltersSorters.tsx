import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

import {
  disabledColor,
  mainFont,
  mainTextColor,
  secondaryColor,
  secondaryTextColor,
} from 'src/constants/stylesConstants'
import { filtersMap, pageLimit } from 'src/constants/commonConstants'
import { getPageParams } from 'src/redux/product/productSelectors'
import { setParams } from 'src/redux/product/productActionDispatchers'
import { PageParams } from 'src/types/productTypes'
import { useAction } from 'src/hooks/useActions'

const StyledActiveFilter = styled.div`
  background: ${secondaryColor};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  color: ${mainTextColor};
  text-align: center;
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  padding: 10px 16px;
  min-width: 100px;
  text-wrap: nowrap;
`
const StyledNonActiveFilter = styled.div`
  cursor: pointer;
  border: 1px solid #e3e3e3;
  background: ${disabledColor};
  color: ${secondaryTextColor};
  text-align: center;
  font-size: 14px;
  text-wrap: nowrap;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  padding: 10px 16px;
  line-height: 20px;
  min-width: 120px;
`

const StyledSortersContainer = styled.div`
  display: flex;
  flex: 1;
`

function ProductsFiltersSorters() {
  const setPageParams = useAction(setParams)
  const currentPageParams = useSelector(getPageParams)

  const sortOrder = currentPageParams.sort?.value || 'rating'

  const changeParamsHandler = useCallback(
    (params: PageParams) => {
      setPageParams(params)
    },
    [setPageParams],
  )
  return (
    <StyledSortersContainer>
      {filtersMap.map(({ filter, filterLabel }) => (
        <div key={filter.value}>
          {filter.value === sortOrder && <StyledActiveFilter>{filterLabel}</StyledActiveFilter>}
          {filter.value !== sortOrder && (
            <StyledNonActiveFilter onClick={() => changeParamsHandler({ start: 0, end: pageLimit, sort: filter })}>
              {filterLabel}
            </StyledNonActiveFilter>
          )}
        </div>
      ))}
    </StyledSortersContainer>
  )
}

export default ProductsFiltersSorters
