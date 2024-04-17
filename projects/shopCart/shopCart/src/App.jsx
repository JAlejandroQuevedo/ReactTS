
import React, { useEffect, useState } from 'react'
import { HeaderContainer } from './components/layout/header/HeaderContainer'
import { MainContainer } from './components/pages/main/MainContainer'
import { Footer } from './components/layout/footer/Footer'

export const App = () => {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </>
  )
}
