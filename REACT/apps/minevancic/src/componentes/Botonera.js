import Boton from './Boton';


const Botonera = (props) => {
  // 4 botones con los que nos moveremos por el campo
    return (<>
      <Boton texto={"arriba"} imagen={"./public/imagenes/arriba.png"}/>
      <Boton texto={"abajo"} imagen={"./imagenes/abajo.png"}/>
      <Boton texto={"izquierda"} imagen={"./imagenes/izquierda.png"}/>
      <Boton texto={"derecha"} imagen={"./imagenes/derecha.png"}/>
    </>);
  }

export default Botonera;
    