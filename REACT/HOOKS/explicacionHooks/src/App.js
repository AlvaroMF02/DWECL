// primero se importa el hook es {esto}
import React,{ useState,useEffect,createContext } from 'react';
// useEffect = cada vez que haya un cambio en la página llama a useEffect
// createContext = hace que se comparta el texto entre todos los hijos que quieran utilizarlo


// HOOK CON EL QUE SE CREA UNA ESPECIE DE ESTADO COMO SI  FUERA UNA APP PERO BETTER
/*
function App() {
  const [contador,setContador]=useState(0);
  // componente con una funcion dentro
  const aumenta=()=>{setContador(contador+1)}
  return (
    <div className="App">
      {/* Se llama al hook entre {} */   /*}
      <h1>Has hecho click {contador} veces</h1>
      {/* Se edita el contador llamandolo asi */  /*}
      <button onClick={()=>setContador(contador+1)}>Click</button>
    </div>
  );
}
export default App;*/

// USA EL EL HOOK DE USEEFFECT
/*
function App() {
  const [contador,setContador]=useState(0);
  const [texto,setTexto]=useState("");
  const aumenta=()=>{setContador(contador+1)}

  // se ejecuta cada vez que se hace un cambio en la página
  // va a tomar como parámetro una funcion
  // cambia el title de la página usando el DOOM virtual
  useEffect(
    ()=>{
      document.title = "Hemos hehco click " + contador+ " veces"
      // coge el title y lo pone en el de texto
      setTexto(document.title)
  }
  );

  return (
    <div className="App">
      <h1>Has hecho click {contador} veces</h1>
      <button onClick={()=>setContador(contador+1)}>Click</button>
      <p>{texto}</p>
    </div>
  );
}
export default App;*/


// "ADELGAZAR LO QUE ESTA HECHO ARRIBA"
function App() {
  const [texto,setTexto]=useState("Alboran");
  return (
    <div className="App">
      <h1> {texto} </h1>
      <Componente2 texto = {texto}/>
    </div>
  );
}

// componente2 que coge el texto de la App como parámetro
const Componente2=(props)=>{
  return(
    <>
      <h2>{props.texto}</h2>
      <Componente3 texto = {props.texto}/>
    </>
  )
}

// componente2 que coge el texto del componente2 como parámetro
const Componente3=(props)=>{
  return(
    <h2>{props.texto}</h2>
  )
}

// hacer componente 5 sin usar las props


export default App;



