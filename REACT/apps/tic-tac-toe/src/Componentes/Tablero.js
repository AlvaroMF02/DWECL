import React from 'react'
import { Caja } from './Caja'
import './Tablero.css'

export const Tablero = ({ tablero, onClick }) => {
    return (
        <div className='tablero'>
            {/* Recorre el tablero devolviendo cajas con el index q se crea al hacer el map */}
            {tablero.map((valor, index) => {
                return <Caja valor={valor} onClick={() => valor === null && onClick(index)} />
            })}
        </div>
    )
}
