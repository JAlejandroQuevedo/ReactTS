import { GuitarProps } from '../../../types/types'
import { Guitar } from '../../common/guitar/Guitar'

export const Main = ({ data, dispatch }: GuitarProps) => {
    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                <Guitar data={data} dispatch={dispatch} />
            </div>
        </main>
    )
}
