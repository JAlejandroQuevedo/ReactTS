import { Dispatch } from "react"
import { CartActions } from "../reducers/cart-reducers"

export type TGuitar = {
    id: number
    name: string
    image: string
    description: string
    price: number,
}


export type GuitarProps = {
    data: TGuitar[],
    dispatch: Dispatch<CartActions>

}
export type CartItem = Omit<TGuitar, 'description'> & {
    quantity: number
}

export type HeaderProps = {
    dataCart: CartItem[],
    dispatch: Dispatch<CartActions>,
    increaseQuantity: (id: TGuitar['id']) => void,
    decraseQuantity: (id: TGuitar['id']) => void,
    cleanCart: () => void
}

export type NavBarProps = HeaderProps & {
    isEmpty: boolean,
    cartTotal: number
}