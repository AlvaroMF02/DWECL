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

function Formulario ({ idPreg,handleChange }) {

  const inputs = PREGUNTAS.listaPreguntas.map(preg =>{
    <Form className='formulario'>
    <h2>{preg[idPreg].pregunta.pregunta}</h2>
    <div className='inputs'>
      <Input name="respuestas" type="radio" onClick={handleChange} value={Preguntas.listaPreguntas[idPreg].pregunta.valor[0]} />{' '}
      <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[0]}</Label>
      <br />
    </div>
  </Form>
  })


  return (
    {inputs}
    // <Form className='formulario'>
    //   <h2>{Preguntas.listaPreguntas[idPreg].pregunta.pregunta}</h2>
    //   <div className='inputs'>
    //     <Input name="respuestas" type="radio" onClick={handleChange} value={Preguntas.listaPreguntas[idPreg].pregunta.valor[0]} />{' '}
    //     <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[0]}</Label>
    //     <br />
    //     <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[1]} />{' '}
    //     <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[1]}</Label>
    //     <br />
    //     <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[2]} />{' '}
    //     <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[2]}</Label>
    //     <br />
    //     <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[3]} />{' '}
    //     <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[3]}</Label>
    //     <br />
    //     <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[4]} />{' '}
    //     <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[4]}</Label>
    //     <br />
    //     <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[5]} />{' '}
    //     <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[5]}</Label>
    //   </div>
    // </Form>
  );
}

export default Formulario;