import React from 'react'
import { Main } from './Main'

export const MainContainer = ({ setDataCart, dataCart }) => {
    return (
        <>
            <Main setDataCart={setDataCart} dataCart={dataCart} />
        </>
    )
}
