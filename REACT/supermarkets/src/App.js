import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Botonera = ({matriz,funcion}) =>{
  const mapa = matriz.map((fila,indFila) => { // valor de la fila
    return (
      fila.map((num, indCol) => {  // num es el valor de la columna e ind es el indice
        
        if (indCol == 0) {
          return (
            <><br></br><Button outline onClick={()=>funcion(indFila,indCol)} color='success' className='btnMapa'>{num}</Button></>
          );
        }else{
          return (
            <Button outline onClick={()=>funcion(indFila,indCol)} color='success' className='btnMapa'>{num}</Button>
          );
        }
      })
    );
  })
  return (
    <>
      {mapa}
    </>

  );
}

function App () {

  const [posTien, setPosTien] = useState([]);
  const [poblacion, setPoblacion] = useState(
    [[0, 5, 4, 2, 9, 8, 0, 8, 8],
    [1, 7, 21, 23, 44, 5, 3, 4, 0],
    [2, 6, 32, 22, 33, 8, 4, 2, 8],
    [1, 2, 43, 4, 56, 65, 34, 11, 8],
    [2, 22, 32, 3, 42, 62, 43, 21, 0],
    [2, 2, 23, 34, 64, 24, 42, 15, 7],
    [0, 2, 36, 43, 61, 26, 64, 12, 0],
    [1, 2, 15, 43, 34, 2, 12, 2, 3],
    [1, 0, 12, 3, 0, 0, 21, 2, 2]])

    let poblTotal = 0;
    for (let i = 0; i < poblacion.length; i++) {
      poblTotal += poblacion[i].reduce((v1,v2)=>v1+v2)
    }

    function haceClick(fila,colu){
      const auxTien = JSON.parse(JSON.stringify(posTien))
      const aux = {f: fila,c:colu}

      auxTien.push(aux)

      setPosTien(auxTien)
      console.log(posTien)
    }

  return (
    <div className="App">
      <h1>Mapa población</h1>
      <Botonera matriz={poblacion} funcion={(i,j)=>haceClick(i,j)}></Botonera>
      <p>( Poblacion total: {poblTotal} )</p>

      
    </div>
  );
}

export default App;
