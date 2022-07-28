import React from 'react';
import '../css/app.css';
import { 
  Container,
  Col
} from 'react-bootstrap';
import {
    Outlet
} from "react-router-dom";
import NavPage from './NavPage.js';


function DVnametags() {

    return (
        <Container id="main-content-container-dv">
            <NavPage />
            <Col>
                <Outlet />
            </Col>
        </Container>
    );
}

export default DVnametags;
