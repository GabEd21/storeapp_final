import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import axios from 'axios';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:2000/cart');
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await axios.delete(`http://localhost:2000/cart/${itemId}`);
            setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };
    

    const handleCheckout = async (itemId) => {
        try {
            // Move item to history table and delete from cart
            // Add your logic here
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#">Sports Wear</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarColor01" />
                <Navbar.Collapse id="navbarColor01">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cart" active>Cart</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-5">
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul className="list-group">
                        {cartItems.map((item, index) => (
                            <li key={index} className="list-group-item">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <input className="form-check-input me-3" type="checkbox" value="" id={`flexCheckDefault${index}`} />
                                        <img src={item.image} alt={item.item} style={{ width: '100px', marginRight: '20px' }} />
                                        <div>
                                            <p>{item.item}</p>
                                            <p className="m-0">Price: Php {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="mx-3">
                                        <p className="m-0">Quantity: {item.quantity}</p>
                                        <p className="m-0">Total: Php {item.total}</p>
                                    </div>
                                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                                    <Button variant="success" onClick={() => handleCheckout(item.id)} className="ms-2">Checkout</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Cart;
