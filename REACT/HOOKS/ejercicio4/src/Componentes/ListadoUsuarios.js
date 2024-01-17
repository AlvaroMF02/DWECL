import React, { Component } from 'react';
import Usuario from './Usuario';

function ListadoUsuarios(props) {
    return (
        <ul>
            {props.usuarios.map((valor,indice) => {
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