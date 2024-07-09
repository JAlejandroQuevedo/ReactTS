import { categories } from "../../../data/categories"
import { useKeyDown } from "../../../hooks/useKeyDown"

export const ExpenseForm = () => {
    const { handleKeyDown } = useKeyDown()
    return (
        <form className="space-y-5">
            <legend
                className="uppercase text-center text-[25px] font-black border-b-[2.5px] border-[blue] py-[10px]"
            >
                Nuevo gasto
            </legend>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-[23px] ml-[20px]"
                >
                    Nombre del gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añade el nombre del gasto"
                    className="bg-[#f2f2f2] p-[20px] rounded-[10px]"
                    name="expenseName"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-[23px] ml-[20px]"

                >
                    Cantidad
                </label>
                <input
                    type="text"
                    id="amount"
                    placeholder="Añade el nombre del gasto"
                    className="bg-[#f2f2f2] p-[20px] rounded-[10px]"
                    name="amount"
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-[23px] ml-[20px]"
                >
                    Categorias:
                </label>
                <select
                    id="category"
                    className="bg-[#f2f2f2] p-[20px] rounded-[10px] text-center text-[20px]"
                    name="category"
                >
                    <option value="">--- Selecione ---</option>
                    {categories.map(category => {

                        return (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        )

                    })}
                </select>
            </div>

            <button
                type="submit"
                className="bg-[blue] cursor-pointer w-full p-[20px] text-[white] uppercase font-bold rounded-[20px] text-[20px]"

            >
                Registrar gasto
            </button>
        </form>
    )
}
