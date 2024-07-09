import { useMemo } from "react"
import { BudgetForm } from "../../common/BudgetForm/BudgetForm"
import { useBudget } from "../../../hooks/useBudget"
import { BudgetTracker } from "../Tracker/BudgetTracker"
import { ExpenseModal } from "../../common/ExpenseModal/ExpenseModal"


export const Main = () => {
    const { state } = useBudget()
    const isBudget = useMemo(() => state.budget > 0, [state.budget])
    return (
        <main className="max-w-3xl mx-auto bg-[white] shadow-lg rounded-lg mt-[35px] p-[30px]">
            {
                isBudget ? <BudgetTracker /> : <BudgetForm />
            }
            {
                isBudget && (
                    <div className="max-w-[768px] mx-auto py-[40px]">
                        <ExpenseModal />
                    </div>
                )
            }
        </main>
    )
}
