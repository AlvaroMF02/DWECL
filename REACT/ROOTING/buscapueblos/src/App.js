import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Buscador from './Componentes/Buscador';


function App() {
  const [pueblos, setContador] = useState(["Villanueva del Arzobispo", "Villanueva del Trabuco", "Villacarrillo", "Ubeda", "Cazorla"]);

  return (
    <div className="App">
      <Buscador pueblos={pueblos}/>
      
    </div>
  );
}

export default App;
