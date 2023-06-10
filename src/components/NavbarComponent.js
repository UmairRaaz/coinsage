import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Exchanges from './Exchanges';
import Coins from './Coins';

const NavbarComponent = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/coinsage"} >CoinSage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/exchanges"} >Exchanges</Nav.Link>
                            <Nav.Link as={Link} to={"/coins"}>Coins</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/coinsage" element={<Home />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/coins" element={<Coins />} />
            </Routes>
        </Router>
    )
}

export default NavbarComponent;
