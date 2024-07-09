import { Dispatch, ReactNode } from "react"
import { BudgetActions, BudgetState } from "../reducers/budget/budget-reducers"

export type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

export type BudgetProviderProps = {
    children: ReactNode
}

export type AmountProp = {
    label: string
    amount: number
}