import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';
import Formulario from './Formulario';
import Preguntas from './Preguntas.json';


// devolver el fin del formulario y el contador
function Carrusel ({ datos }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [contador, setContador] = useState(Array(Preguntas.listaPreguntas.length).fill(null));          // Recuento de puntos
  const [aviso, setAviso] = useState("");
  const [finForm, setFinForm] = useState(false);        // Ver si el formulario ha terminado

  // Avanza uno
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Retrocede uno
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Se ejecuta al hacer click
  const resultado = (nume, idPreg) => {
    const aux = JSON.parse(JSON.stringify(contador))
    aux[idPreg] = nume;
    setContador(aux);
    console.log(aux)
  }

  function comprobarFin () {
    // si hay alguna respuesta null te sale mensaje de aviso
    console.log(contador.find(d => d == null)=== undefined)

    if (contador.find(d => d == null)=== undefined) {
      setFinForm(true)
      datos(contador, finForm)
    }else{
      setAviso("Debe responder a todas las preguntas")
    }

  }

  // DEVUELVE EL FORMULARIO POR CADA PREGUNTA
  const items = Preguntas.listaPreguntas.map((preg) => {
    const item = {
      id: crypto.randomUUID(),
      altText: <h1 className='pregunta'>{preg.pregunta.pregunta}</h1>,
      caption: <Formulario pregunta={preg.pregunta} funcionPasa={next} funcionContar={resultado} />
    }
    return item;
  })

  // Hace un map de todos los formularios
  const slides = items.map((item) => {
    return (
      <CarouselItem className="custom-tag" tag="div" key={item.id} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  // Al final lo que devuelvo 
  return (
    <div className='carrusel'>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 600px;
              background: rgb(196, 142, 110);
            }`}
      </style>
      <h1>¿Qué fototipo eres?</h1>
      <Carousel activeIndex={activeIndex} pause='hover' interval="50000000" next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <Button className='botones' onClick={comprobarFin}>Ver resultados</Button> ( Doble click )
      <div>{aviso}</div>
    </div>
  );
}

export default Carrusel;