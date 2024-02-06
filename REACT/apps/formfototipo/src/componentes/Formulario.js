import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from 'reactstrap';
import Preguntas from './Preguntas.json';


function Formulario ({numPregunta}) {

  return (
    <div className='div-form'>
    <h2>{Preguntas.listaPreguntas[numPregunta].pregunta}</h2>
    <Form className='disForm'>
          {/* <Input name="respuestas" id='resp1' type="radio" value={0}/>{' '}
          <Label for='resp1'>{Preguntas.listaPreguntas[0].pregunta.respuestas[0]}</Label>
          <br/>
          <Input name="respuestas" id='resp2' type="radio" value={2} />{' '}
          <Label for='resp2'>{Preguntas.listaPreguntas[0].pregunta.respuestas[0]}</Label>
          <br/>
          <Input name="respuestas" id='resp3' type="radio" value={4}/>{' '}
          <Label for='resp3'>{Preguntas.pregunta1.respuestas[2]}</Label>
          <br/>
          <Input name="respuestas" id='resp4' type="radio" value={8}/>{' '}
          <Label for='resp4'>{Preguntas.pregunta1.respuestas[3]}</Label>
          <br/>
          <Input name="respuestas" id='resp5' type="radio" value={12}/>{' '}  
          <Label for='resp5'>{Preguntas.pregunta1.respuestas[4]}</Label>
          <br/>
          <Input name="respuestas" id='resp6' type="radio" value={16}/>{' '}
          <Label for='resp6'>{Preguntas.pregunta1.respuestas[5]}</Label> */}
          <br/>
    </Form>
    </div>
  );
}

export default Formulario;