import React, { Component } from 'react';

class Chico extends Component {
    render() {
        return (
            <li>
                ({this.props.id}) {this.props.nombre} - {this.props.nota}
            </li>
        );
    }
}

export default Chico;