import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Alert, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label
} from 'reactstrap';



const VentanaModalDiccionario = (props) => {

  const [farmacos] = useState(["CODIGO1|DESCRIPCION1", "CODIGO2|DESCRIPCION2", "CODIGO3|DESCRIPCION3", "CODIGO4|DESCRIPCION4", "CODIGO5|DESCRIPCION5",])
  const [elegido,setElegido] = useState("")
  const [busqueda,setBusqueda] = useState("")

  const {
    className
  } = props;

  const handleFarmaco = (event) => {
    event.preventDefault()
    setElegido(event.target.value)
  }

  // filtrada ns si lo filtra bien
  const listaFiltrada = farmacos.filter((d) => d.toLowerCase().startsWith(busqueda.toLowerCase())).map((d) => <option>{d}</option>)

  const handleBuscador = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={"//ESTO SE EJECUTA CUANDO MUESTRAS LA VENTANA"}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2} > Filtrar: </Label>
            <Col sm={10}>
              <Input onChange={handleBuscador}
                id="filtro"
                name="filtro"
                type="Text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input onChange={handleFarmaco} onClick={handleFarmaco}
                id="selectMulti"
                name="selectMulti"
                type="select"
              > 
                {listaFiltrada.map(valor =>{
                  return(
                    <option>
                      {valor}
                    </option>
                  );
                })}
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {elegido}<Button color="primary" onClick={()=>props.add(elegido)}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>
  );
}



class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      incluFarmacos: " ",
      excluFarmacos: " ",
    }
  }

  toggleModal () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  add (datos) {
    this.setState({incluFarmacos: this.state.incluFarmacos + " " +datos})
    // this.setState({excluFarmacos: this.state.excluFarmacos + " " +datos})
    this.toggleModal();
  }

  borrar(){
    this.setState({incluFarmacos: ""})
  }

  render () {
    return <>
      <div>
        <UncontrolledAccordion defaultOpen={['1']} stayOpen >
          <AccordionItem>
            <AccordionHeader targetId="1">
              GESTION DE FARMACOS
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <Row>
                <Col>
                  <Alert color="info">
                    Incluir Medicamento:
                    <Input type="textarea" name="rxseleccionar" value={this.state.incluFarmacos}/>
                    <Button color="info" onClick={() => { this.toggleModal() }}>Add</Button>{" "}
                    <Button color="info" onClick={()=> this.borrar()}>Clear</Button>
                  </Alert>
                </Col>
                <Col>
                  <Alert color="danger">
                    Excluir Medicamento:
                    <Input type="textarea" name="rxenmascarar" value={this.state.excluFarmacos}/>
                    <Button color="danger" onClick={() => { this.toggleModal() }}>Add</Button>{" "}
                    <Button color="danger" onClick={""}>Clear</Button>
                  </Alert>
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </div>
      <VentanaModalDiccionario
        add={(datos) => this.add(datos)}
        mostrar={this.state.isOpen}
        aceptar={"Añadir"}
        titulo={"VENTANA MODAL"}
      />
      <br />
    </>
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;