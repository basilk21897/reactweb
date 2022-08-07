import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Components/Headers';
import Cards from './Components/Cards';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

const[state,setState]=useState([])

  useEffect(()=>{
    axios.get('https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/images').then(response=>{
      console.log(response.data)
      setState(response.data)
    })
  },[])
  return (
    <div className='container-fluid text-center' style={{backgroundColor:'#92dff3'}}>
      <div className='row'>
        <div className='col-xl-12'>
          <Headers/>
        </div>
        <div className='row text-center'>
          <div className='col-xl-6 text-center'>
            <Cards/>
            <br></br>
          </div>
          <br></br>
          <div className='col-xl-6 text-center'>
            <img src={state.damImage} style={{width:'50%'}}></img>
            <br></br>
          </div>
          <br></br>
        </div>
        <div className='row text-center'>
          <div className='col-xl-6 text-center'>
          <Card style={{ width: '50%',marginLeft:'380px' }}>
      <Card.Body>
        <Card.Title> Inspection</Card.Title>
        <Card.Img variant="top" src='dam.jpg' />

        <Button variant="danger" className='ml-2'>Open project</Button>
        <Button variant="primary"className=''>Report outcome</Button>

      </Card.Body>
    </Card>

          </div>
          <div className='col-xl-6 text-center'>
          <Card style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>Diver's Inspection</Card.Title>
        <Card.Img variant="top" src='photo.jpg' />

        <Button variant="danger" className='ml-2'>Open project</Button>
        <Button variant="primary"className=''>Report outcome</Button>

      </Card.Body>
    </Card>

          </div>
        </div>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-12'>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{borderTopLeftRadius:'40'}}>
      <Container>
        <div>
        <Nav.Link href="#home">www.basil.com</Nav.Link>
        <Nav.Link href="#home">info@company.com</Nav.Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
           <Nav.Link style={{textAlign:'center',marginLeft:'350px'}}>           @2021 company ( Technologies Pvt. Ltd.)</Nav.Link>
 
          </Nav>
          <Nav>
            <Nav.Link>version 2.0.0</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}

export default App;
