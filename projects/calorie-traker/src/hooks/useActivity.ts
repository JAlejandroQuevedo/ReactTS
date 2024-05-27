import { useEffect, useMemo, useReducer, useState } from "react"
import type { Activity } from "../types"
import { activityReducer, initialState } from "../reducers/activity-reducers"
import { v4 as uuidv4 } from 'uuid'

const useActivity = () => {
    const initialActivityState: Activity = {
        id: uuidv4(),
        category: 1,
        name: '',
        calories: ''
    }
    const [activity, setActivity] = useState<Activity>(initialActivityState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const isNumberField = [
            'category',
            'calories'
        ].includes(e.target.id);
        setActivity({
            ...activity, [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];
        if (!validKeys.includes(e.key)) {
            e.preventDefault()
        }
    }

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== '' && +calories > 0
    }

    const [state, dispatch] = useReducer(activityReducer, initialState)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: 'save-activity', payload: { newActivity: activity } })
        setActivity({ ...initialActivityState, id: uuidv4() })

    }
    useEffect(() => {
        if (state.activeId) {
            const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0];
            setActivity(selectedActivity);

        }

    }, [state.activeId])

    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities))

    }, [state.activities])

    const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities])
    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1 ? total + +activity.calories : total, 0), [state.activities])
    const caloriesBorn = useMemo(() => state.activities.reduce((total, activity) => activity.category === 2 ? total + +activity.calories : total, 0), [state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBorn, [state.activities])


    return {
        activity,
        setActivity,
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


    }
}

export { useActivity }