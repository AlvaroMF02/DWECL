import { Button } from 'reactstrap';



const Boton = (props) => {
  // boton básico con el que haremos los demas componentes
    return (<>
      <Button title={props.texto}>{props.flecha}</Button>
    </>);
  }

export default Boton;
    