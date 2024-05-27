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


export const initialState: CartState = {
    data: db,
    cart: []
}
const MIN_ITEMS = 1;
const MAX_ITEMS = 5;
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
                    if (item.quantity < MIN_ITEMS) {
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
        return {
            ...state
        }
    }

    if (action.type === 'increaseQuantity') {
        return {
            ...state
        }
    }

    if (action.type === 'cleanCart') {
        return {
            ...state
        }
    }

    return state
}