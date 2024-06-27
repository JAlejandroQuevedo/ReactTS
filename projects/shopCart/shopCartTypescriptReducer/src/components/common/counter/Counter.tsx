import { CounterType } from "../../../types/types"

export const Counter = ({ id, quantity, dispatch }: CounterType) => {
    return (
        <>
            <button
                type="button"
                className="btn btn-dark"
                onClick={() => dispatch({ type: 'decraseQuantity', payload: { id } })}
            >
                -
            </button>
            {quantity}
            <button
                type="button"
                className="btn btn-dark"
                onClick={() => dispatch({ type: 'increaseQuantity', payload: { id } })}
            >
                +
            </button>

        </>
    )
}
