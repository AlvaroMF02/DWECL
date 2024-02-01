import React from 'react'
import { Usuario } from './Usuario'

export const ListUsuarios = ({lista,funcion}) => {
    return (
        <ul>
            {lista.map((usuario, indice) => {
                return (
                    <li key={indice}>
                        <Usuario
                            nombre={usuario.nombre}
                            numero={usuario.numero}
                        />
                        <button onClick={() => funcion(usuario)}>Borrar</button>
                    </li>
                );
            })}
        </ul>
    )
}
