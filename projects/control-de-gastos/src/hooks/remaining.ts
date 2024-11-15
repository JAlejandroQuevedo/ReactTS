import { useMemo } from "react"
import { useBudget } from "./useBudget"


export const remaining = () => {
    const { state } = useBudget();
    const totalExpenses = useMemo(() => state.expense.reduce((total, expense) => expense.amount + total, 0), [state.expense]);
    const remainingBudget = state.budget - totalExpenses;


    return {
        totalExpenses,
        remainingBudget
    }
}