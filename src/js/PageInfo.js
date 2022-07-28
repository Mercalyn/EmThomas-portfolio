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
                <h4 className="grey-text">Site made by Emily Soren Thomas for the purposes of having a portfolio site. I've obtained permission to use everything included on the site(mainly the demos!)</h4>
            </Row>
        </Container>
    );
}
  
  export default PageInfo;
  