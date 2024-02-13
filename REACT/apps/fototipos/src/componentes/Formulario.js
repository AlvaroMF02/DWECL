import React, { useState } from 'react';
import { Button} from 'reactstrap';

function Formulario ({ pregunta,funcionPasa,funcionContar }) {

   let respuestas = pregunta.respuestas.map((resp,indi) =>{
        return(                                             // EL PRIMERO LO COGE COMO 0 
            <Button className='botones' onClick={()=>{funcionPasa();funcionContar(pregunta.valor[indi],pregunta.id)}}>{resp}</Button>
        );
   })

    return(
        <div className='respuestas'>
            {respuestas}
        </div>
    );
}

export default Formulario;