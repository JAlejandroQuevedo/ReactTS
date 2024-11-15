import { useBudget } from "../../../hooks/useBudget"
import { AmountDisplay } from "../../common/AmountDisplay.tsx/AmountDisplay"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const BudgetTracker = () => {
    const { state, totalExpenses, remainingBudget, dispatch } = useBudget();
    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);
    const resetApp = () => {
        dispatch({ type: 'reset-expense' });
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textSize: 10,
                        textColor: percentage === 100 ? '#DC2626' : '#3B82F6'
                    })}
                    text={`${percentage}% Gastado`}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <AmountDisplay label={"Presupuesto"} amount={state.budget} />
                <AmountDisplay label={"Disponible"} amount={remainingBudget} />
                <AmountDisplay label={"Gastado"} amount={totalExpenses} />
                <button
                    type="button"
                    className="bg-[#9f2e2e] w-full p-[25px] text-white uppercase font-bold rounded-[5px]"
                    onClick={resetApp}
                >
                    Resetear app
                </button>
            </div>
        </div>
    )
}
