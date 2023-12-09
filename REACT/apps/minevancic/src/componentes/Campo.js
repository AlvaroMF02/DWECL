import { Button } from 'reactstrap';


export const Campo = (props) => {

  const campo = props.campo;
  const posicion = props.posicion;
  const tablero = [];

  // Rellenar cada uno dependiendo del numero de minas que hay
  function rellenar() {
    for (let i = 0; i < campo.length; i++) {
      for (let j = 0; j < campo[i].length; j++) {
        // Si es la posicion pone le boton de otro color si no lo pone default
        if (posicion.x === j && posicion.y === i){
          tablero.push(<Button color='dark'>🧑</Button>)
        }else {
          tablero.push(<Button>‍</Button>);
        }
      }
      // br salto de linea
      tablero.push(<br/>);
    }
  }
  rellenar();

  // devuelve solo uno
  return (<>
    <div id="contenedorCampo">
      <p id="pCampo">
        {tablero}
      </p>
    </div>
  </>);
}
