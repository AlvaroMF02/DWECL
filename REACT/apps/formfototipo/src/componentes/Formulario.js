import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from 'reactstrap';

function Formulario ({preguntas}) {
  const [preguntas] = useState([
    {
      pregunta: "¿Cuál es el color natural de su piel cuando no está bronceada? ",
      respuesta1: "Rojiza,blanca", respuesta2: "Blanca-beige", respuesta3: "Beige",
      respuesta4: "Marrón clara", respuesta5: "Marrón", respuesta6: "Negra"
    },
    {
      pregunta: "¿De qué color natural es su pelo? ",
      respuesta1: "Pelirrojo,rubio claro", respuesta2: "Rubio, castaño claro", respuesta3: "Castaño",
      respuesta4: "Castaño oscuro", respuesta5: "Castaño oscuro-negro", respuesta6: "Negro"
    },
    {
      pregunta: "¿De qué color tienes los ojos?",
      respuesta1: "Azul claro, verde claro, gris claro", respuesta2: "Azules,verdes,grises", respuesta3: "Grises, marrón claro",
      respuesta4: "Marrones", respuesta5: "Marrones oscuro", respuesta6: "Negros"
    },
    {
      pregunta: "¿Cuántas pecas tiene de manera natural en el cuerpo cuando no está bronceado? ",
      respuesta1: "Muchas", respuesta2: "Algunas", respuesta3: "Unas cuantas",
      respuesta4: "Ninguna", respuesta5: null, respuesta6: null
    },
    {
      pregunta: " ¿Qué categoría describe mejor su herencia genética?",
      respuesta1: "Raza blanca de piel muy blanca", respuesta2: " Raza blanca de piel clara ", respuesta3: "Raza blanca piel morena(Mediterráneo)",
      respuesta4: "Oriente Medio, hindú, asiático,hispano-americano ", respuesta5: "Aborigen, africano, afroamericano", respuesta6: null
    },
    {
      pregunta: "¿Qué categoría describe mejor su potencial de QUEMADURA exponiéndose al sol una hora en verano? ",
      respuesta1: "Siempre se quema y no se broncea nunca ", respuesta2: "Habitualmente se quema, pero puede broncearse ligeramente ", respuesta3: "Se quema ocasionalmente, pero se broncea moderadamente",
      respuesta4: "Nunca se quema y se broncea con facilidad", respuesta5: "Raramente se quema y se broncea profundamente", respuesta6: "Nunca se quema"
    },
    {
      pregunta: "¿Qué categoría describe mejor su potencial de BRONCEADO?",
      respuesta1: "Nunca se broncea ", respuesta2: "Se puede broncear ligeramente ", respuesta3: " Se puede broncear moderadamente ",
      respuesta4: "Se puede broncear profundamente", respuesta5: null, respuesta6: null
    }
  ]);
  // CAMBIAR LAS RESPUESTAS CON UN ARRAY DE RESPUESTAS QUE TENGAN LAS PREGUNTAS
  // ESE MISMO ARRAY TIENE QUE GUARDAR LA PREGUNTA ( SE PASA POR PROPS )
  // CAMBIAR EL CSS PARA QUE ESTÉ ALINEADO
  return (
    <Form>
      <FormGroup tag="fieldset">

          <Input name="respuestas" id='resp1' type="radio" value={0}/>{' '}
          <Label for='resp1'>Rojiza, blanca</Label>
          <br/>
          <Input name="respuestas" id='resp2' type="radio" value={2} />{' '}
          <Label for='resp2'>Blanca-beige</Label>
          <br/>
          <Input name="respuestas" id='resp3' type="radio" value={4}/>{' '}
          <Label for='resp3'>Beige</Label>
          <br/>
          <Input name="respuestas" id='resp4' type="radio" value={8}/>{' '}
          <Label for='resp4'>Marrón clara</Label>
          <br/>
                          {/* en la pregunta 6 el valor es 10 */}
          <Input name="respuestas" id='resp5' type="radio" value={12}/>{' '}  
          <Label for='resp5'>Marrón</Label>
          <br/>
          <Input name="respuestas" id='resp6' type="radio" value={16}/>{' '}
          <Label for='resp6'>Negra</Label>
          <br/>


      </FormGroup>
    </Form>
  );
}

export default Formulario;