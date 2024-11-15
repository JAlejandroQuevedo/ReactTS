import { Categories, DraftExpenseForm, ExopenseForm } from "../../types";
import { v4 as uuidv4 } from 'uuid';

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'modalAction', payload: { modal: boolean } } |
    { type: 'add-expense', payload: { expense: DraftExpenseForm } } |
    { type: 'remove-expense', payload: { id: ExopenseForm['id'] } } |
    { type: 'get-extense-by-id', payload: { id: ExopenseForm['id'] } } |
    { type: 'update-expense', payload: { expense: ExopenseForm } } |
    { type: 'reset-expense' } |
    { type: 'add-filter-category', payload: { id: Categories['id'] } }


export type BudgetState = {
    budget: number,
    modal: boolean,
    expense: ExopenseForm[]
    editingId: ExopenseForm['id'],
    resetBudget: [],
    currentCategory: Categories['id']
}

const initialBudget = (): number => {
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0
}
const expenses = (): ExopenseForm[] => {
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}
export const initialState: BudgetState = {
    budget: initialBudget(),
    modal: false,
    expense: expenses(),
    editingId: '',
    resetBudget: [],
    currentCategory: ''
}
const createExpense = (draftExpense: DraftExpenseForm): ExopenseForm => {
    return {
        ...draftExpense, id: uuidv4()
    }

}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }
    if (action.type === 'modalAction') {
        return {
            ...state,
            modal: action.payload.modal
        }
    }
    if (action.type === 'add-expense') {
        const expense = createExpense(action.payload.expense)
        return {
            ...state,
            expense: [...state.expense, expense]
        }
    }
    if (action.type === 'remove-expense') {
        return {
            ...state,
            expense: state.expense.filter(expense => expense.id !== action.payload.id)
        }
    }
    if (action.type === 'get-extense-by-id') {
        return {
            ...state,
            editingId: action.payload.id,
            modal: true
        }
    }
    if (action.type === 'update-expense') {
        return {
            ...state,
            expense: state.expense.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
            modal: false,
            editingId: ''
        }
    }
    if (action.type === 'reset-expense') {
        return {
            ...state,
            budget: 0,
            expense: []
        }
    }
    if (action.type === 'add-filter-category') {
        return {
            ...state,
            currentCategory: action.payload.id
        }
    }
    return state
}

