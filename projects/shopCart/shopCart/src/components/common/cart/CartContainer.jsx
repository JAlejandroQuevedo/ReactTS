import React, { useMemo } from 'react'
import { Cart } from './Cart'

export const CartContainer = ({ dataCart, setDataCart }) => {

    //Sate derivado

    const isEmpty = useMemo(() => dataCart.length === 0, [dataCart]);
    const cartTotal = useMemo(() => dataCart.reduce((total, item) => total + (item.quantity * item.price), 0), [dataCart])

    const removeFromCart = (id) => {
        setDataCart(prevCart => prevCart.filter(product => product.id !== id))
    }
    const increaseQuantity = (id) => {
        const stock = 5;
        const updatedCart = dataCart.map(item => {
            if (item.id === id && item.quantity < stock) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        setDataCart(updatedCart)
    }
    const decraseQuantity = (id) => {
        const updatedCart = dataCart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })

        setDataCart(updatedCart)
    }
    const cleanCart = () => {
        setDataCart([])
    }

    return (
        <>
            <Cart
                dataCart={dataCart}
                setDataCart={setDataCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decraseQuantity={decraseQuantity}
                cleanCart={cleanCart}
            />
        </>
    )
}
