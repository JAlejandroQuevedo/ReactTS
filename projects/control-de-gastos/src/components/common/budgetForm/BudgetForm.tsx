import { useMemo, useState } from "react";
import { useBudget } from "../../../hooks/useBudget";
import { useKeyDown } from "../../../hooks/useKeyDown";



export const BudgetForm = () => {
    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget()
    const { handleKeyDown } = useKeyDown()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value)
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0

    }, [budget]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: 'add-budget', payload: { budget } })
    }
    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-[20px] text-[blue] font-bold text-center">
                    Definir presupuesto
                </label>
                <input
                    id="budget"
                    type="text"
                    className="w-full bg-[white] border border-[gray] p-[20px] rounded-[10px] outline-none focus:border-[blue] hover:cursor-pointer "
                    placeholder="Define tu presupuesto"
                    name="budget"
                    // value={budget}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <input
                type="submit"
                value="Definir presupuesto"
                className="bg-[blue] text-[white] uppercase w-full font-bold p-[18px] rounded-[5px] text-[18px] hover:cursor-pointer hover:bg-[#294092] disabled:opacity-35"
                disabled={isValid}
            />

        </form>
    )
}
