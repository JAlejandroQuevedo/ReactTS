import React from 'react'

import { NavBar } from './NavBar'

export const NavBarContainer = ({ dataCart, setDataCart }) => {


    return (
        <>
            <NavBar dataCart={dataCart} setDataCart={setDataCart} />
        </>
    )
}
