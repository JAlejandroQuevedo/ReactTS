import { useMemo } from "react";
import { useBudget } from "../../../hooks/useBudget"
import { ExpenseDetail } from "../ExpenseDetail/ExpenseDetail";
import { FileterByCategory } from "../Filter/FileterByCategory";

export const ExpenseList = () => {
    const { state } = useBudget();
    const filterExpense = state.currentCategory ? state.expense.filter(expense => expense.category === state.currentCategory) :
        state.expense;
    const isEmpty = useMemo(() => filterExpense.length === 0 && state.expense.length === 0, [filterExpense, state.expense])
    return (
        <div className="mt-[30px] flex flex-col gap-[15px]">
            {
                isEmpty ? '' : (
                    <>
                        <p className="text-[gray] font-bold text-[30px] my-[15px] text-center">Listado de gastos</p>
                        <FileterByCategory />
                        {
                            filterExpense.map(({ amount, expenseName, category, date, id }) => {
                                return (
                                    <ExpenseDetail
                                        key={id}
                                        id={id}
                                        amount={amount}
                                        expenseName={expenseName}
                                        category={category}
                                        date={date}
                                    />
                                )
                            })
                        }
                    </>
                )
            }
        </div>
    )
}
