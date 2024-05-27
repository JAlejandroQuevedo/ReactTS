import { CaloriesTracker } from "../../../types"
import { CalorieDisplay } from "../calorieDisplay/CalorieDisplay"

export const CalorieTracker = ({ caloriesConsumed, caloriesBorn, netCalories }: CaloriesTracker) => {
    return (
        <section className="bg-gray-800 py-10 mt-5 mb-5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
                <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 p-6">
                    <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
                    <CalorieDisplay calories={caloriesBorn} text="Ejercicio" />
                    <CalorieDisplay calories={netCalories} text="Diferencia" />
                </div>
            </div>
        </section>
    )
}
