import '../Estilos.css';
import { Button } from 'reactstrap';


export const Botonera = (props) => {
  // 4 botones con los que nos moveremos por el campo
  let posicion = props.posicion
  return (<>
    {/* Poner el div en medio */}
    <div id="botonera">
        <Button color='outline-secondary'  title='arriba' onClick={() => props.arriba()}>⇧</Button>
      <div id="centro">
        <div><Button color='outline-secondary'  title='izquierda' onClick={() => props.izquierda()}>⇦</Button></div>
        <div><Button color='outline-secondary'   title='derecha' onClick={() => props.derecha()}>⇨</Button></div>
      </div>
        <Button color='outline-secondary'   title='abajo' onClick={() => props.abajo()}>⇩</Button>        
    </div>
    
  </>);
}

