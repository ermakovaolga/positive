import React, { ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'

import { store } from '../redux/store'

type AppProviderProps = {
  children: ReactNode
}
function AppProviders({ children }: AppProviderProps) {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={5}>{children}</SnackbarProvider>
    </Provider>
  )
}

export default AppProviders
