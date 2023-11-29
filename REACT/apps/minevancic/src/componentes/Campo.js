import { Row } from 'reactstrap';
import Boton from './Boton';



const Campo = (props) => {

let filas = props.filas
let columnas = props.columnas

let tablero = []

for (let i = 0; i < filas; i++) {
    {tablero.push(new Array())}
  for (let j = 0; j < columnas; j++) {
    tablero[i].push(<Boton flecha={"o"}/>)    
  }
}

for (let i = 0; i < filas; i++) {
  tablero[i][j] = <Row><Col>{tablero[i]}</Col></Row>
  
}

  // devuelve solo uno
    return (<>
      {tablero}
    </>);
  }

export default Campo;
    