import React, { useState } from 'react';


function Formulario2 ({ pregunta }) {

    // const formu = Preguntas.listaPreguntas.map((valor,indi) =>{
    //     let coso = valor.pregunta.respuestas[indi];

    //     return(
    //         <div>
    //             {coso}
    //         </div>
    //     );
    // });

   let form = pregunta.pregunta

    return(
        <div>
            {form}
        </div>
    );
}

export default Formulario2;