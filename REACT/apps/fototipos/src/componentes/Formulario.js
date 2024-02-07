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

  // let formu = Preguntas.listaPreguntas.map((preg, indi) => {
  //   return (
  //     <Form className='formulario'>
  //       <h2>{preg.pregunta.pregunta}</h2>
  //       <div className='inputs'>
  //         <Input name="respuestas" type="radio" value={preg.pregunta.valor[indi]} />{' '}
  //         <Label>{preg.pregunta.respuestas[indi]}</Label>
  //         <br />
  //       </div>
  //     </Form>
  //   )
  // })

  // const pregunta = Preguntas.listaPreguntas.map((valor, indi) => {
  //   return (
  //     <div>
  //       <h2>{valor.pregunta.pregunta}</h2>
  //       <Button value={valor.pregunta.valor[indi]}>{valor.pregunta.respuestas[indi]}</Button>
  //     </div>
  //   );
  // })




  return (
    <div className='formulario'>
      <h2>{Preguntas.listaPreguntas[idPreg].pregunta.pregunta}</h2>
      <div className='inputs'>

        <Button value={Preguntas.listaPreguntas[idPreg].pregunta.valor[1]}>{valor.pregunta.respuestas[indi]}</Button>

        <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[0]} />{' '}
        <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[0]}</Label>
        <br />
        <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[1]} />{' '}
        <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[1]}</Label>
        <br />
        <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[2]} />{' '}
        <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[2]}</Label>
        <br />
        <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[3]} />{' '}
        <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[3]}</Label>
        <br />
        <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[4]} />{' '}
        <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[4]}</Label>
        <br />
        <Input name="respuestas" type="radio" value={Preguntas.listaPreguntas[idPreg].pregunta.valor[5]} />{' '}
        <Label>{Preguntas.listaPreguntas[idPreg].pregunta.respuestas[5]}</Label>
      </div>
    </div>
  );
}

export default Formulario;