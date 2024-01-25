import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label} from 'reactstrap';

const VentanaModal = (props) => {
  
    const [elegido, setElegido] = useState()
    const [farmacos] = useState(['CODIGO1|DESCRIPCION1', 'CODIGO2|DESCRIPCION2', 'CODIGO3|DESCRIPCION3', 'CODIGO4|DESCRIPCION4', 'CODIGO5|DESCRIPCION5'])
  
    // Filtro
    const handleChange = (event) => {
      let elegidoAux;
      const filtrados = farmacos.find((e) => e.toLowerCase().includes(event.target.value.toLowerCase()))

      if (filtrados !== undefined) {
        elegidoAux = filtrados
      } else {
        elegidoAux = ""
      }

      setElegido(elegidoAux)
    }
  
    const handleClick = (event) => {
      setElegido(event.target.value)
    }
  
    return (
      <div>
        <Modal isOpen={ props.mostrar }>

          <ModalHeader>{ props.titulo }</ModalHeader>

          <ModalBody>
            <FormGroup row>
              <Label sm={ 2 } > Filtrar: </Label>
              <Col sm={ 10 }>
                <Input onChange={ handleChange } id="filtro" name="filtro" type="Text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={ 12 }>
                <Input onChange={ handleChange } onClick={ handleClick } id="selectMulti" name="selectMulti" type="select" value={ elegido }>
                  { farmacos.map((e) => <option>{ e }</option>) }
                </Input>
              </Col>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            { elegido }<Button color='primary' onClick={ () => props.add(elegido) }>Añadir</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ModalFooter>

        </Modal>
      </div>
    );
  }
  
export default VentanaModal