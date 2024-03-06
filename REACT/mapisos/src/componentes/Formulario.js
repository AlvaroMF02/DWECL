import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';

function Formulario () {
  return (
    // vista al mar, garaje, trastero, año, estado,piscina,precio
    <Form className='formulario'>

      <p>
        <Label for="metros">Metros</Label>
        <Input id="metros" name="metros" type="text"/>
      </p>


      <p>
        <Label for="habitaciones">Habitaciones</Label>
        <Input id="habitaciones" name="habitaciones" type="select" />
      </p>
      <p>
        <Label for="banios">Baños</Label>
        <Input id="banios" name="banios" type="select" />
      </p>
      <p>
      <Input type="switch" role="switch" />
        <Label check>Default switch checkbox input</Label>
      </p>



      <br />
      <Button color="primary" size="lg" block> <strong>Login</strong></Button>

    </Form>
  );
}

export default Formulario;