import React, { useState } from 'react'
import './App.css'
import Buscador from './Componentes/Buscador'

function App () {
  const [pueblos] = useState(['Villanueva', 'Jaen', 'Villacarrillo', 'Ubeda', 'Cazorla'])
  const [busqueda, setBusqueda] = useState('')

  const handleBuscaPueblos = (event) => {
    setBusqueda(event.target.value)

    console.log(busqueda)
  }

  const mostrarPueblos = () => {
    if (busqueda === '') {
      return (
        <ul>
          {pueblos.map(valor => {
            return (
              <li>
                {valor}
              </li>
            )
          })}
        </ul>
      )
    } else {
      return (
        <ul>

          {pueblos.filter(v => v.toLowerCase().match(busqueda.toLowerCase()) !== '' && v.toLowerCase().match(busqueda.toLowerCase()) != null).map(v => <li>{v}</li>)}
        </ul>
      )
    }
  }
  return (
      <div className="App">
        <h1>Buscar pueblo</h1>
        <Buscador pueblos={pueblos} funcion={(e) => handleBuscaPueblos(e)} />
        {mostrarPueblos()}
      </div>
  )
}

export default App
