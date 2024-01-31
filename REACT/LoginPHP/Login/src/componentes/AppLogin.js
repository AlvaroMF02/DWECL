import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';
import md5 from 'md5'

export default function AppLogin ({ userLogin }) {
    const [info, setInfo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        const usuario = event.target.usuario.value
        const clave = event.target.clave.value
        console.log("Usuario: " + usuario + " Clave: " + clave)

        // Comprobar vacios
        if (event.target.usuario.value == '' || event.target.clave.value == '') {
            setInfo('NO DÉJE CAMPOS VACÍOS')
        } else {
            userLogin(event.target.usuario.value, md5(event.target.clave.value))

        }
    }

    return (
        <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <Card body>

                    <CardTitle className="text-center" tag="h4">
                        Iniciar sesión
                    </CardTitle>

                    <Form onSubmit={handleSubmit}>

                        <Label for="usuario">Usuario</Label>
                        <Input id="usuario" name="usuario" type="text"/>

                        <Label for="clave">Contraseña</Label>
                        <Input id="clave" name="clave" type="password"/>

                        <br />
                        <Button color="primary" size="lg" block> <strong>Login</strong></Button>

                        <CardText className="text-danger">{info}</CardText>

                    </Form>
                </Card>
            </Col>
        </Row>
    )
}