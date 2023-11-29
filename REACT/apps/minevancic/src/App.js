import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Button } from 'reactstrap';
import Campo from './componentes/Campo';
import Botonera from './componentes/Botonera';


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


  render() {
    return (
      <div className="App">
        <Botonera />
      </div>
    );
  }
}

export default App;
