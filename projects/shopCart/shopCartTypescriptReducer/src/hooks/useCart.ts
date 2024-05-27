import { useEffect, useState, useMemo } from "react";
import { db } from "../data/db";
import { CartItem, TGuitar } from "../types/types";
const useCart = () => {
    //App
    const initialCart = () : CartItem[]=> {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    const [dataCart, setDataCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(dataCart))
    }, [dataCart])


    //Guitar

    const [data] = useState(db);
    
    const addToCart = (item: TGuitar) => {
        const dataExists = dataCart.findIndex((dataIndex) => dataIndex.id === item.id)
        const newItem: CartItem ={...item, quantity: 1}
        if (dataExists >= 0) {
            const updatedCart = [...dataCart];
            updatedCart[dataExists].quantity++;
            setDataCart(updatedCart)
        } else {
            setDataCart([...dataCart, newItem])
        }
    }


    //Cart

    const isEmpty = useMemo(() => dataCart.length === 0, [dataCart]);
    const cartTotal = useMemo(() => dataCart.reduce((total, item) => total + (item.quantity * item.price), 0), [dataCart])

    const removeFromCart = (id: TGuitar['id']) => {
        setDataCart(prevCart => prevCart.filter(product => product.id !== id))
    }
    const increaseQuantity = (id : TGuitar['id']) => {
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
    const decraseQuantity = (id: TGuitar['id']) => {
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

    return {
        dataCart,
        setDataCart,
        data,
        addToCart,
        isEmpty,
        cartTotal,
        removeFromCart,
        increaseQuantity,
        decraseQuantity,
        cleanCart
    }
}

export { useCart }