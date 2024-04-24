export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type MenuProps = Pick<MenuItem, 'id' | 'name' | 'price'> & {
    addItem: (id: number, name: string, price: number) => void
    // addItem?: () => void ==> Es requerido o no es requerido
}

export type OrderItem = Pick<MenuItem, 'id' | 'name' | 'price'> & {
    quantity: number
}
export type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void,
    tip: number,
    setTip: React.Dispatch<React.SetStateAction<number>>,
    placeOrder: () => void
}
export type OrderTotalsProps = Pick<OrderContentProps, 'tip' | 'placeOrder'> & {
    order: OrderItem[]
}

export type TipTotalProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}
