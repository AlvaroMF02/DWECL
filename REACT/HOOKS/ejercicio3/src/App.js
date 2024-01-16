import './App.css';
import { Button, Input, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component, useState } from 'react';
import ReactDOM from "react-dom";



function ListaDeseos(props) {
  return (
    <ul>{props.deseos.map(d =>
      <Row>
        <Col sm={{ offset: 1, size: 1 }}>
          <MostrarDeseo deseo={d} />
        </Col>
        <Col sm={{ offset: 1, size: 2 }}>
          <Borrar deseo={d} quitar={(elemento) => props.quitar(elemento)} />
        </Col>
      </Row>
    )}
    </ul>
  );
}

function Deseo(props) {
  return (
    <form onSubmit={props.deseoNuevo}>
      <Input type='text' placeholder='Añada un deseo' name='deseo' />
    </form>
  );
}

function MostrarDeseo(props) {
  return (
    <li>{props.deseo}</li>
  );
}

function Borrar(props) {
  return (
    <Button onClick={(deseo) => props.quitar(props.deseo)}>
      Borrar
    </Button>
  );
}

function useForceUpdate(){
  let [value,setValue] = useState(true)
  return () => setValue(!value)
}

function App (props){
  const [deseos,setDeseos] = useState(["novio","ropa"])

  const quitar = (elemento)=>{
    setDeseos(deseos.filter(d=>d!=elemento))
  }

  let forceUpdate = useForceUpdate()

  const handleDeseoNuevo = (event) =>{
    event.preventDefault()
    let d = deseos
    d.push(event.target.deseo.value)
    setDeseos(d)

    forceUpdate()
  }

  return(
    <div className='App'>
      <h1>Añade un regalo</h1>
      <ListaDeseos quitar={(e)=>quitar(e)} deseos={deseos}/>
      <Deseo deseoNuevo={handleDeseoNuevo}/>
    </div>
  );
}

export default App;