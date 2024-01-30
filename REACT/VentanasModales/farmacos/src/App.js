import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Alert, Row, Col, UncontrolledAccordion, AccordionItem,
    AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader,
    ModalBody, ModalFooter, FormGroup, Label
} from 'reactstrap';
import { FARMACOS } from './componentes/datos';

const VentanaModalDiccionario = (props) => {
    const { className } = props;

    const [busqueda, setBusqueda] = useState("");
    const [elegido, setElegido] = useState("");

    // Filtra los farmacos
    const filtrado = FARMACOS.find(d => d.descATC.toLowerCase().match(busqueda.toLowerCase()))


    const handleChange = (event) => {
        // Guardar la busqueda para despues hacer el find
        setBusqueda(event.target.value)
        // Si te equivocas al escribir (no encuentra el codigo) da error
        // Al elegir desde el select da error
        // Las otras funcionalidades van bien
        if (filtrado != undefined) {
            if (filtrado[0].codATC != undefined) {
                setElegido(filtrado[0].codATC + ", ")
            }
        }
    }

    const handleClick = (event) => {

    }

    return (
        <div>
            <Modal isOpen={props.mostrar} toggle={props.toggle}
                className={className} onEntering={"//ESTO SE EJECUTA CUANDO MUESTRAS LA VENTANA"}>
                <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
                <ModalBody>
                    <FormGroup row>
                        <Label sm={2} > Filtrar: </Label>
                        <Col sm={10}>
                            <Input onChange={handleChange} id="filtro" name="filtro" type="Text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Input
                                onChange={handleChange} onClick={handleClick}
                                id="selectMulti"
                                name="selectMulti"
                                type="select">
                                {filtrado.map(valor => {
                                    return (
                                        <option>
                                            {valor.codATC + " | " + valor.descATC}
                                        </option>
                                    );
                                })}
                            </Input>
                        </Col>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    {elegido}<Button color="primary"
                        onClick={() => { props.add(elegido) }}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ModalFooter>
            </Modal>
        </div >
    );
}
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            rxseleccionar: "",
            rxenmascarar: "",
            diccionario: "FÁRMACO",
            diff: "",
        }
    }

    handleChange = (event) => {
        // nombre del que se ha pulsado add
        // this.setState({ diff: event.target.name })
    }

    add(datos) {
        if (this.state.diff === "inclu") {
            this.setState({ rxseleccionar: this.state.rxseleccionar + datos })
        } else {
            this.setState({ rxenmascarar: this.state.rxenmascarar + datos })
        }
        this.toggleModal();
    }

    clearSelec() {
        this.setState({ rxseleccionar: "" })
    }

    clearEnmas() {
        this.setState({ rxenmascarar: "" })
    }
    setIsOpen(d) {
        if (d == undefined) return;
        this.setState({ isOpen: d })
    }
    toggleModal(datos) {
        this.setIsOpen(!this.state.isOpen);
        this.setState({ diff: datos })
    }
    render() {
        return (
            <>
                <div>
                    <UncontrolledAccordion defaultOpen={['1']} stayOpen>
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                GESTION DE FARMACOS
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <Row>

                                    <Col>
                                        <Alert color="info">
                                            Incluir X Medicamentos:
                                            <Input type="textarea"
                                                name="rxseleccionar" onChange={this.handleChange.bind(this)}
                                                value={this.state.rxseleccionar} />
                                            <Button onClick={() => { this.toggleModal("inclu") }} color="info">Add</Button>{" "}
                                            <Button color="info" onClick={() => this.clearSelec()}>Clear</Button>
                                        </Alert>
                                    </Col>

                                    <Col>
                                        <Alert color="danger">
                                            Excluir X Medicamentos:
                                            <Input type="textarea" name="rxenmascarar" onChange={this.handleChange.bind(this)} value={this.state.rxenmascarar} />
                                            <Button onClick={() => { this.toggleModal("exclu") }} color="danger">Add</Button>{" "}
                                            <Button color="danger" onClick={() => this.clearEnmas()}>Clear</Button>
                                        </Alert>
                                    </Col>

                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </div>
                <VentanaModalDiccionario diccionario={this.state.diccionario}
                    add={(datos) => this.add(datos)} mostrar={this.state.isOpen} aceptar={"Añadir"}
                    toggle={() => this.toggleModal()} titulo={"Add " + this.state.diccionario} />
                <br />
            </>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <Filter />
            </div>
        );
    }
}
export default App;