import React, { Component,useState } from 'react';
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {

  const [tablero, setTablero] = useState(Array(8))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tablero de damas</h1>

      </header>
    </div>
  );

}
export default App;