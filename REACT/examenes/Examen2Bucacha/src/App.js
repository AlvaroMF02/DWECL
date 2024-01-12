import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Muestra el tablero
const MapaBotones = (props) => {
  return props.listaBotones
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // NO MODIFICAR
      listaBotones: Array(9).fill(null),
    }
  }


  clica(x, y) {
    // Solo pinta al pulsar la primera linea
    if (x !== 0) return

    // Copia del tablero (mal?)
    let tablero = this.state.listaBotones;

    // Pintar el ultimo boton de la columna
    tablero[2][y] = <Button color="primary" />
    console.log(x + ", " + y)
    this.setState({ listaBotones: tablero })

  }

  // Termina de crear el tablero y actualiza el estado
  componentWillMount() {
    let tablero = this.state.listaBotones;

    //Rellenar el tablero con botones
    for (let i = 0; i < 9; i++) {
      tablero[i] = [];
      for (let j = 0; j < 9; j++) {
        tablero[i][j] = <Button outline onClick={() => this.clica(i, j)} />
      }
      tablero[i].push(<br></br>)
    }

    this.setState({ listaBotones: tablero })
  }

  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones listaBotones={this.state.listaBotones} />
      </div>
    );
  }
}

export default App;