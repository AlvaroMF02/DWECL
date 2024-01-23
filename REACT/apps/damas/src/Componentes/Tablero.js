import React from 'react'
import { Button } from 'reactstrap';

const Tablero = ({ tableroApp, funcionClick }) => {

    let tablero = tableroApp;

    // Relleno el tablero con botones   (cada boton puede ser un componente)
    for (let i = 0; i < tablero.length; i++) {
        tablero[i] = []
        for (let j = 0; j < tablero.length; j++) {
         tablero[i][j]= 0
        }
        tablero[i].push(<br></br>)
    }
    console.log(tablero)

    return (
        <div>
            {tablero}
        </div>
    );
}

export default Tablero