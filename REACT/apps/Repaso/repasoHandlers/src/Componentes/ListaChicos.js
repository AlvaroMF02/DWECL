import React, { Component } from 'react';
import Chico from './Chico';

class ListaChicos extends Component {
    render() {
        return (
            <ul>
                {this.props.chicos.map(valor => {
                    return (
                        <Chico
                            key={valor.id}
                            id = {valor.id}
                            nombre={valor.nombre}
                            nota={valor.nota}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default ListaChicos;