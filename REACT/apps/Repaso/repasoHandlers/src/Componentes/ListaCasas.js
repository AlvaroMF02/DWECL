import React, { Component } from 'react';
import Casa from './Casa';


// el borrado funciona pero no se que hacer con la lista en la que se ha borrado
// no se como pasarla para que sea el de state
class ListaCasas extends Component {
    render() {
        return (
            <ul>
                {this.props.lista.map(valor => {
                    return (
                        <form onSubmit={this.props.funcionBorrado}>
                            <Casa
                                key={valor.id}
                                id={valor.id}
                                habitaciones={valor.habitaciones}
                                zona={valor.zona}
                                alquilada={valor.alquilada}
                            />
                        </form>
                    );
                })}
            </ul>
        );
    }
}

export default ListaCasas;