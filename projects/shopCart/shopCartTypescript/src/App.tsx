import { Main } from './components/pages/main/Main'
import { Footer } from './components/layout/footer/Footer'
import { useCart } from './hooks/useCart'
import { Header } from './components/layout/header/Header'


export const App = () => {
  const {
    dataCart,
    data,
    addToCart,
    isEmpty,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decraseQuantity,
    cleanCart
  } = useCart()

  return (
    <>
      <Header
        dataCart={dataCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decraseQuantity={decraseQuantity}
        cleanCart={cleanCart}
      />
      <Main data={data} addToCart={addToCart} />
      <Footer />
    </>
  )
}
