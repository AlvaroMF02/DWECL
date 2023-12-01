import '../Estilos.css';
import { Button } from 'reactstrap';


const Botonera = (props) => {
  // 4 botones con los que nos moveremos por el campo
  let posicion = props.posicion
  return (<>
    {/* Poner el div en medio */}
    <div id="botonera">
        <Button title='arriba' onClick={() => props.arriba()}>⇧</Button>
      <div id="centro">
        <div><Button title='izquierda' onClick={() => props.izquierda()}>⇦</Button></div>
        <div><Button title='derecha' onClick={() => props.derecha()}>⇨</Button></div>
      </div>
        <Button title='abajo' onClick={() => props.abajo()}>⇩</Button>
        {console.log(posicion)}
    </div>
    
  </>);
}

export default Botonera;
