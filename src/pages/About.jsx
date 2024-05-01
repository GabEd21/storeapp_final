import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';

function About() {
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
            <Button variant="secondary" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div className="content-container">
      <h2>About Our Sports Wear Store</h2>
        <p>Welcome to our sports wear store, where style meets performance! We are dedicated to providing high-quality athletic apparel and accessories for athletes of all levels.</p>
        <p>Whether you're hitting the gym, going for a run, or practicing your favorite sport, we have everything you need to look and feel your best. From moisture-wicking fabrics to breathable designs, our collection is carefully curated to enhance your performance and keep you comfortable throughout your workout.</p>
        <p>In addition to performance wear, we also offer a wide range of athletic footwear, accessories, and equipment to complete your training ensemble. Whether you're in need of a new pair of running shoes, a supportive sports bra, or durable gym accessories, we've got you covered.</p>
        <p>At our sports wear store, we believe that fitness should be accessible to everyone. That's why we strive to offer affordable prices without compromising on quality. We want to inspire and empower athletes to reach their goals and unleash their full potential.</p>
        <p>The following is <strong>rendered as bold text</strong>.</p>
        <p>The following is <em>rendered as italicized text</em>.</p>
        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
      </div>
    </div>
  );
}

export default About;
