import '../Estilos.css';
import { Button } from 'reactstrap';


export const Botonera = (props) => {
  // 4 botones con los que nos moveremos por el campo
  let posicion = props.posicion
  return (<>
    <div id="botonera">
        <Button color='secondary'  title='arriba' onClick={() => props.arriba()}>🢁</Button>
      <div id="centro">
        <div><Button color='secondary'  title='izquierda' onClick={() => props.izquierda()}>🢀</Button></div>
        <div><Button color='secondary'   title='derecha' onClick={() => props.derecha()}>🢂</Button></div>
      </div>
        <Button color='secondary'   title='abajo' onClick={() => props.abajo()}>🢃</Button>        
    </div>
    
  </>);
}

