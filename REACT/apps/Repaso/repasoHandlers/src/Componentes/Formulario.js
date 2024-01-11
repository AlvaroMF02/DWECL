import React, { Component } from 'react';

class Formulario extends Component {
    render() {
        return (
            <form onSubmit={this.props.funcion}>
                <input type='text' placeholder='nombre' name='nombre' />
                <input type='text' placeholder='nota' name='nota' />
                <button type='submit'>Guardar</button>
            </form>
        );
    }
}

export default Formulario;