import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Container } from 'react-bootstrap';
import { 
    faGithub,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../css/app.css';

function Contact() {
    return (
        <Container>
            <Row className="align-items-center">
                <FontAwesomeIcon size="lg" icon={faBriefcase} />
                <h2>Currently...:</h2>
            </Row>
            <Row>
                <h3>Planning on Uni and self-learning machine learning</h3>
            </Row>
            <Row>
                <p>Not currently available for employment as I'm in a learning kind of mode right now. Thanks for stopping by! I'm always down to collab!</p>
            </Row>
        </Container>
    );
}
  
  export default Contact;
  