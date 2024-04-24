import React from 'react'
import { Guitar } from '../../common/guitar/Guitar'

export const Main = ({ data, addToCart }) => {
    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                <Guitar data={data} addToCart={addToCart} />
            </div>
        </main>
    )
}
