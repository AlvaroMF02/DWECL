import Boton from "./Boton";


const SelectorMinas = (props) => {

  // devuelve solo uno
    return (<>
    <div>
      <Boton texto={"Añadir minas"} flecha={"+"}/>
      {" "}
      <Boton texto={"Quitar minas"} flecha={"-"}/>
      {" Minas: " + props.cantidad}
    </div>
      
    </>);
  }

export default SelectorMinas;
    