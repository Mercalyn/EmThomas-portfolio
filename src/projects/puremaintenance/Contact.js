import React, {useState} from 'react';
import AlamoImg from './img/alamo.png';
import './css/Home.css';
import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

function Contact(){
    return(
        <Container>
            <Row className="mt-3 justify-content-center">
                <Image src={AlamoImg} />
            </Row>
            <Row className="mt-3 justify-content-center">
                <h4 className="sa">Pure Mold Solution of San Antonio</h4>
            </Row>
            <Row className="mt-1 justify-content-center">
                <h5 className="sa">Remember the Alamo -- Not the Mold! </h5>
            </Row>
            <Row className="mt-1 justify-content-center">
                <h5 className="grey-text-sa">[Contact information redacted for demo]</h5>
            </Row>
        </Container>
    )
}

export default Contact;