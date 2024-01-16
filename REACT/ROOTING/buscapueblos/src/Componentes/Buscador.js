import React, { useState } from 'react';


export default function Buscador(props) {

    let pueblos = props.pueblos

    const [busqueda, setBusqueda] = useState("")

    const handleBuscaPueblos = (event) => {
        event.preventDefault()
        setBusqueda(event.target.buscador.value)

        console.log(busqueda)

    }

    return (
        <div>
            <form >
                <input type='text' placeholder='Busque un pueblo' name='buscador' onChange={handleBuscaPueblos} />
            </form>
            <ul>
            {
                pueblos.map(valor=>{
                    return(
                        <li>
                            {valor}
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}
