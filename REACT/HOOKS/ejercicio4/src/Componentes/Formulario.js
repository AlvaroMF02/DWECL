import React, { Component } from 'react'

function Formulario (props){
    return (
        <form onSubmit={props.onAddUser}>
            <input type="text" placeholder="Nombre" name="nombre" />
            <input type="text" placeholder="Edad" name="edad" />
            <input type="submit" value="Guardar" />
        </form>
    );
}
export default Formulario;