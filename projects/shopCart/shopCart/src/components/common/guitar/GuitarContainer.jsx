import React, { useEffect, useState } from 'react'
import { Guitar } from './Guitar'
import { db } from '../../../data/db'

export const GuitarContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(db)
    }, [])
    return (
        <>
            <Guitar data={data} />
        </>
    )
}
