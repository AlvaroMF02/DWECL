import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { Caja } from './Componentes/Caja.js';
import { Tablero } from './Componentes/Tablero.js';

function App() {

  // Condiciones en las que se gana a lo bruto
  const jugadas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 1, 6]
  ]

  // Tablero
  const [tablero, setTablero] = useState(Array(9).fill(null))
  // Turno X
  const [turnoX, setTurnoX] = useState(true)
  // Ganador
  const [ganador, setGanador] = useState("")



  // se ejecuta al hacer click en una caja
  const handleClick = (cajaId) => {
    // copia del tablero, si el id de la caja es igual al indice del 
    // tablero, se devuelve una X
    let auxTablero = tablero.map((valor, indice) => {
      if (indice == cajaId) {
        return turnoX === true ? "X" : "O"
      } else {
        return valor
      }
    })
    // comprobar el ganador
    setGanador(comprobarGanador(auxTablero))

    // actualizamos el tablero con la copia
    setTablero(auxTablero)
    // va cambiando cada vez que se da un click
    setTurnoX(!turnoX)
  }

  const comprobarGanador = (tablero) => {
    for (let i = 0; i < jugadas.length; i++) {
      
      let [x, y, z] = jugadas[i]

      if (tablero[x] && tablero[x] === tablero[y] && tablero[y] === tablero[z]) {
        return tablero[x]
      }
    }
  }

  return (
    <div className="App">
      <Tablero tablero={tablero} onClick={handleClick} />
      Ha ganado: {ganador}
    </div>
  );

}

export default App;
