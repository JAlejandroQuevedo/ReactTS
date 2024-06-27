import { useMemo } from "react"
import type { OrderTotalsProps } from "../../../../types"
import { formatCurrancy } from "../../../../helpers";
export const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrancy(subtotalAmount)}</span>
                </p>
                <p>Propinas: {''}
                    <span className="font-bold">{formatCurrancy(tipAmount)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrancy(totalAmount)}</span>
                </p>


            </div>
            <button
                className="w-full  bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({ type: 'place-order' })}
            >
                Guardar orden
            </button>
        </>
    )
}
