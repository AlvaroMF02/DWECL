import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Component } from 'react'

class App extends Component {
  // Constructor con los atributos
  constructor(props) {
    super(props)
    this.state = {
      euros: 0,
      factor: 1.1,
    }
  }

  // suma uno a los euros
  aumentar(){
    let auxeuro = this.state.euros+1
    this.setState({euros:auxeuro})
  }

  // resta uno a los euros
  disminuir(){
    let auxeuro = this.state.euros-1
    // Para que no salga negativo
    if (auxeuro >=0) this.setState({euros:auxeuro})
  }

  // Lo que se muestra por pantalla
  render() {
    return (
      <div className="App">
        {this.state.euros} Euros equivalen a {this.state.euros * this.state.factor} dolares <br />
      <button onClick={()=>this.aumentar()}>+</button>
      <button onClick={()=>this.disminuir()}>-</button>
      </div>
    )
  }

}

export default App
