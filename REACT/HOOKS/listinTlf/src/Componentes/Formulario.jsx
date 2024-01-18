import React from 'react'


function Formulario(props) {
    return (
        <form onSubmit={props.funcion}>
            <input type="text" name='nombreInp' placeholder='Introduzca el nombre' /><br />
            <input type="text" name='tlfInp' placeholder='Introduzca el teléfono' />
            <br />
            <button>Guardar</button>
        </form>
    );
}

export default Formulario;