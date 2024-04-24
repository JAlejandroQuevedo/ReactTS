import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";


export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (id: number, name: string, price: number) => {
        const itemExist = order.find(item => item.id === id);
        if (itemExist) {
            const updatedOrder = order.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
            setOrder(updatedOrder)
        } else {
            const newItem: OrderItem = {
                id,
                name,
                price,
                quantity: 1
            };
            setOrder([...order, newItem]);
        }
    };

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }
    const placeOrder = () => {
        setOrder([]);
        setTip(0)
    }
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    };
};
