import React from 'react'
import { CartContainer } from '../../common/cart/CartContainer'

export const NavBar = ({ dataCart, setDataCart }) => {
    /* TIPOS DE FRAGMENTS 
        ----> <Fragment> </Fragment>
        ----> <React.Fragment></React.Fragment> 
        ----> <></>
    */



    return (

        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <CartContainer dataCart={dataCart} setDataCart={setDataCart} />
        </nav>
    )
}
