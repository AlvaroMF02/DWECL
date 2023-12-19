import { Button } from 'reactstrap';


export const Botonera = (props) => {

    // Guarda el color del que se pone
    let turno = props.turno

    // tablero de 9x9
    let tablero = [];

    // Rellenar el tablero
    function rellenar() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                // Callback de la funcion que esta en la app
                tablero.push(<Button outline onClick={() => props.cambiarTurno()} ></Button>);

                // falta comprobar ganador
                if (tablero[j]== 0) { // si esta en la primera fila
                    
                }

            }
            tablero.push(<br />);
        }
    }

    // AL CLICK
    // ¿Hay ganador?
    // Ver si es la fila 0 si no nada
    // busco la posicion en la que se queda la ficha
    // coloco la ficha
    // cambio el turno

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



