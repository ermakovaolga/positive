import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppProviders from '../contextProviders/app'
import Routes from './routes'

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProviders>
  )
}

export default App
