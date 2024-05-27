import { Main } from './components/pages/main/Main'
import { Footer } from './components/layout/footer/Footer'
import { useCart } from './hooks/useCart'
import { Header } from './components/layout/header/Header'
import { useReducer } from 'react'
import { cartReducer, initialState } from './reducers/cart-reducers'


export const App = () => {
  const {
    increaseQuantity,
    decraseQuantity,
    cleanCart
  } = useCart()

  const [state, dispatch] = useReducer(cartReducer, initialState)

  // console.log(state)
  return (
    <>
      <Header
        dataCart={state.cart}
        dispatch={dispatch}
        increaseQuantity={increaseQuantity}
        decraseQuantity={decraseQuantity}
        cleanCart={cleanCart}
      />
      <Main data={state.data} dispatch={dispatch} />
      <Footer />
    </>
  )
}
