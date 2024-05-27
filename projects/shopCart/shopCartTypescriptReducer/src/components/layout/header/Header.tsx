import { NavBar } from '../navBar/NavBar'
import { HeaderProps } from '../../../types/types'
import { useMemo } from 'react';

export const Header = (
    {
        dataCart,
        dispatch,
        increaseQuantity,
        decraseQuantity,
        cleanCart
    }: HeaderProps
) => {

    const isEmpty = useMemo(() => dataCart.length === 0, [dataCart]);
    const cartTotal = useMemo(() => dataCart.reduce((total, item) => total + (item.quantity * item.price), 0), [dataCart])
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
                        dispatch={dispatch}
                        increaseQuantity={increaseQuantity}
                        decraseQuantity={decraseQuantity}
                        cleanCart={cleanCart} />
                </div>
            </div>
        </header>
    )
}
