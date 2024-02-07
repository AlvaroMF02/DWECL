import React, { useState } from 'react';
import { Button} from 'reactstrap';

function Formulario ({ pregunta }) {

   let respuestas = pregunta.respuestas.map(resp =>{
        return(
                <Button className='botones'>{resp}</Button>
           
        );
   })

    return(
        <div className='respuestas'>
            {respuestas}
        </div>
    );
}

export default Formulario;