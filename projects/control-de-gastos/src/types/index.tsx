import { Dispatch, ReactNode } from "react"
import { BudgetActions, BudgetState } from "../reducers/Budget/budget-reducers"

export type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>,
    totalExpenses: number,
    remainingBudget: number
}

export type BudgetProviderProps = {
    children: ReactNode
}

export type AmountProp = {
    label?: string
    amount: number
}

//Expense form types
type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type ExopenseForm = {
    id: string
    expenseName: string
    amount: number
    category: string
    date: Value
}

export type DraftExpenseForm = Omit<ExopenseForm, 'id'>

export type Categories = Pick<ExopenseForm, 'id'> & {
    name: string
    icon: string
}