import React from 'react';
import './Caja.css';

export const Caja = ({valor,onClick})=>{

    const estilo = valor === "X" ? "caja x" : "caja o";

    return(
        <div >
            <button className={estilo} onClick={onClick}>{valor}</button>
        </div>
    )
}