import { Button } from 'reactstrap';

export const Formulario = (props) => {
    let posicion = props.posicion
    return (<>
        <div>
            <form onSubmit={this.props.onAddUser}>
                Cantidad <input type="text" name="Cantidad" />
                Interés <input type="email" name="Interés" />
                Tiempo: <br />
                Años:<input type="email" name="Anyos" /> Meses:<input type="email" name="Meses" />
                <input type="submit" name="Calcular" />
            </form>
        </div>
    </>);
}

