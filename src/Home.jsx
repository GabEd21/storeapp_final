import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Axios from 'axios';

function Home() {
    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(1); // State for quantity

    useEffect(() => {
        Axios.get('http://localhost:2000').then((response) => {
            setItems(response.data);
        });
    }, []);

    const handleIncrement = () => {
        setQuantity(quantity + 1); // Function to increment quantity
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); // Function to decrement quantity, ensuring it doesn't go below 1
        }
    };

    const addToCart = async (item) => {
        try {
            // Calculate the total amount
            const total = item.price * quantity;

            // Send a request to the server to add the item to the cart along with quantity and total amount
            await Axios.post('http://localhost:2000/cart/add', { ...item, quantity, total });
            // Optionally, you can navigate to the cart page or show a success message
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <div className="App">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#">Sports Wear</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarColor01" />
                <Navbar.Collapse id="navbarColor01">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active>Home</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
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
                        <img src={item.image} alt="Product" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text">
                                <h4>Php {item.price}</h4>
                            </p>
                        </div>
                        {/* Quantity Selector */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="quantity-selector">
                                <button onClick={handleDecrement} className="btn btn-secondary btn-lg">-</button>
                                <span className="mx-2">{quantity}</span>
                                <button onClick={handleIncrement} className="btn btn-secondary btn-lg">+</button>
                            </div>
                            {/* Add to Cart Button */}
                            <Button variant="success" className="btn-lg" onClick={() => addToCart(item)}>Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
