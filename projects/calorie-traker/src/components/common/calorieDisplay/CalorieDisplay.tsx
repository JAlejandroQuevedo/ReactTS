import type { CaloriesDisplay } from "../../../types"
export const CalorieDisplay = ({ calories, text }: CaloriesDisplay) => {
    return (
        <p className="text-white font-bold rounded-full gridd grid-cols-1 gap-3 text-center flex flex-col">
            <span className="font-black text-6xl text-white">{calories}</span>
            {text}
        </p>
    )
}
