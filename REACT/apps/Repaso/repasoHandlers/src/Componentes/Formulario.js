import React, { Component } from 'react';

class Formulario extends Component {
    render() {
        return (
            <form onSubmit={this.props.funcion}>
                <input type='text' placeholder='Nº de habitaciones' name='InpHabitaciones'/>
                <input type='text' placeholder='Zona' name='InpZona'/>
                <input type='text' placeholder='¿Está alquilada?' name='InpAlquiler'/>
                <button type='submit'>Añadir</button>
            </form>
        );
    }
}

export default Formulario;