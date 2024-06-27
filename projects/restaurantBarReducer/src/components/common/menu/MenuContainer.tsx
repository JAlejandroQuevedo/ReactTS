import { Menu } from './Menu';
import type { MenuProps } from "../../../types";


export const MenuContainer = ({ id, name, price, dispatch, data }: MenuProps) => {
    return (
        <>
            <Menu id={id} name={name} price={price} dispatch={dispatch} data={data} />
        </>
    )
}
