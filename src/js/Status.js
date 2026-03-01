import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { Image, Button, Row, Col, Container } from 'react-bootstrap';
import { 
    faGithub,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../css/app.css';

import UVUImg from '../img/uvuseal.png';
import TitlePlate from './TitlePlate.js';

function Contact() {
    return (
        <Container>
            <TitlePlate text="Status" icon={faBriefcase} variant="float-up-down-a" />
            <Row className="justify-content-center align-items-center">
                <Col xs={0} lg={2}>
                    <Image fluid src={UVUImg} />
                </Col>
                <Col xs={12} lg={6} className="shaded-area ml-3">
                    <p>Attending Utah Valley University for a Bachelor of Science in Computer Engineering. Graduation expected in Summer of 2028. Current GPA: 3.98.</p>
                    <p className="green-text">Seeking internship for any semester up to and including Summer 2028.</p>
                </Col>
            </Row>
        </Container>
    );
}
  
  export default Contact;
  