import React, { Component } from 'react';
import Usuario from './Usuario';

function ListadoUsuarios(props) {
    return (
        <ul>
            {props.usuarios.map(valor => {
                return (
                    <Usuario
                        key={valor.id}
                        id={valor.id}
                        nombre={valor.nombre}
                        edad={valor.edad}
                    />
                );
            })
            }
        </ul>
    );
}


export default ListadoUsuarios;