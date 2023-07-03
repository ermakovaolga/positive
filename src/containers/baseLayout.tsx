import React, { ReactNode } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CssBaseline, Container } from '@mui/material'
import styled from '@emotion/styled'

export const DRAWER_WIDTH = 240
export const COLLAPSED_DRAWER_WIDTH = 70

type LayoutProps = RouteComponentProps & {
  children: ReactNode
}

const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  height: 100%;
`
export const PageContainer = styled.div`
  margin: 10%;
  height: 100%;
  max-width: 100%;
  background: ${secondaryColor};
  position: relative;
  @media only screen and (max-width: 768px) {
    margin: 20px 0;
  }
`

const StyledContainer = styled(PageContainer.withComponent(Container))`
  max-width: 100% !important;
  margin: 0;
  padding: 0px 24px;
`
import { secondaryColor } from '../constants/stylesConstants'

function BaseLayout(props: LayoutProps) {
  const { children } = props

  return (
    <Root>
      <CssBaseline />
      <StyledContainer>
        <Main id="main-content">{children}</Main>
      </StyledContainer>
    </Root>
  )
}

export default withRouter(BaseLayout)
