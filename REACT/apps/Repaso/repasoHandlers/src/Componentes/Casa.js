import React, { Component } from 'react';

class Casa extends Component {
    render() {
        return (
            <li>
                ({this.props.id}) -- Nº de habitaciones: {this.props.habitaciones} | Zona: {this.props.zona} | ¿Está alquilada?: {this.props.alquilada}
                <button type='submit' name={this.props.id}>Borrar</button>
            </li>
        );
    }
}

export default Casa;