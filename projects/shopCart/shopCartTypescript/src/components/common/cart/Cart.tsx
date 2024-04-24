import { HeaderProps } from '../../../types/types'
import { Counter } from '../counter/Counter'

export const Cart = (
    {
        dataCart,
        isEmpty,
        cartTotal,
        removeFromCart,
        increaseQuantity,
        decraseQuantity,
        cleanCart
    }: HeaderProps
) => {
    return (
        <div
            className="carrito"
        >
            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
            {
                <div id="carrito" className="bg-white p-3">
                    {isEmpty ? <p className="text-center">El carrito esta vacio</p> :
                        <>
                            {dataCart.map(({ id, image, name, price, quantity }) => (
                                <table className="w-100 table" key={id}>
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                                            </td>
                                            <td>{name}</td>
                                            <td className="fw-bold">
                                                ${price}
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <Counter
                                                    id={id}
                                                    quantity={quantity}
                                                    increaseQuantity={increaseQuantity}
                                                    decraseQuantity={decraseQuantity}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    onClick={() => removeFromCart(id)}

                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ))}
                            < p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                        </>
                    }
                    <button className="btn btn-dark w-100 mt-3 p-2"
                        onClick={cleanCart}
                    >Vaciar Carrito</button>
                </div>}
        </div >
    )
}
