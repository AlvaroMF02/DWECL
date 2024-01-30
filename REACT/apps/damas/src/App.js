import React, { Component,useState } from 'react';
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Tablero ({tablero}) {
  

  return tablero
}

function App () {

  const [tablero, setTablero] = useState(Array(8))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tablero de damas</h1>
        <Tablero tablero = {tablero}/>
      </header>
    </div>
  );

}
export default App;

/*
import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Botonera(props) {
  //COMPONENTE QUE RENDERIZA EL TABLERO
  return (
    Array(8).fill(Array(8).fill(null)).map((v, i) => <Row style={{ margin: '1rem' }} xs='8' key={i}>{v.map((c, j) => {
      let elemento = undefined;
      props.tabla.find(v => v.find(c => {
        if (c.split(",")[0] == i && c.split(",")[1] == j)
          elemento = c;
      }))
      if (elemento) {
        return <Col key={i + "" + j} style={{ padding: 0 }}><Button style={{ width: '100%', height: '100%' }} color={elemento.split(",")[2]}></Button></Col>
      } else {
        return <Col key={i + "" + j} style={{ padding: 0 }}><Button style={{ width: '100%', height: '100%' }} color="secondary" outline></Button></Col>
      }
    })}</Row>
    )
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //DEFINE EL ESTADO DE TU COMPONENTE PRINCIPAL
      //Recuerda que si defines una tabla 8x8 tu estado será inválido.
      tabla: Array(8),
    };
  }

  componentWillMount() {
    //ESTE MÉTODO SE EJECUTARÁ AL PRINCIPIO DE LA APLICACIÓN. ANTES DE RENDERIZAR.
    let aux = JSON.parse(JSON.stringify(this.state.tabla));
    let tableroEntero = Array(8).fill(Array(8).fill(null));
    const divisor = 2;
    tableroEntero.forEach((fila, i) => {
      let array = [];
      fila.forEach((columna, j) => {
        if (i == 0 || i % divisor === 0) {
          if (j % divisor !== 0) {
            if (i < 5) {
              array.push(i + "," + j + ",secondary")
            } else {
              array.push(i + "," + j + ",success")
            }
          }
        } else {
          if (j % divisor === 0) {
            if (i < 5) {
              array.push(i + "," + j + ",secondary")
            } else {
              array.push(i + "," + j + ",success")
            }
          }
        }
      })
      aux.push(array);
    })
    this.setState({ tabla: aux.filter(v => v != null) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* //AQUÍ TIENES QUE RENDERIZAR EL COMPONENTE BOTONERA *//*}
          <Botonera tabla={this.state.tabla} />
        </header>
      </div>
    );
  }
}
export default App;
*/