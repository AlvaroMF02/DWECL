import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Campo from './componentes/Campo';
import Botonera from './componentes/Botonera';
import SelectorMinas from './componentes/SelectorMinas';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posicion:{"x":0,"y":0},
      minas: 10,
      filas: 10,
      columnas: 10,
    }
  }

  ponerMinas(){
    this.setState({ minas: this.state.minas + 1 });
  }

  quitarMinas(){
    this.setState({ minas: this.state.minas - 1 });
  }

  render() {
    return (
      <div className="App">
        {<h1>Minevancic</h1>}
        
        <Campo filas={this.state.filas} columnas={this.state.columnas}/>
        <Botonera />
        <SelectorMinas cantidad = {this.state.minas}/>
        
      </div>
    );
  }
}

export default App;
