import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

// Creo un componente Boton donde creo un boton al que le digo que pase una funcion en el onclick
function Boton(props) {
  return (
    <Button onClick={() => props.cambia()}>
      {props.nombre}
    </Button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letrero: "Saludo en diferentes idiomas",
    }
  }

  // Cambian el estado de letrero dependiendo de a la que llames
  cambiaIngles() {
    this.setState({ letrero: "Hello" })
  }
  cambiaFrances() {
    this.setState({ letrero: "Bonjour" })
  }
  cambiaEspayol() {
    this.setState({ letrero: "Hola" })
  }


  // Lo que se muestra
  render() {
    return (
      <div className="App">
        {/* Manera facil usando un boton normal*/}
        {/* <h1>{this.state.letrero}</h1>
        <Button onClick={() => this.cambiaIngles()}>Ingles</Button>
        <Button onClick={() => this.cambiaFrances()}>Frances</Button>
        <Button onClick={() => this.cambiaEspayol()}>Español</Button> */}

        {/* Llamando al componente creado pasandole el nombre que va dentro del boton y */}
        {/* a la funcion que quiero llamar al pulsarlo */}
        <h1>{this.state.letrero}</h1>
        <Boton nombre={"Inglés"} cambia={() => this.cambiaIngles()}/>
        <Boton nombre={"Francés"} cambia={() => this.cambiaFrances()}/>
        <Boton nombre={"Español"} cambia={() => this.cambiaEspayol()}/>
      </div>
    );
  }
}

export default App;
