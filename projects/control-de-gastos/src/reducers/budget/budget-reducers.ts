
export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'modalAction', payload: { modal: boolean } }

export type BudgetState = {
    budget: number,
    modal: boolean
}

export const initialState: BudgetState = {
    budget: 0,
    modal: false
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
    return state
}

