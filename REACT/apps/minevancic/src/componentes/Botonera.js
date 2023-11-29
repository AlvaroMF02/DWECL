import Boton from './Boton';


const Botonera = (props) => {
  // 4 botones con los que nos moveremos por el campo
    return (<>
    {/* Poner el div en medio */}
    <div class="arriba">
      <Boton texto={"arriba"} flecha={"⇧"}/>
    </div>
      <Boton texto={"izquierda"} flecha={"⇦"}/>
      {" "}
      <Boton texto={"abajo"} flecha={"⇩"}/>
      {" "}
      <Boton texto={"derecha"} flecha={"⇨"}/>
    </>);
  }

export default Botonera;
    