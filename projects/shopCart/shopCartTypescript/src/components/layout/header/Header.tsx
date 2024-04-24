import { NavBar } from '../navBar/NavBar'
import { HeaderProps } from '../../../types/types'



export const Header = (
    {
        dataCart,
        isEmpty,
        cartTotal,
        removeFromCart,
        increaseQuantity,
        decraseQuantity,
        cleanCart
    }: HeaderProps
) => {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <NavBar
                        dataCart={dataCart}
                        isEmpty={isEmpty}
                        cartTotal={cartTotal}
                        removeFromCart={removeFromCart}
                        increaseQuantity={increaseQuantity}
                        decraseQuantity={decraseQuantity}
                        cleanCart={cleanCart} />
                </div>
            </div>
        </header>
    )
}
