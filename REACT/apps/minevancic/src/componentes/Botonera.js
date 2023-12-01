import '../Estilos.css';
import { Button } from 'reactstrap';


const Botonera = (props) => {
  // 4 botones con los que nos moveremos por el campo
  return (<>
    {/* Poner el div en medio */}
    <div id="botonera">
        <Button title='arriba'>⇧</Button>
      <div id="centro">
        <div><Button title='izquierda'>⇦</Button></div>
        <div><Button title='derecha'>⇨</Button></div>
      </div>
        <Button title='abajo'>⇩</Button>
    </div>

  </>);
}

export default Botonera;
