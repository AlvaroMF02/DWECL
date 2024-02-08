import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './componentes/Carrusel'
import './App.css';


function App () {
  const [resultado,setResultado] = useState(0);


  return (
    <div className="App">
      <Carrusel className="carrusel"></Carrusel>
    </div>
  );
}

export default App;
