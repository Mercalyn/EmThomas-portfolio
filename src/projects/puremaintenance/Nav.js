import React from 'react';
import PureLogo from './img/purelogo240.png';
import { Button, Navbar, Container } from 'react-bootstrap';
import './css/Nav.css';

function NavPage() {
  return (
    <Container>
        <Navbar bg="white" expand="lg">
            <Navbar.Brand>
                <img src={PureLogo} alt="Pure Mold Solution of San Antonio" />
            </Navbar.Brand>
        </Navbar>
    </Container>
  );
}

export default NavPage;