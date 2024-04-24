import type { OrderContentProps } from "../../../../types"
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

export const Tips = ({ setTip, tip }: OrderContentProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propinas</h3>
            <form>
                {
                    tipOptions.map(({ id, value, label }) => (
                        <div
                            key={id}
                            className="flex gap-2"
                        >
                            <label htmlFor="id">
                                {label}
                            </label>
                            <input
                                id={id}
                                type="radio"
                                name="tip"
                                value={value}
                                onChange={e => setTip(+e.target.value)}
                                checked={value === tip}
                            />
                        </div>
                    ))
                }
            </form>
        </div>
    )
}
