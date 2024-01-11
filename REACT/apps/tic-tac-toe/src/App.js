import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { Caja } from './Componentes/Caja.js';
import { Tablero } from './Componentes/Tablero.js';

function App() {

  // minuto 15:17 cuando importa para hacer el hook
  const tablero = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]

  return (
    <div className="App">
      <Tablero tablero={tablero} onClick={null}/>
    </div>
  );

}

export default App;
