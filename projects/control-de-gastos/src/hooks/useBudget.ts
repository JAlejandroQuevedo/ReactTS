import { useContext } from "react"
import { BudgetContext } from "../context/budget/BudgetContext"

export const useBudget = () => {
    const stateBudget = useContext(BudgetContext)
    if (!stateBudget) {
        throw new Error('use budget must be used within a Provider')
    }

    return stateBudget
}