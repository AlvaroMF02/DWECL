import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Formulario from './Formulario';
import Preguntas from './Preguntas.json';


// devolver el fin del formulario y el contador
function Carrusel ({}) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [contador, setContador] = useState(0);          // Recuento de puntos
  const [cantidadResp, setCantidadResp] = useState(0);  // Preguntas respondi
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

  const resultado = (nume) => {
    // al acabar el formulario
    if (cantidadResp > 4) setFinForm(true)

    setContador(contador + nume);
    setCantidadResp(cantidadResp + 1);
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
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 600px;
              background: rgb(196, 142, 110);
            }`}
      </style>

      <Carousel activeIndex={activeIndex} pause='hover' interval="50000000" next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Carrusel;