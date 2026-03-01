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
                <h4 className="grey-text">Site made by Em Soren Thomas with love from scratch. I've obtained permission to use the Deer Valley Nametags demo. All projects listed were created by me. All images and graphics were taken or created by me excluding trademarked logos. Thanks for stopping by :D</h4>
            </Row>
        </Container>
    );
}
  
  export default PageInfo;
  