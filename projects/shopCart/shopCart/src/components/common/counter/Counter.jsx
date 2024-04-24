import React from 'react'

export const Counter = ({ id, quantity, increaseQuantity, decraseQuantity }) => {
    return (
        <>
            <button
                type="button"
                className="btn btn-dark"
                onClick={() => decraseQuantity(id)}
            >
                -
            </button>
            {quantity}
            <button
                type="button"
                className="btn btn-dark"
                onClick={() => increaseQuantity(id)}
            >
                +
            </button>

        </>
    )
}
