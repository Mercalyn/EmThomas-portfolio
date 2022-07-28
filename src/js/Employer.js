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
                <h2>Current Employer: &nbsp;&#10097;&#10097;&nbsp;</h2>
            </Row>
            <Row>
                <h3>Looking for a good Employer!</h3>
            </Row>
            <Row>
                <p>Please contact me to see if I could be the right match for your needs!</p>
            </Row>
        </Container>
    );
}
  
  export default Contact;
  