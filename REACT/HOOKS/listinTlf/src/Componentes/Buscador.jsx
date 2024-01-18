import React from 'react'

function Buscador(props) {

    const listaFiltrada = props.usuarios.filter((d) => d.nombre.toLowerCase().startsWith(props.busqueda.toLowerCase())).map((d) => <li>{d.nombre}</li>)

    return (
        <div>
            <h2>Buscador</h2>
            <input onChange={props.funcion} type="text" placeholder='Haga la busqueda' />
            <ul>
                {listaFiltrada}
            </ul>
        </div>
    );
}

export default Buscador