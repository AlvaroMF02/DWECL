import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './componentes/Carrusel'
import './App.css';
import Resultado from './componentes/Resultado.js'




function App () {
  const [resultado,setResultado] = useState(0);
  const [formAcabado,setFormAcabado] = useState(false);


  // Recoger la cantidad de puntos y si se ha terminado el formulario
  function comprobarDatos(contador, finForm){
    if(!finForm) return
    setFormAcabado(true)
    setResultado(contador)
    // console.log(contador + " - " + finForm)
  }


  let obj;

  if(!formAcabado){
     obj =  <Carrusel datos={comprobarDatos}></Carrusel>
  }else{
    obj =  <Resultado puntos={resultado}/>
  }

  return (
    <div className="App">
     {obj}
    </div>
  );
}

export default App;
