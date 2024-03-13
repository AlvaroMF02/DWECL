import React, { useState } from 'react';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const PISOS = [[148, 3, 2, 1, 0, 0, 2009, 3, 1],
[445, 5, 3, 1, 1, 1, 1987, 5, 1],
[78, 2, 2, 1, 0, 0, 2007, 3, 1],
[70, 2, 2, 1, 1, 0, 1990, 4, 1],
[90, 2, 2, 0, 1, 1, 2019, 3, 1],
[144, 4, 2, 1, 0, 0, 1988, 4, 1],
[77, 2, 2, 0, 0, 1, 2009, 4, 1],
[250, 3, 3, 1, 0, 1, 2000, 5, 1],
[117, 2, 2, 0, 1, 0, 2019, 5, 1],
[220, 3, 3, 0, 1, 1, 1990, 4, 1],
[95, 2, 2, 0, 0, 0, 2019, 4, 0],
[138, 2, 2, 0, 1, 1, 2004, 3, 1],
[105, 3, 1, 0, 0, 0, 2003, 3, 0],
[56, 1, 1, 1, 0, 0, 1999, 4, 0],
[104, 3, 2, 0, 1, 1, 1986, 4, 1],
[90, 2, 2, 0, 0, 0, 2003, 4, 1],
[95, 2, 2, 1, 1, 0, 2023, 5, 1],
[250, 4, 3, 1, 1, 0, 2000, 3, 0],
[46, 1, 1, 0, 0, 0, 2005, 2, 0],
[163, 3, 2, 1, 0, 0, 2008, 2, 1],
[81, 2, 2, 0, 1, 1, 1990, 3, 1],
[120, 4, 3, 0, 1, 1, 1967, 4, 1],
[119, 2, 2, 1, 1, 0, 2020, 5, 0],
[119, 2, 2, 1, 0, 0, 2015, 4, 1],
[90, 2, 2, 1, 0, 0, 2016, 4, 1],
[130, 3, 1, 0, 0, 0, 2010, 3, 0],
[206, 3, 3, 1, 1, 0, 2002, 3, 1],
[190, 4, 2, 1, 1, 1, 2005, 3, 1],
[192, 4, 3, 0, 0, 1, 2002, 2, 0],
[250, 4, 2, 0, 1, 1, 2002, 3, 0],
[253, 3, 2, 0, 1, 0, 2007, 3, 0],
[85, 2, 2, 0, 1, 0, 2021, 5, 1],
[124, 3, 2, 0, 1, 1, 1999, 4, 1],
[150, 3, 3, 0, 1, 0, 2001, 3, 1],
[61, 2, 1, 0, 0, 0, 1967, 1, 0],
[272, 4, 4, 0, 1, 0, 2018, 4, 1],
[65, 2, 1, 0, 0, 0, 2004, 4, 0],
[85, 3, 1, 0, 0, 0, 1970, 4, 0],
[120, 2, 2, 1, 1, 1, 2005, 5, 1],
[563, 6, 5, 0, 1, 1, 2000, 5, 1],
[192, 3, 2, 0, 1, 0, 2006, 3, 1],
[180, 4, 3, 0, 1, 1, 1991, 3, 1],
[144, 4, 2, 1, 0, 0, 1990, 3, 1],
[263, 3, 3, 1, 1, 1, 2007, 3, 1],
[133, 3, 2, 1, 0, 0, 2005, 4, 1],
[93, 1, 1, 1, 1, 1, 2002, 3, 1],
[118, 2, 2, 0, 1, 1, 2004, 5, 1],
[469, 4, 6, 1, 1, 0, 2024, 5, 1],
[73, 3, 1, 0, 0, 0, 1999, 3, 0],
[192, 3, 2, 0, 1, 1, 1995, 3, 1],
[332, 3, 2, 0, 1, 1, 2000, 4, 1],
[2200, 5, 4, 0, 1, 1, 1991, 4, 1],
[133, 3, 2, 0, 1, 1, 2005, 5, 1],
[152, 3, 2, 0, 1, 1, 2000, 5, 1],
[133, 3, 2, 1, 0, 1, 2009, 3, 1],
[90, 2, 2, 0, 1, 1, 2019, 3, 1],
[144, 4, 2, 1, 0, 0, 1988, 4, 1],
[250, 4, 3, 1, 1, 0, 2000, 3, 0],
[95, 2, 2, 1, 1, 0, 2023, 5, 1],
[77, 2, 2, 0, 0, 1, 2009, 4, 1],
[209, 3, 3, 1, 1, 1, 2019, 5, 1]];

