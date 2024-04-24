import React from 'react'
import { Header } from './Header'

export const HeaderContainer = ({ dataCart, setDataCart }) => {


    return (
        <>
            <Header dataCart={dataCart} setDataCart={setDataCart} />
        </>
    )
}
