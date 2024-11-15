import { categories } from "../../../data/categories";
import { useKeyDown } from "../../../hooks/useKeyDown";
import { useEffect, useState } from "react";
import { DraftExpenseForm } from "../../../types";
import { Value } from "../../../types";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import { ChangeEvent, FormEvent } from "react";
import { ErrorMessage } from "../error/ErrorMessage/ErrorMessage";
import { useBudget } from "../../../hooks/useBudget";

export const ExpenseForm = () => {
    const [expense, setExpense] = useState<DraftExpenseForm>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
    });
    const [error, setError] = useState('');
    const [previousAmount, setPreviousAmount] = useState(0);
    const { handleKeyDown } = useKeyDown();
    const { dispatch, state, remainingBudget } = useBudget();
    useEffect(() => {
        if (state.editingId) {
            const editigExpense = state.expense.filter(currentExpense => currentExpense.id === state.editingId)[0]
            setExpense(editigExpense)
            setPreviousAmount(editigExpense.amount)
        }

    }, [state.editingId])
    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense, date: value
        })
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        const isAmountField = ['amount'].includes(name);
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        });

    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Convierte un objeto a arreglo
        if (Object.values(expense).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        if ((expense.amount - previousAmount) > remainingBudget) {
            setError('Ese gasto se sale del presupuesto')
            return
        }
        if (state.editingId) {
            dispatch({ type: 'update-expense', payload: { expense: { id: state.editingId, ...expense } } })
        } else {
            dispatch({ type: 'add-expense', payload: { expense: expense } });
        }
        dispatch({ type: 'modalAction', payload: { modal: false } })
        setPreviousAmount(0)
        // setExpense({
        //     amount: 0,
        //     expenseName: '',
        //     category: '',
        //     date: new Date
        // })
    }
    useEffect(() => {
        localStorage.setItem('budget', state.budget.toString());
        localStorage.setItem('expenses', JSON.stringify(state.expense))
    }, [state])
    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend
                className="uppercase text-center text-[25px] font-black border-b-[2.5px] border-[blue] py-[10px]"
            >{
                    state.editingId ? 'Editar gasto' : 'Nuevo gasto'
                }

            </legend>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-[23px] ml-[20px]"
                >
                    Nombre del gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añade el nombre del gasto"
                    className="bg-[#f2f2f2] p-[20px] rounded-[10px]"
                    name="expenseName"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-[23px] ml-[20px]"
                >
                    Cantidad
                </label>
                <input
                    type="text"
                    id="amount"
                    placeholder="Añade el nombre del gasto"
                    className="bg-[#f2f2f2] p-[20px] rounded-[10px]"
                    name="amount"
                    onKeyDown={handleKeyDown}
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-[23px] ml-[20px]"
                >
                    Categorias:
                </label>
                <select
                    id="category"
                    className="bg-[#f2f2f2] p-[20px] rounded-[10px] text-center text-[20px]"
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="">--- Selecione ---</option>
                    {categories.map(category => {
                        return (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-[23px] ml-[20px]"                >
                    Fecha del gasto:
                </label>
                <DatePicker
                    className='bg-[#F6F6F6] p-[10px] h-[100px]'
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>
            <button
                type="submit"
                className="bg-[blue] cursor-pointer w-full p-[20px] text-[white] uppercase font-bold rounded-[20px] text-[20px]"
            >{
                    state.editingId ? 'Editar gasto' : 'Registrar gasto'
                }
            </button>
        </form>
    )
}
