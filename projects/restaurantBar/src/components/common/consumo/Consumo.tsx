import { OrderContentProps } from "../../../types";
import { formatCurrancy } from "../../../helpers";
import { OrderTotals } from "./orderTotals/OrderTotals";
import { Tips } from "./tips/Tips";

export const Consumo = ({ order, removeItem, tip, setTip, placeOrder }: OrderContentProps) => {
    return (
        <div>
            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                    <p className="text-center">La orden esta vacia</p>
                    :
                    (
                        <>
                            {order.map(({ id, name, price, quantity }) => (
                                <div key={id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                                    <div>
                                        <p className="text-lg">{name}  - {formatCurrancy(price)}</p>
                                        <p className="font-black">Cantidad: {quantity} - {formatCurrancy(price * quantity)}</p>
                                    </div>
                                    <button
                                        onClick={() => removeItem(id)}
                                        className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                                        X
                                    </button>
                                </div>
                            ))}
                            <Tips order={order} removeItem={removeItem} tip={tip} setTip={setTip} placeOrder={placeOrder} />
                            <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
                        </>

                    )
                }
            </div>
        </div>
    )
}
