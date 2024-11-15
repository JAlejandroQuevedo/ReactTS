import { ChangeEvent } from "react";
import { categories } from "../../../data/categories";
import { useBudget } from "../../../hooks/useBudget";

export const FileterByCategory = () => {
    const { dispatch } = useBudget();
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'add-filter-category', payload: { id: e.target.value } })
    }
    return (
        <div className="bg-[#f3f2f2] shadow-lg rounded-[10px] p-[20px]">
            <form>
                <div className="flex flex-col md-items-center gap-[10px]"
                >
                    <label className="text-center text-[20px] font-bold" htmlFor="category">Filtrar gastos</label>
                    <select id="category"
                        className="bg-slate-100 p-[20px] flex-1 rounded-[10px]"
                        onChange={handleChange}
                    >
                        <option value="">--- Todas las Categorias ---</option>
                        {
                            categories.map(({ name, id }) => {
                                return (
                                    <option value={id} key={id}>
                                        {name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}
