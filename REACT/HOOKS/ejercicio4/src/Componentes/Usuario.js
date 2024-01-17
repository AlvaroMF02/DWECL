import React, { Component } from 'react';

function Usuario(props) {
    return (
        <li>
            ({props.id})- {props.nombre} - {props.edad}
        </li>
    );
}
export default Usuario;