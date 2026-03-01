import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMessage,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container } from 'react-bootstrap';
import '../css/app.css';

function TitlePlate(props) {
    return (
        <Container className={`mb-5 ${props.variant ? props.variant : ""}`}>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Row className="pl-4 pr-4 justify-content-center align-items-center shaded-title title-plate">
                        <FontAwesomeIcon size="lg" icon={props.icon} />
                        <h2>{props.text}</h2>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
  
  export default TitlePlate;
  