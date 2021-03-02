import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Home from './pages/Home';
import { Button, Container, Form, FormControl, InputGroup, Navbar } from 'react-bootstrap';
import MovieSearch from './components/MovieSearch';

const App = () => (
  <>
    <Navbar className="bg-dark justify-content-right">
      <Container>
        <div></div><MovieSearch />
      </Container>
    </Navbar>
    <Container>
      <Home />
    </Container>
  </>
)

export default App;
