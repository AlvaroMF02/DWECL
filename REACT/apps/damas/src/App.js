
import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// Renderizar el tablero
function Botonera({ tablero }) {
  // Parseo la matriz para hacer las filas
  const vistaTablero = tablero.map((fila, indexFila) => {
    const filaAux = fila.map((e) => {
      // Por cada fila miro si es par para ver donde dejo el boton en blanco
      if (indexFila % 2 === 0) {
        // Miro si es pieza verde o gris para ponerle el botón al color
        const boton = e === 'verde' ? <><Button outline /><Button color='secondary' /></> : <><Button outline /><Button color='success' /></>
        return boton
      } else {
        const boton = e === 'verde' ? <><Button color='secondary' /><Button outline /></> : <><Button color='success' /><Button outline /></>
        return boton
      }
    })
    return <>{filaAux}<br /></>
  })

  return (
    <div className='tablero'>
      {vistaTablero}
    </div>
  )
}

function App() {

  const [tablero, setTablero] = useState([])

  // Crea la matriz con los colores que se le asignarán
  // Se ejecuta solo antes de renderizar
  useEffect(() => {
    const auxTablero = []

    for (let i = 0; i < 8; i++) {
      auxTablero.push([])
      for (let j = 0; j < 4; j++) { // 4 pq solo juegan 4 en cada fila
        if (i < 4) {
          auxTablero[i].push('verde')
        } else {
          auxTablero[i].push('gris')
        }
      }
    }

    setTablero(auxTablero)
  }, [])

  return (
    <div className="App">
      <Botonera tablero={tablero} />
    </div>
  )
}
export default App