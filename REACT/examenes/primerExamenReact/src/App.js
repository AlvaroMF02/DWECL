import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const Botoncillo = (props) => {
  return (
    // Da error diciendo que en color va un string pero le tengo que pasar una funcion
    <Button onClick={() => props.funci()} /*color={() => props.colore()}*/ color={props.colore}>
      {props.numero}
    </Button>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "secondary",
      color2: "secondary",
      color3: "secondary",
      color4: "secondary",
      color5: "secondary",
      numero1: 0,
      numero2: 0,
      numero3: 0,
      numero4: 0,
      numero5: 0,
    }
  }

  sumar1() {
    this.setState({ numero1: this.state.numero1 + 1 });
  }
  sumar2() {
    this.setState({ numero2: this.state.numero2 + 1 });
  }
  sumar3() {
    this.setState({ numero3: this.state.numero3 + 1 });
  }
  sumar4() {
    this.setState({ numero4: this.state.numero4 + 1 });
  }
  sumar5() {
    this.setState({ numero5: this.state.numero5 + 1 });
  }

  // no llega a entrar
  color1() {
    if (this.state.numero1 > 0) {
      this.setState({ color1: "danger" })
    } else {
      this.setState({ color1: "secondary" })
    }
  }
  color2() {
    if (this.state.numero2 > 0) {
      this.setState({ color2: "danger" })
    } else {
      this.setState({ color2: "secondary" })
    }
  }
  color3() {
    if (this.state.numero3 > 0) {
      this.setState({ color3: "danger" })
    } else {
      this.setState({ color3: "secondary" })
    }
  }
  color4() {
    if (this.state.numero4 > 0) {
      this.setState({ color4: "danger" })
    } else {
      this.setState({ color4: "secondary" })
    }
  }
  color5() {
    if (this.state.numero5 > 0) {
      this.setState({ color5: "danger" })
    } else {
      this.setState({ color5: "secondary" })
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Botoncillo numero={this.state.numero1} funci={() => this.sumar1()} /*colore={() => this.color1()}*/ />
          {" "}
          <Botoncillo numero={this.state.numero2} funci={() => this.sumar2()} colore={this.state.color2} />
          {" "}
          <Botoncillo numero={this.state.numero3} funci={() => this.sumar3()} colore={this.state.color3} />
          {" "}
          <Botoncillo numero={this.state.numero4} funci={() => this.sumar4()} colore={this.state.color4} />
          {" "}
          <Botoncillo numero={this.state.numero5} funci={() => this.sumar5()} colore={this.state.color5} />
        </header>
      </div>
    );
  }
}

export default App;
