import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import TipoPieles from './TipoPieles.json';


function Tarjeta({ id }) {

  const fotoTipo = TipoPieles.fototipos.find(fp => fp.id == id)

  return (
    <Card className='carta-pieles'>
      <img alt="Tipo de piel" src=".../images/Fototipo-piel-2" className='imagen'/>
      <CardBody>
        <CardTitle tag="h2">
          {fotoTipo.nombre}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h5" >
          ¿Qué nos dice tu piel?
        </CardSubtitle>
        <CardText className={fotoTipo.color}>
          <div className='text-carta'>
            Tu piel es {fotoTipo.piel} <br />
            Tu pelo es {fotoTipo.pelo} <br />
            Tus ojos son {fotoTipo.ojos} <br />
            Tu sensibilidad solar es {fotoTipo['sensibilidad solar']} <br />
          </div>
        </CardText>
      </CardBody>
    </Card>
  );
}

function Resultado({ puntos }) {
  // Sacar el resultado dependiendo de los puntos que se han sacado
  // < 8      FotoTipo 1
  // 8 - 21   FotoTipo 2
  // 22 - 42  FotoTipo 3
  // 43 - 68  FotoTipo 4
  // 69 - 84  FotoTipo 5
  // > 85     FotoTipo 6

  let idFotot = 0
  if (puntos < 8) {
    idFotot = 1

  } else if (puntos >= 8 && puntos <= 21) {
    idFotot = 2

  } else if (puntos >= 22 && puntos <= 42) {
    idFotot = 3

  } else if (puntos >= 43 && puntos <= 68) {
    idFotot = 4

  } else if (puntos >= 69 && puntos <= 84) {
    idFotot = 5

  } else if (puntos > 85) {
    idFotot = 6
  }

  return (
    <div className='body-resultado'>
      <h1>Tu tipo de piel es ...</h1>
      <Tarjeta id={idFotot} />

      <p className='parrafos'>
        La piel es el órgano más grande del cuerpo y al mismo tiempo,
        la que más expuesta queda a todo tipo de agentes externos, como
        la contaminación, por ejemplo, o las radiaciones directas del sol.
        Estas últimas <strong>resultan muy peligrosas para el ser humano </strong>debido a que
        pueden ser la causa de distintos tipos de cáncer o lesiones que se vuelven
        <strong>irreversibles.</strong>
      </p>
      <p className='parrafos'>
        Para evitar los posibles trastornos causados por la radiación solar,
        la piel dispone de una protección natural. Estos mecanismos de protección
        cutánea actúan de dos formas; o absorben la radiación o la desvían. Entre
        los que la absorben destacan el ácido urocánico (se produce a partir de la
        histidina y cambia su formulación actuando como filtro UVB), la melanina, el
        ADN, el ARN y el triptófano. El vello o el manto graso de la piel desvían
        aproximadamente el 5% de la radiación.
      </p>

      <h2>La melanina</h2>
      <p className='parrafos'>
        La melanina es el factor de protección propio más importante del que dispone
        la piel y su función es la de absorber la radiación. La exposición solar
        estimula su producción y esto se traduce en el bronceado, por eso se
        distinguen dos tipos de bronceado, uno inmediato y otro retardado.
      </p>
      <h2>¿Qué son los fototipos? Clasificación de Fitzpatrick </h2>
      <p className='parrafos'>
        Lo que determina si <strong>una piel se broncea o no es el fototipo</strong>; esto es,
        cómo se adapta cada piel al sol y en qué grado lo hace. Cuanto más baja
        sea esta capacidad, menos contrarrestarán los efectos de las radiaciones
        solares en la piel y viceversa.
      </p>
      <p className='parrafos'>
        Para saber cuál es nuestro tipo de piel es importante fijarse en zonas del
        cuerpo que no estén continuamente expuestas al sol, como pueden ser: la zona
        inferior de las piernas (justo sobre los tobillos), detrás de la rodilla o la
        zona interna del antebrazo. Zonas como la cara, el cuello o los brazos no
        aportarán una información certera sobre el fototipo, puesto que están en
        contacto continuo con las radiaciones solares.
      </p>
      <Button> Hacer test </Button>
    </div>
  );
}

export default Resultado;