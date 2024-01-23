import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablero from './Componentes/Tablero';



function App () {

  const [tablero, setTablero] = useState(Array(8))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tablero de damas</h1>
        <Tablero tableroApp={tablero}/>
      </header>
    </div>
  );

}
export default App;