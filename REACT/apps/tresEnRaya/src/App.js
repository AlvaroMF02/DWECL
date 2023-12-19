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
    }
  }
  
  // ORDEN
  // Crear el tablero 
  // Hacer los turnos con boolean
  // hacer el movimiento de las fichas
  // comprobar el ganador


  componentWillMount() {
    // Utilízalo si necesitas hacer algo antes de renderizar
  }

  // cambiarlo para que cuando llegue hasta arriba no cambie turno
  cambiarTurno() {
    if (this.state.turno == "Azul") {      
      this.setState({turno:"Rojo"})
    } else {      
      this.setState({turno:"Azul"})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Turno: {this.state.turno} </h1>
        <Botonera turno={this.state.turno} cambiarTurno={() => this.cambiarTurno()}></Botonera>
      </div>
    );
  }
}
export default App;