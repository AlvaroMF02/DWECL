import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './componentes/AppLogin'
import Menu from './componentes/Menu'
import { Component } from 'react';
import { PHPLOGIN } from './componentes/Datos';
import axios from 'axios';

class App extends Component {     // USUARIO:ALVARO CONTRASEÑA:1234
  constructor(props) {
    super(props)
    this.state = {
      menuItem: "UNO",
      logeado: false,
    }
  }

  changeMenu (item) {
    this.setState({ menuItem: item })
  }

  // Hace el login con la bd y comprueba si coinciden los datos
  userLogin (usuario, clave) {
    axios.post(PHPLOGIN, JSON.stringify({
      user: usuario,
      password: clave
    }))
      .then(res => {
        console.log(res.data.usuario);
        if (res.data.usuario !== undefined) {
          this.setState({ logeado: true });
        }
      })
  }

  render () {
    let obj = <><Menu menuItem={this.state.menuItem} changeMenu={(item) => this.changeMenu(item)} /></>
    if (!this.state.logeado) {
      obj = <AppLogin userLogin={(usuario, clave) => this.userLogin(usuario, clave)} />
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;
