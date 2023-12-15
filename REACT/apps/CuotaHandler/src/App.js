import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Button } from 'reactstrap';
import { Formulario } from './Componentes/Formulario';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuota: 0,
    }
  }

  handleSubmit(event) {
    // que no actualize al hacer submit
    event.preventDefault();
    // llamar a los datos del formulario
    let cantidad = event.target.cantidad.value;
    let interes = event.target.interes.value;
    let anyos = event.target.anyos.value;
    let meses = event.target.meses.value + anyos*12;

    let auxCuota = 0;

    auxCuota = cantidad * ((Math.pow((1 + interes),meses)*interes)/(Math.pow((1 + interes),meses)-1))

    this.setState({cuota: Math.round(auxCuota)})
  }

  render() {
    return (
      <div className="App">
        <p>Su cuota será de {this.state.cuota}</p>
        <Formulario cuenta={(e) => this.handleSubmit(e)} />
      </div>
    );
  }
}

export default App;
