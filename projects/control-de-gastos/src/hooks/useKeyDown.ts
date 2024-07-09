import { useBudget } from "./useBudget";


const useKeyDown = () => {
    const { dispatch } = useBudget()

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];
        if (!validKeys.includes(e.key)) {
            e.preventDefault()
        }
    }
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            dispatch({ type: 'modalAction', payload: { modal: false } })
        }
    }

    return {
        handleKeyDown,
        handleEsc
    }
}

export { useKeyDown }