import React, { useState } from 'react';
import { Button} from 'reactstrap';

function Formulario ({ pregunta,funcionPasa,funcionContar }) {

   let respuestas = pregunta.respuestas.map((resp,indi) =>{
        return(
            <Button className='botones' onClick={()=>{funcionPasa();funcionContar(pregunta.valor[indi])}}>{resp}</Button>
        );
   })

    return(
        <div className='respuestas'>
            {respuestas}
        </div>
    );
}

export default Formulario;