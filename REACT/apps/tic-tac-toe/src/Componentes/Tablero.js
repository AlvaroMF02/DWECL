import React from 'react'
import { Caja } from './Caja'
import './Tablero.css'

export const Tablero = ({ tablero, onClick }) => {
    return (
        <div className='tablero'>
            {tablero.map((valor, index) => {
                return <Caja valor={valor} onClick={() => onClick(index)} />
            })}
        </div>
    )
}
