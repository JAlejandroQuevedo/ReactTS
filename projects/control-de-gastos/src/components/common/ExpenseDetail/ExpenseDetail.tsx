import { ExopenseForm } from "../../../types";
import { formatDate } from "../../../helpers/Date";
import { AmountDisplay } from "../AmountDisplay.tsx/AmountDisplay";
import { useMemo } from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'
import { categories } from "../../../data/categories";
import { useBudget } from "../../../hooks/useBudget";

export const ExpenseDetail = ({ id, amount, expenseName, category, date }: ExopenseForm) => {
    const categoryInfo = useMemo(() => categories.filter(img => img.id === category)[0], [category]);
    const { dispatch } = useBudget()
    const leadingActions = () => (

        <LeadingActions>
            <SwipeAction
                onClick={() => dispatch({ type: 'get-extense-by-id', payload: { id: id } })}>
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (

        <TrailingActions>
            <SwipeAction
                onClick={() => dispatch({ type: 'remove-expense', payload: { id: id } })}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions >
    )

    return (
        <SwipeableList>
            <SwipeableListItem maxSwipe={1} leadingActions={leadingActions()} trailingActions={trailingActions()}>
                <div className="bg-[white] shadow-xl p-[20px] w-full flex gap-[10px] items-center justify-around mb-[10px]">
                    <div>
                        <img
                            src={`/icono_${categoryInfo.icon}.svg`}
                            alt={`Icono de la categoría ${categoryInfo.name}`}
                            className="w-20"
                        />
                    </div>
                    <div>
                        <p className="text-[20px] font-extrabold uppercase text-slate-500">{categoryInfo.name}</p>
                        <p className="text-[20px] font-bold mb-[2px]">{expenseName}</p>
                        <p className="text-slate-600 text-[18px] ">{formatDate(date!.toString())}</p>
                    </div>
                    <AmountDisplay amount={amount} />
                </div >
            </SwipeableListItem>
        </SwipeableList>
    )
}
