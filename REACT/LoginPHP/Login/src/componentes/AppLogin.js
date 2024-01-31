import React, {useState} from 'react';
import {Row,Col,Card,CardTitle,CardText,Form,FormGroup,Button,Label,Input} from 'reactstrap';
 
export default function AppLogin(props) {
 
    const [password,setPassword]=useState('');
    const [telefono,setTelefono]=useState('');
    const [info,setInfo]=useState('');

    const handleChange=(event)=>{
        if (event.target.name=="password"){
            setPassword(event.target.value)
        }
        if (event.target.name=="telefono"){
            setTelefono(event.target.value)
        }
    }

    const clicar=()=>{
        console.log(telefono+" "+password)
        if (password==''||telefono==''){
            setInfo('NO DÉJE CAMPOS VACÍOS')
        }else{
//            if (telefono=='Myfpschool'&& password=="2023"){
                props.userLogin(telefono,password)
//            }else{
//                setInfo('DATOS INCORRECTOS');
//            }
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
   <Form inline>
     <FormGroup className="mb-2 me-sm-2 mb-sm-0">
       <Label  className="me-sm-2" for="exampleEmail">Usuario</Label>
       <Input
         id="Telefono"
         name="telefono"
         type="text"
         onChange={handleChange}
       />
     </FormGroup>
     <FormGroup className="mb-2 me-sm-2 mb-sm-0">
       <Label className="me-sm-2" for="examplePassword">Contraseña</Label>
       <Input
         id="Password"
         name="password"
         type="password"
         onChange={handleChange}
       />
     </FormGroup>
     <br/>
     <Button color="primary" size="lg" block onClick={clicar} >
       <strong>Login</strong>
     </Button>
     <CardText className="text-danger">{info}</CardText>
    
   </Form>
   </Card>
 </Col>
</Row>
 )
}