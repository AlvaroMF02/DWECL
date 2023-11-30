import Boton from './Boton';
import '../Botonera.css';


const Botonera = (props) => {
  // 4 botones con los que nos moveremos por el campo
    return (<>
    {/* Poner el div en medio */}
    <div class="arriba">
      <Boton title={"arriba"} texto={"⇧"}/>
    </div>
      <Boton title={"izquierda"} texto={"⇦"}/>
      {" "}
      <Boton title={"abajo"} texto={"⇩"}/>
      {" "}
      <Boton title={"derecha"} texto={"⇨"}/>
    </>);
  }

export default Botonera;
    