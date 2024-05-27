import { Dispatch } from "react"
import { ActivityActions } from "../reducers/activity-reducers"

export type Category = {
    id: number,
    name: string
}

export type Activity = {
    id: string,
    category: number,
    name: string,
    calories: string
}
export type StateActivityReducer = {
    state: Activity[],
    dispatch: Dispatch<ActivityActions>
}
export type FormProps = {
    dispatch: Dispatch<ActivityActions>,
}
export type CaloriesTracker = {
    caloriesConsumed: number,
    caloriesBorn: number,
    netCalories: number
}
export type CaloriesDisplay = {
    calories: number,
    text: string
}