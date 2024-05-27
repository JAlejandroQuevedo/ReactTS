import { Activity, StateActivityReducer } from "../../../types";
import { categories } from "../../../data/category";
import { useMemo } from "react";
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';
export const ShowAll = ({ state, dispatch }: StateActivityReducer) => {
    const categoryName = useMemo(() => (category: Activity['category']) =>
        categories.map(cat => cat.id === category ? cat.name : ''), [state]
    )

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y actividades</h2>
            {state.map(({ id, category, name, calories }) => (
                <section key={id} className="px-10 pt-4 pb-4 bg-slate-100 mt-10 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${category === 1 ? "bg-lime-500" : 'bg-orange-500'
                            }`}>{categoryName(+category)}</p>
                        <p className="text-2xl font-bold pt-5 ">{name}</p>
                        <p className="text-4xl font-black text-lime-500 ">{calories} {''} <span>Calorias</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button onClick={() => dispatch({ type: "set-activeId", payload: { id: id } })}>
                            <PencilSquareIcon className="h-8 w-8 text-gray-800" />
                        </button>
                        <button onClick={() => dispatch({ type: "delete-activity", payload: { id: id } })}>
                            <XCircleIcon className="h-8 w-8 text-red-500" />
                        </button>
                    </div>
                </section>)
            )}
        </>
    )
}
