import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Campo } from './componentes/Campo'
import { Botonera } from './componentes/Botonera';
import SelectorMinas from './componentes/SelectorMinas';
import { BotonJugar } from './componentes/BotonJugar';
import './Estilos.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posicion: { x: 0, y: 0 },
      minas: 10,
      filas: 10,
      columnas: 10,
      campo: Array(10).fill(Array(10)), // cambiar por null cuando este acabado creo o por la funcion
      finalizado: false,
    }
  }

  // Crear el campo -> poner minas -> marcar distancias -> devolver el campo ya hecho
  crearCampo() {

    // crear el campo con las filas y columnas que ponga
    let filas = this.state.filas
    let columnas = this.state.columnas
    let tablero = Array(filas).fill(Array(columnas));

    // poner minas en el tablero
    // hacer con while mientras haya minas restar
    let numMinas = this.state.minas
    while (numMinas>0) {
      
    }
    
    for (let i = 0; i < numMinas; i++) {  // asi se pueden repetir y se pueden poner al inicio y final :(
      let minaFila = Math.floor(Math.random() * filas + 1);
      let minaColu = Math.floor(Math.random() * columnas + 1);
      // si no es ni la primera ni la ultima y es no disotinto de 0

      tablero[minaFila][minaColu] = 1;
    }

    // marcar distancias cop pega de minevancic :)


    // devolver el campo period
    return tablero;
  }

  // Funciones para subir y bajar las minas
  ponerMinas() {
    if (this.state.minas < this.state.filas * this.state.columnas) {
      this.setState({ minas: this.state.minas + 1 });
    }
  }
  quitarMinas() {
    if (this.state.minas > 1) {
      this.setState({ minas: this.state.minas - 1 });
    }
  }

  // Cambiar la posicion
  arriba() {
    if (this.state.posicion.y != 0) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.y = this.state.posicion.y - 1
      this.setState({ posicion: posActual })
    }
  }
  abajo() {
    if (this.state.posicion.y != this.state.filas - 1) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.y = this.state.posicion.y + 1
      this.setState({ posicion: posActual })
    }
  }
  derecha() {
    if (this.state.posicion.x != this.state.columnas - 1) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.x = this.state.posicion.x + 1
      this.setState({ posicion: posActual })
    }
  }
  izquierda() {
    if (this.state.posicion.x != 0) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.x = this.state.posicion.x - 1
      this.setState({ posicion: posActual })
    }
  }

  // lo reinicia todo, crear el campo, mostrarlo visualmente
  jugar() {
    this.setState({ posicion: { x: 0, y: 0 } })
  }

  render() {
    return (
      <div className="App">
        <h1>Minevancic</h1>
        <span>Posicion: {this.state.posicion.x}, {this.state.posicion.y}</span>

        <div id='botonesMinasJugar'>
          <SelectorMinas cantidad={this.state.minas} funcionSubir={() => this.ponerMinas()} funcionBajar={() => this.quitarMinas()} />
          <BotonJugar funcion={() => this.jugar()} />
        </div>
        <Campo campo={this.state.campo} posicion={this.state.posicion} />
        <Botonera posicion={this.state.posicion} arriba={() => this.arriba()} abajo={() => this.abajo()} izquierda={() => this.izquierda()} derecha={() => this.derecha()} />

      </div>
    );
  }
}

export default App;
