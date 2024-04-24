import { Menu } from './Menu';
import type { MenuProps } from "../../../types";


export const MenuContainer = ({ id, name, price, addItem }: MenuProps) => {
    return (
        <>
            <Menu id={id} name={name} price={price} addItem={addItem} />
        </>
    )
}
