import { db } from "../data/db";
import { CartItem, TGuitar } from "../types/types";

export type CartActions =
    { type: 'add-to-cart', payload: { item: TGuitar } } |
    { type: 'remove-from-cart', payload: { id: TGuitar['id'] } } |
    { type: 'decraseQuantity', payload: { id: TGuitar['id'] } } |
    { type: 'increaseQuantity', payload: { id: TGuitar['id'] } } |
    { type: 'cleanCart' }

export type CartState = {
    data: TGuitar[],
    cart: CartItem[]
}

const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : []
}
export const initialState: CartState = {
    data: db,
    cart: initialCart(),

}


export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === 'add-to-cart') {
        const dataExists = state.cart.find((dataIndex) => dataIndex.id === action.payload.item.id)
        const newItem: CartItem = { ...action.payload.item, quantity: 1 }
        let updatedCart: CartItem[] = []
        if (dataExists) {
            updatedCart = state.cart.map(item => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity < 1) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            });
        } else {
            updatedCart = [...state.cart, newItem]
        }
        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'remove-from-cart') {
        const cart = state.cart.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'decraseQuantity') {
        const cart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'increaseQuantity') {
        const stock = 5;
        const cart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity < stock) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'cleanCart') {
        const cart: CartItem[] = []
        return {
            ...state,
            cart
        }
    }

    return state
}