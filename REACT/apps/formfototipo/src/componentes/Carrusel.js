import React, { useState } from 'react';
import Formulario from './Formulario';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [     // array de formularios
  {
    id: 1,
    caption: <Formulario numPregunta = {1}/>
  },
  {
    id: 2,
    caption: <Formulario numPregunta = {2}/>
  },
  {
    id: 3,
    caption: <Formulario numPregunta = {3}/>
  },
  {
    id: 4,
    caption: <Formulario numPregunta = {4}/>
  },
  {
    id: 5,
    caption: <Formulario numPregunta = {5}/>
  },
  {
    id: 6,
    caption: <Formulario numPregunta = {6}/>
  },
  {
    id: 7,
    caption: <Formulario numPregunta = {7}/>
  },
];

function Carrusel(props) {
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

  const slides = items.map((item,indi) => {
    return (
      // <CarouselItem
      //   className="custom-tag"
      //   tag="div"
      //   key={item.id}
      //   onExiting={() => setAnimating(true)}
      //   onExited={() => setAnimating(false)}
      // >
      //   <CarouselCaption
      //     captionText={item.caption}
      //     captionHeader={item.altText}
      //   />
      // </CarouselItem>
      <Formulario numPregunta={indi}></Formulario>
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