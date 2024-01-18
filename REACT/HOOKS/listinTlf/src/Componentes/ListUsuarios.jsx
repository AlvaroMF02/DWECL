import React from 'react'
import { Usuario } from './Usuario'

export const ListUsuarios = (props) => {
    return (
        <ul>
            {props.lista.map((valor, indice) => {
                return (
                    <li>
                        <Usuario
                            nombre={valor.nombre}
                            numero={valor.numero}
                            key={indice}
                        />
                        <button onClick={() => props.funcion(valor)}>Borrar</button>
                    </li>
                );
            })}
        </ul>
    )
}
