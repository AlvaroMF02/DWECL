import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Botonera from './Componentes/Botonera.js';


const MapaBotones = (props) => {
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // campo: Array(9).fill(Array(9)),
      // listaBotones: , /*aquí almaceno los colores de los botones*/
      
      listaColores: ["primary", "danger"],
      // tendrás que añadir más atributos al state como el turno...
    }
  }

  // ORDEN
  // Crear el tablero
  // Hacer los turnos con boolean
  // hacer el movimiento de las fichas
  // comprobar el gandor

  // AL CLICK
  // ¿Hay ganador?
  // Ver si es la fila 0 si no nada
  // busco la posicion en la que se queda la ficha
  // coloco la ficha
  // cambio el turno

  componentWillMount() {
    // Utilízalo si necesitas hacer algo antes de renderizar
  }
  render() {
    return (
      <div className="App">
        <Botonera></Botonera>
      </div>
    );
  }
}
export default App;