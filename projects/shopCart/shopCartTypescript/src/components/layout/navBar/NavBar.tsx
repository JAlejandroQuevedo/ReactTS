import { Cart } from '../../common/cart/Cart'
import { HeaderProps } from '../../../types/types'


export const NavBar = (
    {
        dataCart,
        isEmpty,
        cartTotal,
        removeFromCart,
        increaseQuantity,
        decraseQuantity,
        cleanCart 
    } : HeaderProps
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
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decraseQuantity={decraseQuantity}
                cleanCart={cleanCart}
            />
        </nav>
    )
}
