import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Supermercados({ poblacion }) {
  // Calculo el número de personas totales en la población
  const supers = []

  poblacion.map(fila => {
    fila.map(col => {
      if (col.supermarket.abierto) {
        supers.push(col.supermarket)
      }
      return col
    })
    return fila
  })

  let mostrarSupers = <p>No hay supermercados en este momento</p>

  if (supers.length !== 0) {
    mostrarSupers = <ul>
      {
        supers.map((s, index) => {
          const clientes = Math.ceil(s.clientes * 100) / 100
          return <li key={crypto.randomUUID()}>{index + 1}. &emsp;{`El supermercado con posición (${s.posicion.x + 1}, ${s.posicion.y + 1}) tiene ${clientes} clientes`}</li>
        })
      }
    </ul>
  }

  return (
    <div className="supermercados">
      <h3>Supermercados</h3>
      {mostrarSupers}
    </div>
  )
}


const POBLACION = [
  [0, 5, 4, 2, 9, 8, 0, 8, 8],
  [1, 7, 21, 23, 44, 5, 3, 4, 0],
  [2, 6, 32, 22, 33, 8, 4, 2, 8],
  [1, 2, 43, 4, 56, 65, 34, 11, 8],
  [2, 22, 32, 3, 42, 62, 43, 21, 0],
  [2, 2, 23, 34, 64, 24, 42, 15, 7],
  [0, 2, 36, 43, 61, 26, 64, 12, 0],
  [1, 2, 15, 43, 34, 2, 12, 2, 3],
  [1, 0, 12, 3, 0, 0, 21, 2, 2]
]

// recorre toda la matriz para guardar todos los datos en objetos
const POBLOBJS = POBLACION.map((fila) => {
  const filaAux = fila.map((col) => {
    const colAux = { personas: col, supermarket: { abierto: false, posicion: { x: -1, y: -1 }, clientes: 0 } }
    return colAux
  })
  return filaAux
})


function App() {

  const [poblacion, setPoblacion] = useState(POBLOBJS)

  // Contar la cantidad de personas
  const nPersonas = poblacion.reduce((acumFila, currentFila) => {
    return acumFila + currentFila.reduce((acum, current) => acum + current.personas, 0)
  }, 0)


  // Mostrar población
  const mostrarPoblacion = <div className='tabla'>{poblacion.map((fila, y) => {
    const nuevaFila = <div key={crypto.randomUUID()} className='fila'>{fila.map((columna, x) => {
      const supermarket = poblacion[y][x].supermarket.abierto ? 'supermarket' : ''
      const nuevaCol = <Button outline key={crypto.randomUUID()} className={`col ${supermarket}`} onClick={() => nuevoMarket(y, x)}>{columna.personas}</Button>
      return nuevaCol
    })}</div>
    return nuevaFila
  })}</div>

  function nuevoMarket(y, x) {
    const aux = JSON.parse(JSON.stringify(poblacion))
    if (aux[y][x].supermarket.abierto) {
      aux[y][x].supermarket.abierto = false
      aux[y][x].supermarket.posicion = { x: -1, y: -1 }
    } else {
      aux[y][x].supermarket.abierto = true
      aux[y][x].supermarket.posicion = { x, y }
    }

    // Una vez añadido o quitado el market, actualizo sus clientes
    marcarClientes(aux)

    setPoblacion(aux)
  }

  function marcarClientes(matriz) {
    // Reseteo los clientes que tuvieran los supers abiertos
    matriz.map(fila => {
      return fila.map(col => {
        col.supermarket.clientes = 0
        return col
      })
    })

    // Recorro toda la población
    matriz.forEach((fila, y) => {
      fila.forEach((col, x) => {
        repartirPoblacion(col, x, y, matriz)
      })
    })
  }

  function repartirPoblacion(casilla, iniX, iniY, matriz) {
    // Establezco los parámetros máximos de este punto concreto para no pasarme iterando
    const ALT_MAX = matriz.length - iniY > iniY ? matriz.length - iniY : iniY
    const LONG_MAX = matriz.length - iniX > iniX ? matriz.length - iniX : iniX
    const RANGO_MAX = ALT_MAX > LONG_MAX ? ALT_MAX : LONG_MAX

    // Recorro de forma circular la matriz con el punto inicial como centro
    // Establezco el rango y lo voy agrandando hasta que encuentre el/los supermercado
    let rango = 0
    let encontrado = false
    while (!encontrado && rango <= RANGO_MAX) {
      const supersCercanos = []
      for (let i = iniY - rango; i < iniY + rango + 1; i++) {
        for (let j = iniX - rango; j < iniX + rango + 1; j++) {
          // Controlo que esté dentro de la matriz que he pasado
          if (i >= 0 && j >= 0 && i < matriz.length && j < matriz[i].length) {
            // Si en esa posición hay un supermercado abierto, lo añado a los supermercados
            if (matriz[i][j].supermarket.abierto) {
              supersCercanos.push(matriz[i][j].supermarket)
              // Rompo el bucle porque solo me interan los de la distancia mínima
              encontrado = true
            }
          }
        }
      }
      // Si he encontrado algún super cercano, reparto la población de la casilla entre ellos
      if (supersCercanos.length > 0) {
        supersCercanos.forEach(market => {
          market.clientes += casilla.personas / supersCercanos.length
          // Actualizo en la matriz
          matriz[market.posicion.y][market.posicion.x].supermarket = market
        })
      }
      rango++
    }
  }

  return (
    <div className="App">
      <h1>Supermarkets</h1>
      {mostrarPoblacion}
      <p>(Población:{nPersonas})</p>
      <Supermercados poblacion={poblacion} />
    </div>
  )
}

export default App