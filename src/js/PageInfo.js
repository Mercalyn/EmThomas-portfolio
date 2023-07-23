import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Container } from 'react-bootstrap';
import { 
    faGithub,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../css/app.css';

function PageInfo() {
    return (
        <Container className="w-100 m-0 p-0 justify-items-end">
            <Row className="w-100 m-0 p-0">
                <h4 className="grey-text">Site made by Emily Soren Thomas with love from scratch. I've obtained permission to use all the demos. All images taken by or for me. Spaceship and earth graphics by me. Thanks for stopping by :D</h4>
            </Row>
        </Container>
    );
}
  
  export default PageInfo;
  