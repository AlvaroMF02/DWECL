import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reservas from "./Componentes/Reservas";
import Administracion from "./Componentes/Administracion";
import Usuario from "./Componentes/Usuario";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // dentro de cada componente los que importa son los que llaman 
  // a cada ruta (Route), dependiendo de cada uno llama a un elemento
  // diferente. En la misma ruta se pone App y dentro de esta se puede ver todo
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}>
      <Route path="Reservas" element={<Reservas/>}/>
      <Route path="Administracion" element={<Administracion/>}/>
      <Route path="Usuario" element={<Usuario/>}/>
      <Route path="*" element={<h2>No encontrada</h2>}/>
    </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
