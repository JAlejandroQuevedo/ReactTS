import React, { useEffect, useState } from 'react'
import { Guitar } from './Guitar'
import { db } from '../../../data/db'

export const GuitarContainer = ({ setDataCart, dataCart }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(db)
    }, [])
    const addToCart = (id, name, image, price) => {
        const dataExists = dataCart.findIndex((dataIndex) => dataIndex.id === id)
        if (dataExists >= 0) {
            const updatedCart = [...dataCart];
            updatedCart[dataExists].quantity++;
            setDataCart(updatedCart)
        } else {
            setDataCart([...dataCart, {
                id,
                name,
                image,
                price,
                quantity: 1
            }])
        }
    }

    return (
        <>
            <Guitar data={data} addToCart={addToCart} />
        </>
    )
}
