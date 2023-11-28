import {Card, CardImg, CardBody, CardTitle,CardText } from 'reactstrap';
import React, { Component } from 'react';


const Flashcard = (props) => {
    return (<>
    {/* Al poner la clase row se divide por columnas creo :) */}
      <div class="row">
        <Card style={{ width: '18rem' }}>
          <CardBody>
            <CardTitle tag="h5">{props.Titulo}</CardTitle>
            {/* para dividir la pantalla en columnas con class */}
            <div class='col-md-8 col-lg-4'>
              <CardImg src={props.imagen} />
            </div>
            <CardText>{props.texto}</CardText>
          </CardBody>
        </Card>
      </div>
    </>);
  }

export default Flashcard;