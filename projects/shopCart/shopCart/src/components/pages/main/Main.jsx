import React from 'react'
import { GuitarContainer } from '../../common/guitar/GuitarContainer'

export const Main = ({ setDataCart, dataCart }) => {
    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                <GuitarContainer setDataCart={setDataCart} dataCart={dataCart} />
            </div>
        </main>
    )
}
