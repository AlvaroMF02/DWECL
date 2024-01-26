import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Spinner, Button } from 'reactstrap';


function Boton(props) {
  return (
    <Button color={props.color} onClick={() => props.cambia()}>
      {props.nombre}
    </Button> //pruea
  )
}
// Funcion que pide el color y una funcion
const Circulo = (props) => {
  return (
    <Spinner color={props.color} onClick={()=>props.func()} type="grow"/>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "secondary",
      letrero:"Letrero",
    }
  }

  // Cambian el estado de letrero dependiendo del boton
  cambiaSecondary() {
    this.setState({ color: "secondary" })
  }
  cambiaDanger() {
    this.setState({ color: "danger" })
  }
  cambiaPrimary() {
    this.setState({ color: "primary" })
  }

  // Cambiar el letrero poniendo el color que tiene de estado
  cambiarLetrero(){
    this.setState({ letrero: this.state.color })
  }

  // Lo que se muestra por pantalla
  render() {
    return (
      <div className="App">
        <h1>{this.state.letrero}</h1>
        {/* <Spinner color={this.state.color} type="grow" /> */}
        <Circulo color={this.state.color} func={()=>this.cambiarLetrero()}/>
        <Boton color={"secondary"} nombre="gris" cambia={() => this.cambiaSecondary()} />
        <Boton color={"danger"} nombre="rojo" cambia={() => this.cambiaDanger()} />
        <Boton color={"primary"} nombre="azul" cambia={() => this.cambiaPrimary()} />
      </div>
    );
  }
}

export default App;
