import { categories } from "../../../data/category";
import { useActivity } from "../../../hooks/useActivity";
import { CalorieTracker } from "../calorieTracker/CalorieTracker";
import { ShowAll } from "../showAll/ShowAll";



export const Form = () => {

    const {
        activity,
        handleChange,
        isValidActivity,
        handleSubmit,
        state,
        handleKeyDown,
        dispatch,
        canRestartApp,
        caloriesConsumed,
        caloriesBorn,
        netCalories

    } = useActivity()




    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     dispatch({ type: 'save-activity', payload: { newActivity: activity } })
    // }
    return (
        <>
            <section>
                <form className=" space-y-5 bg-white shadow p-10 rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="name" className="font-bold text-xl">Categoria</label>
                        <select
                            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                            id="category"
                            value={activity.category}
                            onChange={handleChange}
                        >
                            {categories.map(({ id, name }) => (
                                <option
                                    key={id}
                                    value={id}
                                >
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="activity" className="font-bold text-xl">Actividad</label>
                        <input
                            type="text"
                            id="name"
                            className="border border-slate-300 p-2 rounded-lg"
                            placeholder="Ej. Andar en bicicleta, levantar pesas, saltar la cuerdas"
                            value={activity.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="calories" className="font-bold text-xl">Calorias</label>
                        <input
                            type="text"
                            id="calories"
                            className="border border-slate-300 p-2 rounded-lg"
                            placeholder="Ej. 300 o 500"
                            value={activity.calories}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <input
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                        value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
                        disabled={!isValidActivity()}
                    />
                </form>
            </section>
            {state.activities.length > 0 ?
                <section className="p-10 mx-auto max-w-4xl bg-white mt-5">
                    <CalorieTracker caloriesConsumed={caloriesConsumed} caloriesBorn={caloriesBorn} netCalories={netCalories} />
                    <ShowAll state={state.activities} dispatch={dispatch} />
                </section>
                : <h1 className="font-bold text-3xl text-center mt-7 text-white">No hay actividades registradas</h1>
            }
            <div className="flex justify-center p-5">
                <button
                    className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-md text-sm disabled:opacity-10"
                    disabled={!canRestartApp}
                    onClick={() => dispatch({ type: "restart-app" })}
                >
                    Reiniciar App
                </button>
            </div>
        </>
    )
}
