import Boton from "./Boton";


const SelectorMinas = (props) => {

  // devuelve solo uno
    return (<>
    <div>
      <Boton title={"Añadir minas"} texto={"+"}/>
      {" "}
      <Boton title={"Quitar minas"} texto={"-"}/>
      {" Minas: " + props.cantidad}
    </div>
      
    </>);
  }

export default SelectorMinas;
    