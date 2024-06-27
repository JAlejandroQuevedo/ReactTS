import type { MenuProps } from "../../../types"

export const Menu = ({ name, price, dispatch, data }: MenuProps) => {
    return (
        <>
            <button
                className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg"
                onClick={() => dispatch({ type: 'add-item', payload: { item: data } })}
            >
                <h2>{name}</h2>
                <p className=" font-black">${price}</p>
            </button>
        </>
    )
}
