import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <h1>Bienvenido a la APP</h1>

      <nav>
        {/* Dependiendo del to cambia el Outlet configurado en el index.js */}
        <Link to="/">Home</Link> {" "}
        <Link to="/Reservas">Reservas</Link> {" "}
        <Link to="/Administracion">Administracion</Link> {" "}
        <Link to="/Usuario">Usuario</Link> {" "}
      </nav>

      <Outlet />

    </div>
  );
}

export default App;
