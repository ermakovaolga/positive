import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import {
  disabledColor,
  mainFont,
  mainTextColor,
  secondaryColor,
  secondaryTextColor,
} from 'src/constants/stylesConstants'
import { getPageParams } from 'src/redux/product/productSelectors'
import { pageLimit } from 'src/constants/commonConstants'
import { PageParams } from 'src/types/productTypes'
import { setParams } from 'src/redux/product/productActionDispatchers'
import { useAction } from 'src/hooks/useActions'

import ArrowUpIcon from 'src/theme/icons/up-arrow.svg'
import ArrowDownIcon from 'src/theme/icons/down-arrow.svg'

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
`
const StyledNonActiveFilter = styled.div`
  cursor: pointer;
  border: 1px solid #e3e3e3;
  background: ${disabledColor};
  color: ${secondaryTextColor};
  text-align: center;
  font-size: 14px;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  padding: 10px 16px;
  line-height: 20px;
`
const StyledPagesContainer = styled.div`
  display: flex;
`
const StyledArrowImage = styled.img`
  width: 16px;
`
function ProductsFilters({ total }: { total: number }) {
  const setPageParams = useAction(setParams)

  const [currentPage, setCurrectPage] = useState<number>(0)
  const pages = Math.ceil(total / pageLimit)
  const pagesArray: number[] = []
  for (let i = 0; i < pages; i++) {
    pagesArray.push(i)
  }

  const currentPageParams = useSelector(getPageParams)

  const changeParamsHandler = (params: PageParams) => {
    setPageParams(params)
  }
  const onClickPageHandler = (page: number) => {
    setCurrectPage(page)
    changeParamsHandler({
      start: pageLimit * page,
      end: pageLimit * page + pageLimit,
      sort: currentPageParams.sort,
    })
  }
  useEffect(() => {
    setCurrectPage(0)
  }, [currentPageParams.sort])
  return (
    <StyledPagesContainer>
      {currentPage < pagesArray.length - 1 && (
        <StyledActiveFilter onClick={() => onClickPageHandler(currentPage + 1)}>
          <StyledArrowImage src={ArrowDownIcon} />
        </StyledActiveFilter>
      )}
      {currentPage === pagesArray.length - 1 && (
        <StyledNonActiveFilter>
          <StyledArrowImage src={ArrowDownIcon} />
        </StyledNonActiveFilter>
      )}
      {currentPage !== 0 && (
        <StyledActiveFilter onClick={() => onClickPageHandler(currentPage - 1)}>
          <StyledArrowImage src={ArrowUpIcon} />
        </StyledActiveFilter>
      )}
      {pagesArray.length > 0 && currentPage === 0 && (
        <StyledNonActiveFilter>
          <StyledArrowImage src={ArrowUpIcon} />
        </StyledNonActiveFilter>
      )}
    </StyledPagesContainer>
  )
}

export default ProductsFilters
