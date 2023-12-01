import '../Estilos.css';
import { Button } from 'reactstrap';



const SelectorMinas = (props) => {

  // devuelve solo uno
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
    