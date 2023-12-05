import { Button } from 'reactstrap';


export const Campo = (props) => {

  const campo = props.campo;
  const posicion = props.posicion;
  const lista = [];

  // Rellenar cada uno dependiendo del numero de minas que hay
  function rellenar() {
    for (let i = 0; i < campo.length; i++) {
      for (let j = 0; j < campo[i].length; j++) {
        // Si es la posicion pone le boton de otro color y tal
        if (posicion.x === j && posicion.y === i){
          lista.push(<Button color='dark'>🧑‍🦽</Button>)
        }else {
          lista.push(<Button>‍</Button>);
        }
      }
      lista.push(<br/>);
    }
  }
  rellenar();

  // devuelve solo uno
  return (<>
    <div id="contenedorCampo">
      <p id="pCampo">
        {lista}
      </p>
    </div>
  </>);
}
