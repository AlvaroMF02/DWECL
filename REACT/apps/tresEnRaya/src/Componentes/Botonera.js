import { Button } from 'reactstrap';


export const Botonera = (props) => {
    // tablero de 9x9
    let tablero = [];

    // Rellenar el tablero
    function rellenar() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                // Callback de la funcion que esta en la app (coge la misma posicion al rellenarse)
                tablero.push(<Button outline onClick={() => props.alClick(i, j)} ></Button>);
            }
            tablero.push(<br />);
        }
    }
    rellenar();

    // Devuelve solo uno
    return (<>
        <div id="contenedorCampo">
            <p id="pCampo">
                {tablero}
            </p>
        </div>
    </>);
}



