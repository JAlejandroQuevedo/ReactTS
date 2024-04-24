import { menuItems } from "../../data/db";
import { MenuContainer } from "../common/menu/MenuContainer";
import { useOrder } from "../../hooks/useOrder";
import { Consumo } from "../common/consumo/Consumo";


export const HomeContainer = () => {
    const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
    return (
        <>
            <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="mr-10">
                    <h2 className="font-black text-4xl mb-5 ml-1">Menu</h2>
                    <div className="space-y-3">
                        {
                            menuItems.map(({ id, name, price }) => (
                                <MenuContainer
                                    key={id}
                                    id={id}
                                    name={name}
                                    price={price}
                                    addItem={addItem}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-8">
                    <h2 className="font-black text-4xl">Consumo</h2>
                    <Consumo
                        order={order}
                        removeItem={removeItem}
                        tip={tip}
                        setTip={setTip}
                        placeOrder={placeOrder}
                    />
                </div>
            </main>
        </>
    )
}
