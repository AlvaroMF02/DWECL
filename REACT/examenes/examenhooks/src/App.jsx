import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Creacion de cada usuario
const Usuario = (props) => {
  return (
    <>
      {props.nombre} {props.apellido} {props.numero}
    </>
  );
}

// Mustra la lista de los usuarios
const Mostrar = (props) => {
  return (
    <div>
      {props.lista.map((valor, indice) => {
        return (
          <li key={indice}>
            <Usuario
              nombre={valor.nombre}
              apellido={valor.apellido}
              numero={valor.numero}
            />
            <Button onClick={() => props.funcion(valor)}>X</Button>
          </li>
        );
      })}
    </div>
  );
}

// FORMULARIO con el que se añade a los usuarios
const Altas = (props) => {
  return (
    <Form onSubmit={props.funcion}>
      <FormGroup>
        <Label for="Nombre">Nombre:</Label>
        <Input name="nombre" id="nombre" placeholder="Introduzca nombre" />
        <Label for="Nombre">Apellidos:</Label>
        <Input name="apellidos" id="apellidos" placeholder="Introduzca apellidos" />
        <Label for="Nombre">Telefono:</Label>
        <Input name="telefono" id="telefono" placeholder="Introduzca telefono" />
        <br></br>
        <Button>Añadir</Button>
      </FormGroup>
    </Form>
  );
}

function App () {
  // Hook donde se van a ir guardando los usuarios
  const [usuarios, setUsuarios] = useState([])

  // Meter a un usuario (controlando el numero)
  function handleUsuNuevo (event) {
    event.preventDefault()
    const usuarioAux = {
      nombre: event.target.nombre.value,
      apellido: event.target.apellidos.value,
      numero: event.target.telefono.value
    }


    // si le cambio el  nombre a uno con el mismo numero se actualiza el nombre
    // del usuario que tiene ese numero
    // Comprobar que no se pueden meter usuarios con el mismo numero
    const copiLista = usuarios.filter(valor => valor.numero !== usuarioAux.numero)
    copiLista.push(usuarioAux)
    setUsuarios(copiLista)
  }

  // Borrar a un usuario
  function handleBorraUsu (usuBorr) {
    let aux = usuarios.filter(val => val !== usuBorr)
    setUsuarios(aux)
  }

  return (
    <div className="App">
      <h2>Listado de usuarios</h2>
      <Mostrar lista={usuarios} funcion={handleBorraUsu} />
      <br></br>
      <Altas funcion={handleUsuNuevo} lista={usuarios} />
    </div>
  );

}
export default App;