import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';


// Devuelve un formulario que la hacer submit llama al handle para coger lo que se escribe en el input
class Deseo extends Component {
  render() {
    return (
      <form onSubmit={this.props.alDesear}>
        <input type='text' placeholder='Escribe tu deseo' name='inputDeseo' />
      </form>
    );
  }
}

// Componente Lista de deseos devuelve una lista
class ListaDeseos extends Component {
  render() {
    return (
      <ul>
        {this.props.deseos.map(valor=>{
          return(
            <li>
              {valor}&nbsp;
              <Borrar deseo={valor} quitar={(elemento)=>this.props.quitar(elemento)}/>
            </li>
          );
        })}
      </ul>
    );
  };
}

function Borrar (props){
  return(
    <Button className='borrar' deseo={props.deseo} onClick={(deseo)=>props.quitar(props.deseo)}>
      Borrar {props.deseo}
    </Button>
  );
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deseos: ["Iphone","Novio"],
    }
  }

  handleNuevoDeseo (event){
    event.preventDefault();
    let aux = [];
    if(this.state.deseos !== "null" && this.state.deseos !== "undefined"){
      aux = this.state.deseos.slice();
    }
    aux.push(event.target.inputDeseo.value);
    this.setState({deseos:aux});
  }

  quitar(elemento){
    let aux = [];
    if(this.state.deseos !== "null" && this.state.deseos !== "undefined"){
      aux = this.state.deseos.slice();
    }
    // filtra por el elemento que se ha pasado (el que se va a borrar)
    aux = aux.filter(item => item!== elemento);
    this.setState({deseos:aux});
  }


  render() {
    return (
      <div className="App">

        <h1>Lista de deseos</h1>
        <ListaDeseos deseos={this.state.deseos} quitar={(e) => this.quitar(e)}/>

        <h2>Añade tu deseo</h2>
        <Deseo alDesear={this.handleNuevoDeseo.bind(this)}/>

      </div>
    );
  }
}

export default App;