import React from 'react';
import { Button, useState } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './componentes/Carrusel'
import Formulario from './componentes/Formulario';
import "./App.css";


function App () {
  
  return (
    <div className="App">
      <Carrusel className="carrusel"></Carrusel>

    </div>
  );
}

export default App;
