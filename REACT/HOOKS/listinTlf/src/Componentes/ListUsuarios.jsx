import React from 'react'
import { Usuario } from './Usuario'

export const ListUsuarios = (props) => {
    return (
        <ul>
            {props.lista.map((valor, indice) => {
                return (
                    <li key={indice}>
                        <Usuario
                            nombre={valor.nombre}
                            numero={valor.numero}
                        />
                        <button onClick={() => props.funcion(valor)}>Borrar</button>
                    </li>
                );
            })}
        </ul>
    )
}
