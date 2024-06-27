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
}

export type NavBarProps = HeaderProps & {
    isEmpty: boolean,
    cartTotal: number
}

export type CounterType = {
    id: number,
    quantity: any,
    dispatch: Dispatch<CartActions>
}