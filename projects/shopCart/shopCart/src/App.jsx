import { HeaderContainer } from './components/layout/header/HeaderContainer'
import { MainContainer } from './components/pages/main/MainContainer'
import { Footer } from './components/layout/footer/Footer'
import { useApp } from './hooks/useApp'

export const App = () => {
  const { dataCart, setDataCart } = useApp()

  return (
    <>
      <HeaderContainer dataCart={dataCart} setDataCart={setDataCart} />
      <MainContainer setDataCart={setDataCart} dataCart={dataCart} />
      <Footer />
    </>
  )
}
