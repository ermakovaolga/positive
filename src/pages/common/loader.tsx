import React from 'react'
import styled from '@emotion/styled'

import { secondaryColor } from 'src/constants/stylesConstants'

const StledLoaderHolder = styled.div`
  background: ${secondaryColor};
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: 0.5;
  position: absolute;
  top: 0;
`
const StyledLoader = styled.div`
    margin: auto;
    border-radius: 50%;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
function Loader() {
  return (
    <StledLoaderHolder>
      <StyledLoader />
    </StledLoaderHolder>
  )
}

export default Loader
