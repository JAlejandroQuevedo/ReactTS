import { menuItems } from "../../data/db";
import { MenuContainer } from "../common/menu/MenuContainer";
import { Consumo } from "../common/consumo/Consumo";
import { useReducer } from "react";
import { initialState, orderReducer } from "../../reducers/order-reducer";


export const HomeContainer = () => {
    const [state, dispatch] = useReducer(orderReducer, initialState)
    return (
        <>
            <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="mr-10">
                    <h2 className="font-black text-4xl mb-5 ml-1">Menu</h2>
                    <div className="space-y-3">
                        {
                            menuItems.map((data) => {
                                const { id, name, price } = data
                                return (
                                    <MenuContainer
                                        key={id}
                                        id={id}
                                        name={name}
                                        price={price}
                                        data={data}
                                        dispatch={dispatch}
                                    />)
                            })
                        }
                    </div>
                </div>
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-8">
                    <h2 className="font-black text-4xl">Consumo</h2>
                    <Consumo
                        order={state!.order}
                        dispatch={dispatch}
                        tip={state!.tip}
                    />
                </div>
            </main>
        </>
    )
}
