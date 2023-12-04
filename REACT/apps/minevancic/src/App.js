import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Campo} from './componentes/Campo'
import {Botonera} from './componentes/Botonera';
import SelectorMinas from './componentes/SelectorMinas';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posicion: { x: 0, y: 0 },
      minas: 10,
      filas: 10,
      columnas: 10,
      campo: Array(10).fill(Array(10)),
      finalizado: false,
    }
  }

  // Funciones para subir y bajar las minas
  ponerMinas() {
    if (this.state.minas < this.state.filas*this.state.columnas) {
      this.setState({ minas: this.state.minas + 1 });
    }
  }
  quitarMinas() {
    if (this.state.minas > 1) {
      this.setState({ minas: this.state.minas - 1 });
    }
  }

  // Cambiar la posicion
  arriba(){
    if (this.state.posicion.y != 0) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.y = this.state.posicion.y - 1
      this.setState({posicion:posActual}) 
    }    
  }
  abajo(){
    if (this.state.posicion.y != this.state.filas - 1) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.y = this.state.posicion.y + 1
      this.setState({posicion:posActual}) 
    }   
  }
  derecha(){
    if (this.state.posicion.x != this.state.columnas - 1) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.x = this.state.posicion.x + 1
      this.setState({posicion:posActual}) 
    }   
  }
  izquierda(){
    if (this.state.posicion.x != 0) {
      let posActual = JSON.parse(JSON.stringify(this.state.posicion))
      posActual.x = this.state.posicion.x - 1
      this.setState({posicion:posActual}) 
    }
  }

  render() {
    return (
      <div className="App">
      <h1>Minevancic</h1>
      <span>Posicion: {this.state.posicion.x}, {this.state.posicion.y}</span>
        
        <Campo campo={this.state.campo} posicion={this.state.posicion} />
        <Botonera posicion={this.state.posicion} arriba={()=>this.arriba()} abajo={()=>this.abajo()} izquierda={()=>this.izquierda()} derecha={()=>this.derecha()}/>
        <SelectorMinas cantidad={this.state.minas} funcionSubir={() => this.ponerMinas()} funcionBajar={() => this.quitarMinas()} />

      </div>
    );
  }
}

export default App;
