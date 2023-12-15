
export const Formulario = (props) => {
    return (
        <div>
            <form onSubmit={props.cuenta}>
                Cantidad <input type="text" name="cantidad" />
                Interés <input type="text" name="interes" />
                Tiempo: <br />
                Años:<input type="text" name="anyos" /> Meses:<input type="text" name="meses" />
                <input type="submit" value="Calcular" />
            </form>
        </div>);
}



