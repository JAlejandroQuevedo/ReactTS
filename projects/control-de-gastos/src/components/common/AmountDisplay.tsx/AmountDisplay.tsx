import { formatCurrency } from "../../../helpers/Amount"
import { AmountProp } from "../../../types"


export const AmountDisplay = ({ label, amount }: AmountProp) => {
    return (
        <div>
            {label ? <p className="text-[20px] text-[blue] font-bold">
                {label}: {' '}
                <span className="font-black text-[black]">{formatCurrency(amount)}</span>
            </p>
                :
                <p className="text-[20px] text-[blue] font-bold border-l border-[black] p-[20px] mb-[20px]">
                    <span className="font-black text-[black]">{formatCurrency(amount)}</span>
                </p>
            }
        </div>
    )
}
