import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Formulario from './Formulario';

const items = [     // array de formularios
  {
    id: 1,
    altText: <h1>1º pregunta</h1>,
    caption: <Formulario idPreg={0} handleChange={funcion} />,
  },
  {
    id: 2,
    altText: <h1>2º pregunta</h1>,
    caption: <Formulario idPreg={1} />,
  },
  {
    id: 3,
    altText: <h1>3º pregunta</h1>,
    caption: <Formulario idPreg={2} />,
  },
  {
    id: 3,
    altText: <h1>4º pregunta</h1>,
    caption: <Formulario idPreg={3} />,
  },
  {
    id: 3,
    altText: <h1>5º pregunta</h1>,
    caption: <Formulario idPreg={4} />,
  },
  {
    id: 3,
    altText: <h1>6º pregunta</h1>,
    caption: <Formulario idPreg={5} />,
  },
  {
    id: 3,
    altText: <h1>7º pregunta</h1>,
    caption: <Formulario idPreg={6} />,
  },
];

function Carrusel({funcion}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: grey;
            }`}
      </style>

      <Carousel activeIndex={activeIndex} pause='hover' interval="50000000" next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Carrusel;