import type { MenuProps } from "../../../types"

export const Menu = ({ id, name, price, addItem }: MenuProps) => {
    return (
        <>
            <button
                className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg"
                onClick={() => addItem(id, name, price)}
            >
                <h2>{name}</h2>
                <p className=" font-black">${price}</p>
            </button>
        </>
    )
}
