import React, { Component } from 'react';
import { Button, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente sino que crea un Card de reactstrap
const Sino = (props) => {
  return (<>
    <Card style={{ width: '18rem' }}>
      {/* Paso la imagen con props */}
      <CardImg src={props.imagen} />
      <CardBody>
        {/* Paso el título */}
        <CardTitle tag="h5">{props.Titulo}</CardTitle>
        {/* Botones que en el onClick llama a una funcion que al hacer click pone la imagen */}
        <Button onClick={() => props.onClick(props.imagenSi)}>
          {props.textobotonSI}
        </Button>
        {" "}
        <Button onClick={() => props.onClick(props.imagenNo)}>
          {props.textobotonNO}
        </Button>
      </CardBody>
    </Card>
  </>);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: "gatoo.jpg"
    }
  }


  f(param) { this.setState({ imagen: param }) }

  render() {
    return (
      <div className="App">
        <Sino
          imagen={this.state.imagen}
          imagenSi="gatoo.jpg"
          imagenNo="michi.jpeg"
          Titulo="Yes or Not"
          textobotonSI="Oh yes!"
          textobotonNO="Oh no!"
          onClick={(x) => this.f(x)}
        />
      </div>
    );
  }
}

export default App;