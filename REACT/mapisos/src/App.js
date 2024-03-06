import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './componentes/Formulario';

/*
Con estos datos es más fácil terminar el ejercicio. 
En el ComponentDidMount hacéis el cálculo de los coeficientes 
(la fórmula con las matrices) y los usáis para cuando el usuario 
complete el formulario se calcule el precio estimado. 
Yo utilizaría hooks y calcularía el precio si todos los 
campos tienen un valor insertado. Utilizad ReactStrap.
*/

function App() {
  return (
    <div className="App">
      <h1>Formulario casa</h1>
      <Formulario/>
    </div>
  );
}

export default App;
