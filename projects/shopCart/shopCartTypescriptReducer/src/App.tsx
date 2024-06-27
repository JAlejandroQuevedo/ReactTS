import { Main } from './components/pages/main/Main'
import { Footer } from './components/layout/footer/Footer'
import { Header } from './components/layout/header/Header'
import { useEffect, useReducer } from 'react'
import { cartReducer, initialState } from './reducers/cart-reducers'


export const App = () => {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <>
      <Header
        dataCart={state.cart}
        dispatch={dispatch}
      />
      <Main data={state.data} dispatch={dispatch} />
      <Footer />
    </>
  )
}
