import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';
import Axios from 'axios';

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:2000').then((response) => {
            setItems(response.data);
        });
    }, []);

    return (
        <div className="App">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#">Sports Wear</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarColor01" />
                <Navbar.Collapse id="navbarColor01">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active>Home</Nav.Link>
                        <Nav.Link href="#">Cart</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
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

            {/* Container for small square */}
            <div className="small-square-container">
                {items.map((item, index) => (
                    <div key={index} className="card mb-3 small-square">
                        <h3 className="card-header">{item.product}</h3>
                        <div className="variation-container">
                            {item.variation.map((size, i) => (
                                <Button key={i} variant="outline-dark" className="btn-sm variation-btn">{size} UK</Button>
                            ))}
                        </div>
                        <img src={`http://localhost:2000/${item.image}`} alt="Product" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text">
                                <h4>Php {item.price}</h4>
                            </p>
                        </div>
                        <Button variant="success" className="btn-lg">Buy Now</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
