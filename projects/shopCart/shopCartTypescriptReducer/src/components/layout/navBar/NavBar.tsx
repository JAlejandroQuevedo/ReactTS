import { Cart } from '../../common/cart/Cart'
import { NavBarProps } from '../../../types/types'


export const NavBar = (
    {
        dataCart,
        isEmpty,
        cartTotal,
        dispatch,
        increaseQuantity,
        decraseQuantity,
        cleanCart
    }: NavBarProps
) => {
    /* TIPOS DE FRAGMENTS 
        ----> <Fragment> </Fragment>
        ----> <React.Fragment></React.Fragment> 
        ----> <></>
    */

    return (

        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <Cart
                dataCart={dataCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
                dispatch={dispatch}
                increaseQuantity={increaseQuantity}
                decraseQuantity={decraseQuantity}
                cleanCart={cleanCart}
            />
        </nav>
    )
}
