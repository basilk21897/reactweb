import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Headers() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="white" variant="white" style={{borderTopLeftRadius:'40'}}>
      <Container>
        <Navbar.Brand href="#home"> Visualization and Analytics Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
           
              
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><i className="fa-solid fa-house-user"></i>Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"><i className="fa-solid fa-circle-info"></i>
              About
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes">
            <i className="fa-solid fa-messages"></i>Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Headers