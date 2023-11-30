import { Button } from 'reactstrap';



const Boton = (props) => {
  // boton básico con el que haremos los demas componentes
    return (<>
      <Button title={props.title} onClick={()=>props.funcion}>{props.texto}</Button>
    </>);
  }

export default Boton;
    