const PRECIOS = [415000, 1850000, 335000, 675000, 370000, 680000, 299000, 2599000, 520000, 1980000, 147000, 219900, 136000, 138000, 400000, 244000, 335000, 735000, 180000, 380000, 260000, 700000, 299200, 149000, 370000, 320000, 950000, 380000, 367000, 430000, 293000, 545000, 641000, 477225, 95000, 1395000, 158000, 165000, 296900, 1990000, 222500, 448000, 680000, 2250000, 369000, 375000, 429000, 1690000, 159000, 222500, 850000, 2750000, 400000, 780000, 400000, 370000, 680000, 735000, 335000, 299000, 1375000]


function Formulario () {

  let anio = new Date();
  let math = require('mathjs');

  const [respuestas, setRespuestas] = useState(Array(9).fill(0));
  const [precio, setPrecio] = useState(0);
  const [terminado, setTerminado] = useState(false);

  // Paso a matrices los datos
  const matrPisos = math.matrix(PISOS);
  const matrPrec = math.matrix(PRECIOS);

  // Calculo para la ecuacion, "x" es la matriz de pisos e "y" son los precios
  const calculo = math.multiply(math.multiply(math.inv(math.multiply(math.transpose(matrPisos), matrPisos)), math.transpose(matrPisos)), matrPrec)
  // Con el calculo hecho solo queda multiplicarlo por las variables
  let calcuTheta = calculo._data;

  // Al hacer submit actualizo el precio 
  // multiplicando lo de Theta por cada respuesta
  // y lo redondeo
  const handleSubmit = (event) => {
    event.preventDefault();

    setPrecio(math.round(math.multiply(calcuTheta, respuestas), 2))

    setTerminado(true)
  }

  // Cada vez que se escriba algo se irá guardando en orden
  // en el array de respuestas
  const handleChange = (event) => {

    let respuestasCopia = JSON.parse(JSON.stringify(respuestas));
    let e = event.target;

    switch (e.name) {
      case "metros":
        respuestasCopia[0] = e.value;
        break;
      case "habitaciones":
        respuestasCopia[1] = e.value;
        break;
      case "banios":
        respuestasCopia[2] = e.value;
        break;
      case "vistas":
        respuestasCopia[3] = e.checked ? 1 : 0;
        break;
      case "garaje":
        respuestasCopia[4] = e.checked ? 1 : 0;
        break;
      case "trastero":
        respuestasCopia[5] = e.checked ? 1 : 0;
        break;
      case "anio":
        respuestasCopia[6] = e.value;
        break;
      case "estado":
        respuestasCopia[7] = e.value ? 1 : 0;
        break;
      case "piscina":
        respuestasCopia[8] = e.checked ? 1 : 0;
        break;
    }

    setRespuestas(respuestasCopia);
  }

  return (
    <div>
      <Form id="form" onSubmit={handleSubmit}>

        <Input type='number' id='metros' name='metros' onChange={handleChange} required placeholder='M2 de la casa' min={0} />
        <Input type='number' id='habitaciones' name='habitaciones' onChange={handleChange} required placeholder='Número de habitaciones' min={0} />
        <Input type='number' id='banios' name='banios' onChange={handleChange} required placeholder='Número de baños' min={0} />
        <Input type='number' id='estado' name='estado' onChange={handleChange} required placeholder='Estado de la vivienda (1-5)' min={1} max={5} />
        <Input type='number' id='fecha' name='fecha' onChange={handleChange} required placeholder='Año de construcción' min={1900} max={anio.getFullYear()} />

        <div id='checkBox'>
          <Label htmlFor='vistas'>Vistas al mar</Label>
          <Input type='checkbox' id='vistas' name='vistas' onChange={handleChange} />

          <Label htmlFor='garaje'>Garaje</Label>
          <Input type='checkbox' id='garaje' name='garaje' onChange={handleChange} />

          <Label htmlFor='trastero'>Trastero</Label>
          <Input type='checkbox' id='trastero' name='trastero' onChange={handleChange} />

          <Label htmlFor='piscina'>Piscina</Label>
          <Input type='checkbox' id='piscina' onChange={handleChange} name='piscina' />

        </div>

        <Button id='boton' outline color='secondary'>Enviar datos</Button>

      </Form>
      <h5>El precio de la vivienda estimado es: {precio} €</h5>


    </div>
  )
}

export default Formulario;