import React, { useState } from 'react';
import ListadoUsuarios from './Componentes/ListadoUsuarios';
import Formulario from './Componentes/Formulario';
import './App.css';


function App() {
  const [usuarios, setUsuarios] = useState(
    [
      { id: 1, nombre: "perico", edad: 19 },
      { id: 2, nombre: "juanico", edad: 23 },
      { id: 3, nombre: "andrés", edad: 27 }
    ]
  );

  function handleOnAddUser(event) {

    event.preventDefault();
    let idAux = usuarios.length + 1

    let usuarioAux = {
      id:idAux,
      nombre: event.target.nombre.value,
      edad: event.target.edad.value
    };

    let tmp = usuarios;
    tmp.push(usuarioAux);
    console.log(tmp)
    

    // inserta a los usuarios pero después no se muestran
    // si hago alguna actualizacion en el entorno es cuando se actualiza la lista
    setUsuarios(tmp)
  }

  return (
    <div className="App">
      <div>
        <p><strong>Añade usuarios</strong></p>
        <ListadoUsuarios usuarios={usuarios} />
        <Formulario onAddUser={(e) => handleOnAddUser(e)} />
      </div>
    </div>
  );
}

export default App;