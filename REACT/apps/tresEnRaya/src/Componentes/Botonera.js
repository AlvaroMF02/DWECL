import { Button } from 'reactstrap';


export const Campo = () => {

    // tablero de 9x9
    let tablero = [];
    
    // Rellenar cada uno dependiendo del numero de minas que hay
    function rellenar() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                // Mete un boton en cada uno
                tablero.push(<Button color='outline-white'>‍</Button>);
            }
            // br salto de linea
            tablero.push(<br />);
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



