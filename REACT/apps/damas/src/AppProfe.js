import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Botonera ({tablero}) {

  // // COMPONENTE QUE RENDERIZA EL TABLERO

  let aux = [];

    for (let i = 0; i < tablero.length ; i++) {
      aux[i] = Array(8)
      for (let j = 0; j < tablero[i].legth; j++) {
        aux[i][j] = 0
      }
      tablero.push(<br></br>)
    }

  //   return tablero
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablero: Array(8).fill(0),
    };
  }

  // pq el estado no se modifica aqui
  componentWillMount () {    
    let arr=[];
    for (let i = 0; i < 8; i++) {
      let aux = [];
      for (let j = 0; j < 8; j++) {
        aux.push(0)
      }
      arr.push(aux);
    }
    this.setState({tablero: arr})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Tablero de damas</h1>
            <Botonera tablero = {this.state.tablero}/>
        </header>
      </div>
    );
  }
}
export default App;