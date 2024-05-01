import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';

function Admin() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#">Sports Wear</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarColor01" />
        <Navbar.Collapse id="navbarColor01">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Cart</Nav.Link>
            <Nav.Link href="#" active>About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-sm-2"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}

export default Admin;
