import { formatCurrency } from "../../../helpers/amount"
import { AmountProp } from "../../../types"


export const AmountDisplay = ({ label, amount }: AmountProp) => {
    return (
        <div>
            <p className="text-[20px] text-[blue] font-bold">
                {label}: {''}
                <span className="font-black text-[black]">{formatCurrency(amount)}</span>
            </p>
        </div>
    )
}
