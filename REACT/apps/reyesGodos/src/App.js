import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// componente creado en componentes
import Flashcard from './componentes/FlascardComponent';




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
        <Flashcard imagen={this.props.imagen}></Flashcard>
      </div>
    );
  }
}

export default App;