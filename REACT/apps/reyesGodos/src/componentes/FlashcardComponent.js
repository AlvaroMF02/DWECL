import { Card, CardImg, CardBody, CardTitle,CardText } from 'reactstrap';

// Componente fuera de la app que tendremos que importar
const Flashcard = (props) => {
  // devuelve solo uno
    return (<>
      <div className="row">
        {/* Una Card con el titulo pasado por props al igual que la imagen y el teto */}
      <Card>
        <CardBody>
        <CardTitle tag="h5">{props.titulo}</CardTitle>
        <div className="col-md-8 col-lg-4">
          <CardImg width="50%" src={props.imagen} />
        </div>
        <CardText>{props.texto}</CardText>
        </CardBody>
      </Card>
      </div>
    </>);
  }

  // exportar el componente
export default Flashcard;