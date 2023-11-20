import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {' '}
        <Button color="success">
          Inglés
        </Button>
        {' '}

        <Button color="primary">
          Alemán
        </Button>
        {' '}

        <Button color="secondary">
          Sueco
        </Button>
        {' '}

        <Button color="danger">
          Español
        </Button>
        {' '}

        <Button color="primary" outline>
          Inglés
        </Button>
        {' '}

      </div>
    );
  }

}

export default App;
