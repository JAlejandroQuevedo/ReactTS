export type TGuitar ={
        id: number
        name: string
        image: string
        description: string
        price: number

    }

export type CartItem = Omit<TGuitar, 'description'> & {
    quantity: number
} 

export type HeaderProps ={
    dataCart: CartItem[],
    isEmpty: boolean,
    cartTotal: number,
    removeFromCart: (id: TGuitar['id']) => void,
    increaseQuantity:(id: TGuitar['id']) => void,
    decraseQuantity:(id: TGuitar['id']) => void,
    cleanCart: ()=> void 
}