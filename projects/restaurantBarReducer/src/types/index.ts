import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type MenuProps = Pick<MenuItem, 'id' | 'name' | 'price'> & {
    dispatch: Dispatch<OrderActions>,
    data: MenuItem
    // addItem?: () => void ==> Es requerido o no es requerido
}

export type OrderItem = MenuItem & {
    quantity: number
}
export type OrderContentProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>,
    tip: number,
}
export type OrderTotalsProps = Pick<OrderContentProps, 'tip' | 'dispatch'> & {
    order: OrderItem[]
}

export type TipTotalProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}
