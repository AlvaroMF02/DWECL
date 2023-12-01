import { Row, Col, Button } from 'reactstrap';


const Campo = (props) => {

  let filas = props.filas
  let columnas = props.columnas
  let minas = props.minas
  let posicion = props.posicion

  // Rellenar cada uno dependiendo del numero de minas que hay
  function rellenar() {
    let tablero = Array(filas)
    for (let i = 0; i < filas; i++) {
      tablero[i] = Array(columnas)
      for (let j = 0; j < columnas; j++) {
        tablero[i][j] = <Button>X</Button>
      }
    }
    return tablero;
  }

  const campoMinas = rellenar()
  campoMinas[props.posicion.y][props.posicion.x] = <Button outline>X</Button>


  // for (let i = 0; i < tablero.length; i++) {
  //   for (let j = 0; j < tablero[i].length; j++) {
  //     if (posicion[i] == 0 && posicion[j] == 0) {
  //       tablero[i][j]=(<Button>999</Button>) 
  //     }
  //   }
  // }

  // devuelve solo uno
  return (<>
    <div id="contenedorCampo">
      <p id="pCampo">
        {campoMinas}
      </p>
    </div>
  </>);
}

export default Campo;
