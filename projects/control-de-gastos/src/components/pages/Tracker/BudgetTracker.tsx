import { useBudget } from "../../../hooks/useBudget"
import { AmountDisplay } from "../../common/AmountDisplay.tsx/AmountDisplay"

export const BudgetTracker = () => {
    const { state } = useBudget()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="Grafica de gastos" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <AmountDisplay label={"Presupuesto"} amount={state.budget} />
                <AmountDisplay label={"Disponible"} amount={200} />
                <AmountDisplay label={"Gastado"} amount={100} />
                <button
                    type="button"
                    className="bg-[#9f2e2e] w-full p-[25px] text-white uppercase font-bold rounded-[5px]"
                >
                    Resetear app
                </button>
            </div>
        </div>
    )
}
