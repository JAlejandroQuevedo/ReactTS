import { useMemo, useState } from "react"
import { useBudget } from "../../../hooks/useBudget";


export const BudgetForm = () => {
    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
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
                    type="number"
                    className="w-full bg-[white] border border-[gray] p-[20px] rounded-[10px] outline-none hover: bg-[#f2f2f2f2] hover:border-none cursor-pointer hover:p-2,w-full"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                value="Definir presupuesto"
                className="bg-[blue] text-[white] uppercase w-full font-bold p-[18px] rounded-[5px] text-[18px] hover:cursor-pointer hover:bg-[#f5f5f5f5] hover:text-[black] disabled:opacity-35"
                disabled={isValid}
            />

        </form>
    )
}
