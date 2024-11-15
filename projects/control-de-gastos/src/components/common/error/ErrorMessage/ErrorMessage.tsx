import { BudgetProviderProps } from "../../../../types"

export const ErrorMessage = ({ children }: BudgetProviderProps) => {
    return (
        <p className="bg-[red] p-[20px] text-[white] font-bold text-[15px] text-center">{children}</p>
    )
}
