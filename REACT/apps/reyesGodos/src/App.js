import React, { Component } from 'react';
// importar componente creado anteriormente
import Flashcard from './componentes/FlashcardComponent';
// importar el js de Godos con el que vemos los datos
import { GODOS  } from './shared/datos';

// clase app
class App extends Component {
  // constructor con imagen como recurso
  constructor(props) {
    super(props);
    this.state = {
      imagen: "/assets/images/yes.png"
    }
  }

  render() {
    // como datos.js es un array con objetos godos
    // podemos hacerle un map
    const lista = GODOS.map(
      // por cada rey se creará una Flashcard (componente), 
      // con todos los atributos del rey
      (rey)=> <Flashcard 
                key={rey.id}
                imagen={rey.imagen} 
                titulo={rey.nombre}
                texto={rey.texto}
              />
    );

    return (
      <div className="App">
        {/* Devolvemos la lista con los Flashcards */}
        {lista}
      </div>
    );
  }
}

export default App;
