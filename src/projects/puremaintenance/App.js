import React from 'react';
import './css/Home.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import PureLogo from './img/purelogo240.png';
import HomePage from './Home.js';
import ContactPage from "./Contact";

//debug:: the switch aint workin, lazy load import works fine
function App() {
    return (
        <Container className="bg-white" id="main-container-sa">
            <Row className="justify-content-left align-items-center">
                <Col className="no-flex-grow">
                    <img src={PureLogo} alt="Pure Mold Solution of San Antonio" />
                </Col>
                <Col>
                    <h4 className="sa">[Navigation disabled for demo]</h4>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <HomePage />
                    <ContactPage />
                </Col>
            </Row>
        </Container>
    );
}

export default App;