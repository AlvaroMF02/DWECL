import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label} from 'reactstrap';
import VentanaModal from './VentanaModal';

class Acordeon extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mostrar: false,
        tipo: "agregar",
        medicinasIncluidas: [],
        medicinasExcluidas: [],
      }
    }
  
    toggleModal (tipoAux) {
      this.setState({ mostrar: !this.state.mostrar, tipo: tipoAux })
    }
  
    add (datos) {
      // Con los datos del farmaco que llega lo meto en el array de los textarea
      if (datos !== undefined) {
        if (this.state.tipo === "agregar") {
          const medicinaAux = this.state.medicinasIncluidas.slice()
          medicinaAux.push(datos)
          this.setState({ medicinasIncluidas: medicinaAux })
        } else {
          const medicinaAux = this.state.medicinasExcluidas.slice()
          medicinaAux.push(datos)
          this.setState({ medicinasExcluidas: medicinaAux })
        }
        this.toggleModal();
      }
    }
  
    clear (tipo) {
      if (tipo === "agregar") {
        this.setState({ medicinasIncluidas: [] })
      } else {
        this.setState({ medicinasExcluidas: [] })
      }
    }
  
    render () {
      return <>
        <div>
          <UncontrolledAccordion defaultOpen={ ['1'] }stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">
                GESTION DE FARMACOS
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <Row>

                  <Col>
                    <Alert color="info">
                      Incluir X Medicamentos:
                      <Input type="textarea" name="rxseleccionar" id='rxseleccionar' value={ this.state.medicinasIncluidas.map((e) => e + "\n") } />
                      <Button color="info" onClick={ () => this.toggleModal("agregar") }>Add</Button>{ " " }
                      <Button color="info" onClick={ () => (this.clear("agregar")) }>Clear</Button>
                    </Alert>
                  </Col>
                  
                  <Col>
                    <Alert color="danger">
                      Excluir X Medicamentos:
                      <Input type="textarea" name="rxenmascarar" id='rxenmascarar' value={ this.state.medicinasExcluidas.map((e) => e + '\n') } />
                      <Button color="danger" onClick={ () => { this.toggleModal("quitar") } }>Add</Button>{ " " }
                      <Button color="danger" onClick={ () => (this.clear("quitar")) }>Clear</Button>
                    </Alert>
                  </Col>

                </Row>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>

        <VentanaModal add={ (datos) => this.add(datos) } mostrar={ this.state.mostrar } titulo={ "VENTANA MODAL" }/>
        <br />
      </>
    }
  }

  export default Acordeon;