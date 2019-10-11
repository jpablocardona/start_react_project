import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { DemoWithQuery } from './container/GetDemo'

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
        <DemoWithQuery path='/' id='1' />
      </Router>
    </Suspense>
  )
}
