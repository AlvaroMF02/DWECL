import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // NO MODIFICAR
      listaBotones: Array(9).fill(null),
    }
  }

  render() {
    return (
      <div className="App">
        <Button>Hola</Button>
      </div>
    );
  }
}

export default App;