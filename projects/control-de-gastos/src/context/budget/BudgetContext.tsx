import { createContext, useMemo, useReducer } from "react"
import { budgetReducer, initialState } from "../../reducers/Budget/budget-reducers"
import { BudgetContextProps, BudgetProviderProps } from "../../types";


export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);
    const totalExpenses = useMemo(() => state.expense.reduce((total, expense) => expense.amount + total, 0), [state.expense]);
    const remainingBudget = state.budget - totalExpenses;
    return (
        <BudgetContext.Provider
            value={
                {
                    state,
                    dispatch,
                    totalExpenses,
                    remainingBudget
                }
            }
        >
            {children}
        </BudgetContext.Provider>
    )
}