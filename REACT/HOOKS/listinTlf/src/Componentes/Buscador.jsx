import React from 'react'

function Buscador({usuarios,busqueda,funcion}) {

    const listaFiltrada = usuarios.filter((d) => d.nombre.toLowerCase().startsWith(busqueda.toLowerCase())).map((d) => <li>{d.nombre}</li>)

    return (
        <div>
            <h2>Buscador</h2>
            <input onChange={funcion} type="text" placeholder='Haga la busqueda' />
            <ul>
                {listaFiltrada}
            </ul>
        </div>
    );
}

export default Buscador