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
    // contar todos los puntos del contador y setear resultado
    let suma = contador.reduce((v1,v2)=>v1+v2);
    setResultado(suma)
  }

  function repetirTest(){
    setFormAcabado(false)
    setResultado(0)
  }

  let obj;

  if(!formAcabado){
     obj =  <Carrusel datos={comprobarDatos}></Carrusel>
  }else{
    obj =  <Resultado puntos={resultado} repetir={()=>repetirTest()}/>
  }

  return (
    <div className="App">
     {obj}
    </div>
  );
}

export default App;
