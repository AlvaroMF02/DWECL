import '../Estilos.css';
import { Button } from 'reactstrap';



const SelectorMinas = (props) => {

  // sube y baja la cantidad de minas
    return (<>
    <div id="selectorMinas">
      <Button title='Añadir minas' onClick={props.funcionSubir}>+</Button>
      {" "}
      <Button title='Quitar minas' onClick={props.funcionBajar}>-</Button>
      {" Minas: " + props.cantidad}
    </div>
      
    </>);
  }

export default SelectorMinas;
    