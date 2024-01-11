import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import ListaCasas from './Componentes/ListaCasas';
import Formulario from './Componentes/Formulario';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casas: [
        { id: 1, habitaciones: 3, zona: "pueblo", alquilada: "Si" },
        { id: 2, habitaciones: 5, zona: "sierra", alquilada: "No" },
        { id: 3, habitaciones: 3, zona: "pueblo", alquilada: "Si" }
      ]
    }
  }

  handlerCasaNueva(event) {
    event.preventDefault()
    let copiaCasas = this.state.casas
    let auxId = copiaCasas.length + 1
    let auxCasa = {
      id: auxId,
      habitaciones: event.target.InpHabitaciones.value,
      zona: event.target.InpZona.value,
      alquilada: event.target.InpAlquiler.value,
    }
    copiaCasas.push(auxCasa)
    this.setState({ casas: copiaCasas })
  }

  borrar(e) {
    // let copiaCasas = this.props.lista;
    // copiaCasas = copiaCasas.filter(v => v.id != e)
    console.log(e)
  }

  render() {
    return (
      <div className="App">
        <h1>¡Agrega una casa nueva!</h1>
        <ListaCasas lista={this.state.casas} funcionBorrado={(e) => this.borrar(e)} />
        <Formulario funcion={(e) => this.handlerCasaNueva(e)} />
      </div>
    );
  }
}

export default App;