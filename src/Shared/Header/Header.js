import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <Navbar sticky="top" className="shadow-sm" variant="light" bg="white" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img src={logo}
                        width="85"
                        height="70"
                        alt="Site Logo"
                    />
                    <h3 className="fw-bold mt-2 text-success">Planet Paradise</h3>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} className="fw-bold text-dark" to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} className="fw-bold text-dark" to="/myorders">My Orders</Nav.Link>
                    <Nav.Link as={Link} className="fw-bold text-dark" to="/manageorders">Manage Orders</Nav.Link>
                    <Nav.Link as={Link} className="fw-bold text-dark" to="/addorders">Add Service</Nav.Link>
                    <Nav.Link as={Link} className="fw-bold text-dark" to="/login">Login</Nav.Link>

                    <Navbar.Text className="text-secondary">
                        Riad Rahman
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;