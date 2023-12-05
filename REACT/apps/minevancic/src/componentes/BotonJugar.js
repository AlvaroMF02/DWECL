import '../Estilos.css';
import { Button } from 'reactstrap';


export const BotonJugar = (props) => {
  return (<>
    <Button color="danger" onClick={()=> props.funcion()}>Jugar</Button>
  </>);
}

