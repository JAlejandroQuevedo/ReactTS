import React, { useEffect, useState } from 'react'

const useApp = () => {
    //APP
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    const [dataCart, setDataCart] = useState(initialCart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(dataCart))
    }, [dataCart])

    return {
        dataCart,
        setDataCart,
    }
}
export { useApp }