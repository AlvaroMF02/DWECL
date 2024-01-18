import { useState } from 'react'
import './App.css'
import { ListUsuarios } from './Componentes/ListUsuarios'
import Formulario from './Componentes/Formulario'
import Buscador from './Componentes/Buscador'


function App() {

  const [busqueda, setBusqueda] = useState("")
  const [usuarios, setUsuario] = useState([
    { nombre: "Alvaro", numero: 647846533 },
    { nombre: "Jose", numero: 653487622 }
  ])


  // ---- Añadir un usuario ----
  function handleUsuNuevo(event) {
    event.preventDefault()
    const usuarAux = {
      nombre: event.target.nombreInp.value,
      numero: event.target.tlfInp.value
    }
    // vaciar los input
    event.target.nombreInp.value = ""
    event.target.tlfInp.value = ""

    const listaAux = JSON.parse(JSON.stringify(usuarios)) //usuarios.slice()

    listaAux.push(usuarAux)
    setUsuario(listaAux)
  }

  // ---- Borrar un usuario ----
  function handleBorrar(usuarioBorr) {
    const usuBorr = usuarios.filter((v) => v !== usuarioBorr)
    setUsuario(usuBorr)
  }

  // ---- Buscar a un usuario ----
  function handleBuscar(event) {
    let busquedaAux = event.target.value
    setBusqueda(busquedaAux)
  }

  return (
    <>
      <h1>Listín telefónico</h1>
      <ListUsuarios lista={usuarios} funcion={(e) => handleBorrar(e)} />
      <Formulario funcion={handleUsuNuevo} />
      <Buscador funcion={handleBuscar} usuarios={usuarios} busqueda={busqueda} />
    </>
  )
}

export default App
