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

function Formulario ({idPreg}) {

  return (
    <Form>
      <h2>{Preguntas.listaPreguntas[idPreg].pregunta.pregunta}</h2>
          <Input name="respuestas" id='resp1' type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[0]}/>{' '}
          <Label for='resp1'>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[0]}</Label>
          <br/>
          <Input name="respuestas" id='resp2' type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[1]} />{' '}
          <Label for='resp2'>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[1]}</Label>
          <br/>
          <Input name="respuestas" id='resp3' type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[2]}/>{' '}
          <Label for='resp3'>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[2]}</Label>
          <br/>
          <Input name="respuestas" id='resp4' type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[3]}/>{' '}
          <Label for='resp4'>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[3]}</Label>
          <br/>
          <Input name="respuestas" id='resp5' type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[4]}/>{' '}  
          <Label for='resp5'>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[4]}</Label>
          <br/>
          <Input name="respuestas" id='resp6' type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[5]}/>{' '}
          <Label for='resp6'>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[5]}</Label>
    </Form>
  );
}

export default Formulario;