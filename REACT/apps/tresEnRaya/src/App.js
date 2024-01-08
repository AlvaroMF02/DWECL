import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Botonera } from './Componentes/Botonera.js';



const MapaBotones = (props) => {
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turno: "Azul",
      turnoB: true,
      campo: Array(10).fill(Array(10)),
      posicion: { x: 0, y: 0 },
      ganador: false,
    }
  }

  // ORDEN
  // Crear el tablero 
  // Hacer los turnos con boolean
  // hacer el movimiento de las fichas
  // comprobar el ganador




  alClick(x, y) {
    /* AL CLICK
     ¿Hay ganador?
     - - Ver si es la fila 0 si no nada
     - busco la posicion en la que se queda la ficha
     - coloco la ficha
     - cambio el turno*/

    // si hay ganador se sale
    if (!this.state.turnoB) return
    // si no es la fila 0 se sale
    if (x !== 0) return

    if(this.state.turnoB){
      // poner el azul en el tablero
    }else{
      // poner el rojo en el tablero
    }


    // cambiar el turno
    if (this.state.turno == "Azul") {
      this.setState({ turno: "Rojo" })
    } else {
      this.setState({ turno: "Azul" })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Turno: {this.state.turno} </h1>
        {/* paso la posicion y la funcion al hacer click (con parametros de la posicion)*/}
        <Botonera posicion={this.state.posicion} alClick={(x, y) => this.alClick(x, y)}></Botonera>
      </div>
    );
  }
}
export default App;