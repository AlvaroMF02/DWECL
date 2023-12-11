import '../Estilos.css';
import { Button } from 'reactstrap';


export const BotonJugar = (props) => {
  // al darle a jugar llama a una funcion con la que la posic cambia a la 0 0
  // tambien hay que hacerlo para que al pulsar recargue todo el tablero
  return (<>
    <div id='botonJugar'>
      <Button color="danger" onClick={()=> props.funcion()}>Jugar</Button>
    </div>
  </>);
}

