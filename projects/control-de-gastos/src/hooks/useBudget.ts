import { useContext } from "react"
import { BudgetContext } from "../context/budget/BudgetContext"

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if (!context) {
        throw new Error('use budget must be used within a Provider')
    }

    return context
}